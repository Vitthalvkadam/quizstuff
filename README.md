
# The Most Useless Quiz 🤡

A chaotic personality quiz that judges your love life, college drama, hostel stories, and questionable life decisions.

- 🎭 Discover your completely unnecessary personality type.
- 🔀 Random questions and unexpected follow-ups.
- 🔥 Funny reactions, roasts, and ridiculous results.
- 💀 Get judged based on your choices.
- 🌐 **Live Demo:** https://quizstuff.vercel.app

**Disclaimer:** Take it seriously. The quiz certainly doesn't.


# The Most Useless Quiz

React + Vite + Framer Motion. No backend.

    npm install
    npm run dev      # local dev server
    npm run build    # production build in /dist

110+ questions live in `src/data.js` (four pools: warm, mid, spicy, finale). Each round picks 12
questions that haven't been used yet, so every restart is different. Add a question with
`q("text", o("option", "troll reaction", "o2c1"), ...)`. Trait letters: o overthinker, i idiot,
r red flag, c chaos, d delusion, z bad rizz. Give an option a 4th argument (another `q(...)`) to attach a follow-up.
