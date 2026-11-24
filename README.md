# The Most Useless Quiz

React + Vite + Framer Motion. No backend.

    npm install
    npm run dev      # local dev server
    npm run build    # production build in /dist

110+ questions live in `src/data.js` (four pools: warm, mid, spicy, finale). Each round picks 12
questions that haven't been used yet, so every restart is different. Add a question with
`q("text", o("option", "troll reaction", "o2c1"), ...)`. Trait letters: o overthinker, i idiot,
r red flag, c chaos, d delusion, z bad rizz. Give an option a 4th argument (another `q(...)`) to attach a follow-up.
