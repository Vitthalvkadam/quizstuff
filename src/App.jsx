import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { buildQueue, prep, pickOne, shuffle, JUDGE, NOTES, LOADING, scoreResult } from './data.js'

const ZERO = { o: 0, i: 0, r: 0, c: 0, d: 0, z: 0 }

const Squiggle = ({ w = 280 }) => (
  <svg className="squiggle" width={w} viewBox="0 0 300 14" aria-hidden="true">
    <path d="M3 9 C 30 2, 50 14, 80 7 S 140 3, 170 9 S 240 13, 297 5" />
  </svg>
)

const Arrow = () => (
  <svg className="arrow" width="70" height="46" viewBox="0 0 70 46" aria-hidden="true">
    <path d="M4 6 C 22 2, 50 8, 58 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M48 31 L 58 38 L 61 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Header({ onHome }) {
  return (
    <header className="top">
      <button className="logo" onClick={onHome} aria-label="Back to start">
        the most useless quiz
      </button>
    </header>
  )
}

function Intro({ onStart }) {
  return (
    <section className="intro">
      <h1 className="title">
        The most
        <br />
        useless quiz
        <br />
        on the internet.
      </h1>
      <Squiggle />
      <p className="lede">
        A hundred-plus questions hiding in here, twelve per round, different every time. Zero insights. We will judge and troll every answer, including the ones you think were fine. 🙂
      </p>
      <div className="startrow">
        <button className="btn" onClick={onStart}>
          START QUIZ
        </button>
        <span className="note">
          <Arrow /> psst, it&rsquo;s this one
        </span>
      </div>
      <p className="fine">Takes about four minutes. You will not get them back.</p>
    </section>
  )
}

function Quiz({ game, onChoose, onNext }) {
  const q = game.queue[game.i]
  const answered = game.picked !== null
  const note = NOTES[(game.i + game.seed) % NOTES.length]
  return (
    <section className="quiz">
      <div className="tally" aria-label={`Question ${game.i + 1}`}>
        {Array.from({ length: game.i }).map((_, n) => (
          <span key={n} className="tick" style={{ transform: `rotate(${((n * 37) % 7) - 3}deg)` }} />
        ))}
        <span className="tick now" />
        <span className="q-mark">?</span>
      </div>
      <p className="count">
        Question {game.i + 1} <em>{note}</em>
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={game.i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="q">{q.text}</h2>
          <div className="choices" role="group" aria-label="Answers">
            {q.options.map((o, n) => (
              <button
                key={o.t}
                className={`choice${game.picked === n ? ' on' : ''}${answered && game.picked !== n ? ' off' : ''}`}
                disabled={answered}
                onClick={() => onChoose(o, n)}
              >
                <span className="dot" aria-hidden="true" />
                <span>{o.t}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      {answered && (
        <motion.div
          className="react"
          initial={{ opacity: 0, scale: 0.96, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: -0.4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <p className="verdict">{game.reaction}</p>
          <p className="judge">
            <mark>{game.judge}</mark>
          </p>
          <button className="btn small" onClick={onNext} autoFocus>
            {game.i + 1 >= game.queue.length ? 'See what we found' : 'Next, I guess'}
          </button>
        </motion.div>
      )}
    </section>
  )
}

function Loading({ onDone }) {
  const [e, setE] = useState(0)
  const lines = useRef(shuffle(LOADING).slice(0, 6)).current
  useEffect(() => {
    const t0 = Date.now()
    const id = setInterval(() => {
      const el = Date.now() - t0
      setE(el)
      if (el > 6200) {
        clearInterval(id)
        onDone()
      }
    }, 80)
    return () => clearInterval(id)
  }, [])
  let p = e < 3600 ? (e / 3600) * 88 : e < 5800 ? 88 + ((e - 3600) / 2200) * 11 : 100
  p = Math.min(100, Math.round(p))
  const line = e > 5800 ? 'Okay, fine. Done.' : e > 4200 && e <= 5800 ? 'Stuck at 99%. This is normal. Probably.' : lines[Math.min(lines.length - 1, Math.floor(e / 750))]
  return (
    <section className="loading">
      <h2 className="q">Analyzing your answers…</h2>
      <div className="track" role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100}>
        <div className="fill" style={{ width: `${p}%` }} />
      </div>
      <p className="pct">{p}%</p>
      <p className="judge">
        <mark>{line}</mark>
      </p>
    </section>
  )
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
    } catch {}
    ta.remove()
  }
}

function Result({ res, onRestart }) {
  const [msg, setMsg] = useState('')
  const text = `I got “${res.name}” on The Most Useless Quiz. ${res.troll} More useless than ${res.percentile}% of people. Waste your time too: ${window.location.href}`
  const canShare = typeof navigator !== 'undefined' && !!navigator.share
  const copy = async () => {
    await copyText(text)
    setMsg('Copied. Now go ruin someone’s afternoon.')
  }
  const share = async () => {
    try {
      await navigator.share({ title: 'The Most Useless Quiz', text, url: window.location.href })
    } catch {}
  }
  return (
    <section className="result">
      <motion.article
        className="card"
        initial={{ opacity: 0, y: 16, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 16 }}
      >
        <p className="small">You are officially a</p>
        <h2 className="rname">{res.name}</h2>
        <Squiggle w={220} />
        <p className="blurb">{res.blurb}</p>
        <div className="bars">
          {res.bars.map((b) => (
            <div className="bar" key={b.k}>
              <span>{b.label}</span>
              <div className="bt">
                <i style={{ width: `${b.pct}%` }} />
              </div>
              <span className="bp">{b.pct}%</span>
            </div>
          ))}
        </div>
        <p className="line">
          <b>Verdict:</b> {res.verdict}
        </p>
        <p className="line">
          <b>Should avoid:</b> {res.avoid}
        </p>
        <p className="line">
          <b>Rizz rating:</b> {res.rizz}
        </p>
        <p className="line">
          <b>Final troll:</b> {res.troll}
        </p>
        <p className="line">
          <b>Uselessness:</b> more useless than {res.percentile}% of people who took this.
        </p>
        <p className="stamp">certified by nobody</p>
      </motion.article>
      <div className="actions">
        <button className="btn" onClick={copy}>
          Copy my result
        </button>
        {canShare && (
          <button className="btn ghost" onClick={share}>
            Share
          </button>
        )}
        <button className="btn ghost" onClick={onRestart}>
          Do it again
        </button>
      </div>
      <p className="fine" aria-live="polite">
        {msg || 'Every restart picks fresh questions, so your friends get a different (worse) quiz.'}
      </p>
    </section>
  )
}

export default function App() {
  const [screen, setScreen] = useState('intro')
  const [game, setGame] = useState(null)
  const [res, setRes] = useState(null)

  const start = () => {
    setGame({ queue: buildQueue(), i: 0, s: { ...ZERO }, hist: [], picked: null, reaction: '', judge: '', seed: Math.floor(Math.random() * 6) })
    setScreen('quiz')
    window.scrollTo(0, 0)
  }

  const choose = (opt, n) => {
    if (game.picked !== null) return
    const s = { ...game.s }
    Object.entries(opt.p || {}).forEach(([k, v]) => (s[k] += v))
    const queue = [...game.queue]
    if (opt.f) queue.splice(game.i + 1, 0, prep(opt.f))
    setGame({ ...game, s, queue, hist: [...game.hist, { t: opt.t }], picked: n, reaction: opt.r, judge: pickOne(JUDGE) })
  }

  const next = () => {
    const ni = game.i + 1
    if (ni >= game.queue.length) {
      setRes(scoreResult(game.s))
      setScreen('loading')
      return
    }
    const queue = [...game.queue]
    if (queue[ni].make) queue[ni] = prep(queue[ni].make(game.hist))
    setGame({ ...game, queue, i: ni, picked: null, reaction: '', judge: '' })
  }

  const home = () => {
    setScreen('intro')
    setGame(null)
  }

  return (
    <main className="page">
      <Header onHome={home} />
      {screen === 'intro' && <Intro onStart={start} />}
      {screen === 'quiz' && game && <Quiz game={game} onChoose={choose} onNext={next} />}
      {screen === 'loading' && <Loading onDone={() => setScreen('result')} />}
      {screen === 'result' && res && <Result res={res} onRestart={start} />}
      <footer className="foot">
        A small internet experiment. Nothing leaves your device. Honestly, nobody wants it.
      </footer>
    </main>
  )
}
