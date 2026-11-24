// Traits: o = overthinker, i = idiot, r = red flag, c = chaos, d = delusion, z = bad rizz
export const shuffle = (a) => {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}
export const pickOne = (a) => a[Math.floor(Math.random() * a.length)]
export const prep = (q) => ({ ...q, options: shuffle(q.options) })

// helpers: o(option, reaction, "o2c1", followUp?) and q(text, ...options)
const P = (s) => {
  const out = {}
  for (const [, k, v] of s.matchAll(/([oircdz])(\d)/g)) out[k] = +v
  return out
}
const o = (t, r, p, f) => (f ? { t, r, p: P(p), f } : { t, r, p: P(p) })
const q = (text, ...options) => ({ text, options })

/* ---------- WARM: very simple, gentle trolling ---------- */
const warm = [
  q("What's your phone battery at right now?", o("Above 50%", "Liar. You're plugged in and you know it 🔌", "d2"), o("Under 10%", "Living dangerously. Your phone is begging for hospice 🪫", "c2"), o("I don't check. I just pray.", "Faith-based charging. A bold lifestyle 🙏", "i1c1")),
  q("How many tabs are open right now?", o("Like 3", "Three tabs. And one is a cat video. We know 🐈", "d1"), o("47, and I need all of them", "You don't need them. They need you. It's a hostage situation 🫠", "c2o1"), o("What's a tab?", "Please go outside. Gently 🌳", "i2")),
  q("Pick a snack.", o("Chips", "Crunch loud, regret later. Classic 🥔", "i1"), o("Biscuits dipped in tea", "Your taste is 100% auntie-approved 🍪", "o1"), o("Whatever's hidden in my bag from last week", "Archaeology, but edible 🏺", "c2")),
  q("How's your sleep schedule?", o("Perfect", "That's a lie and you know it 😴", "d2"), o("I sleep at 4 AM and call it 'early'", "Your body clock is a rumour 🌙", "c2"), o("Sleep? I'm a student, not a vampire", "Vampires also keep better hours 🧛", "c1i1")),
  q("What's your favourite colour?", o("Blue", "Bold. Original. Wow 😐", "i1"), o("Black, to match my future", "Ouch. We felt that 🖤", "o2"), o("Whatever's in my wardrobe right now", "So all of them. Most of them on the floor 👕", "c1")),
  q("Which animal are you?", o("A cat. Lazy but classy", "A cat who got scared by a cucumber 🥒", "d1c1"), o("A pigeon. Loud. Everywhere. Unbothered", "Pigeons don't have friends. They have crumbs 🐦", "c2"), o("A sloth", "Honest. Tiring just reading that 🦥", "i1")),
  q("How many times do you press snooze?", o("Zero", "Can't trust a person who says zero ⏰", "d2"), o("Until I'm late", "Snooze is a lifestyle, not a button 😴", "c2"), o("It's a skill now. I've mastered it", "Put it on your CV next to 'Procrastination' 📝", "d1i1")),
  q("What do you do when you're bored?", o("Scroll for 3 hours", "It's 'research', right? Sure 📱", "i1"), o("Open the fridge, close it, repeat", "The fridge hasn't changed in 4 minutes 🧊", "c1i1"), o("Stare at the wall and think about life", "The wall's heard enough, bro 🧱", "o2")),
  q("Pineapple on pizza?", o("Yes. Fight me", "We would. We have snacks in our corner 🍕", "c1d1"), o("No. It's a crime", "Charges filed. By a guy who eats mayo pizza 🚔", "r1"), o("I eat it, but I lie about it", "Pineapple Houdini. We respect the double life 🥷", "r1o1")),
  q("Morning person or night owl?", o("Morning person", "Sure. At 11:47 AM when you wake up 🌅", "d2"), o("Night owl", "Owl? More like a 3 AM raccoon in the trash 🦝", "c2"), o("Neither. Whenever the food is ready", "Respect. Loyalty to the meal 🍽️", "i1")),
  q("Is cereal a soup?", o("Yes", "Wow. Our lawyers will be in touch 🥣", "c2"), o("No", "Good. Sanity prevails 🧠", "d1"), o("Only when I'm sad", "Sad soup. A whole genre 😭", "o2")),
  q("How do you feel about Mondays?", o("Fine", "Liar. Even Garfield is crying 🐱", "d2"), o("I fear them", "Mondays fear you too. They've seen your attendance 📅", "o2"), o("Every day is Monday for me", "A philosopher. And also broke 🎓", "c1o1")),
  q("What's in your bag right now?", o("Books", "Good boy. You carried them 🎒", "d1"), o("One pen, four chargers, a mystery banana", "The banana is older than your attendance 🍌", "c3"), o("Snacks and a dream", "Dreams are free. Snacks are not. Pay up 💸", "i1c1")),
  q("How many hours do you scroll daily?", o("1 to 2", "We ran the screen-time numbers. They laughed 😭", "d2"), o("Around 6", "The honest one. Doctor is waiting 🩺", "i1"), o("I don't want to see the number", "The number sees you, though 👀", "o2")),
  q("What's your coffee order?", o("Coffee? I'm 40% tea", "Tea gang. Sip, gossip, repeat ☕", "i1"), o("Black, no sugar. Like my soul", "Edgy. And dehydrated 🖤", "d2"), o("Whatever's free", "Free-drink hunter. Great survival instinct 🏹", "r1c1")),
  q("Pick a superpower.", o("Invisibility", "To skip class? Predictable 👻", "r2"), o("Flying", "Imagine your 8 AM commute: 2 minutes 🕊️", "d1"), o("Pause time", "So you can finally finish your homework. Sure 🙄", "c1o1")),
  q("How's your handwriting?", o("Beautiful", "Typed in Calibri, maybe ✍️", "d2"), o("Doctor level", "Your pharmacist has been decoding it for years 💊", "c2"), o("Even I can't read it", "Honesty. At least you're consistent 🧾", "i2")),
  q("Do you have a favourite teacher?", o("Yes. The kind one", "We wrote their name down. Just in case 📝", "r1"), o("No. They're all against me", "Paranoia is a hobby, apparently 🕵️", "o2"), o("The one who gives good marks", "Transactional love. We get it 💰", "r1d1")),
  q("How do you celebrate a free period?", o("Sleep on the bench", "The bench has seen things 😴", "c1"), o("Run to the canteen", "The only sprint you do all year 🏃", "i1"), o("Pretend to study", "Oscar-winning performance 🎭", "d1r1")),
  q("What's your go-to excuse?", o("Network issue", "A network issue in the library. In the basement. In your whole life 📡", "c1"), o("Stomach ache", "Your stomach has more leaves than a Nokia 🤒", "r1"), o("I didn't see the message", "Your blue ticks are testifying against you ✔✔", "r2")),
  q("Your friend says 'almost there'. Where are they?", o("Still at home", "Soulmate of every late person ever 🛏️", "c1"), o("In the shower", "The shower has Wi-Fi, apparently 🚿", "c2"), o("30 minutes away", "'Almost' is a unit of time. A long one ⏱️", "i1")),
  q("Favourite way to waste 10 minutes?", o("Watching reels", "Seven minutes of reels, three of regret 🎞️", "i1"), o("Re-reading old chats", "Detective work. Sherlock would be proud 🔍", "o2"), o("Looking for my phone while holding it", "This is a TED talk, truly 📱", "i2")),
  q("How many friends do you have?", o("Lots", "Name five. We'll wait ⏳", "d2"), o("Three good ones", "The other two are in the group chat 😅", "o1"), o("I have a pet. That counts", "It counts. The pet doesn't talk back. Perfect 🐶", "i1")),
  q("What do you do when it rains?", o("Dance in it", "You'll get a cold, a story and a bad reel 🌧️", "c1d1"), o("Stay in bed", "Wisdom. Pure wisdom 🛌", "i1"), o("Complain about the roads", "The roads can't hear you 🚧", "o1")),
  q("How many selfies before you post one?", o("One", "Liar. Your gallery has 47 'just one's 🤳", "d2"), o("Around 30", "And you picked the first one. Classic 🙃", "o2"), o("I post my cousin's photos instead", "A true artist. Of laziness 🎨", "c1")),
  q("Pick a weekend plan.", o("Sleep", "The most productive plan ever 💤", "i1"), o("Binge a show", "See you Monday with a red-eyed apology 📺", "c1"), o("Cook something fancy", "Instant noodles with an egg. We know 🍜", "d2")),
  q("Which is scarier?", o("An unknown number calling", "It's a courier. It's still scary ☎️", "o2"), o("A message saying 'we need to talk'", "Cardiac arrest in five words 💔", "o2"), o("A blank page and a deadline", "Welcome to every Tuesday 📄", "c1")),
  q("A stranger smiles at you. You:", o("Smile back", "Sweet. Slightly suspicious. Mostly sweet 🙂", "d1"), o("Look away fast", "Now the stranger thinks you're rude 😅", "o1"), o("Say 'do I know you?'", "And now you do. Congrats on your new best enemy 🤝", "c1r1")),
  q("Pick a number.", o("7", "Everyone picks 7. You're a sheep 🐑", "i1"), o("69", "We are not going to discuss this 😶", "c2"), o("My roll number", "Pride in a roll number. Peak 📛", "i1")),
  q("Do you talk to yourself?", o("Never", "Look at you, lying to a quiz 😌", "d2"), o("All the time. Even in meetings", "You're the only one who agrees with you 🗣️", "o1c1"), o("Only when no one's around. And sometimes when they are", "The 'sometimes' is what worries us 😬", "c2")),
  q("What's your most-used emoji?", o("😂", "The universal 'I don't know what to say' 😂", "i1"), o("💀", "90% dead inside, 100% online 💀", "c1"), o("🥺", "Beg, don't talk. Classic 🥺", "z1")),
  q("Someone asks 'are you busy?'", o("Yes (I'm not)", "Busy doing nothing. A full-time job 🧍", "r1"), o("No. Is it a favour?", "Paranoid. Correctly 😒", "o1"), o("I'm always busy doing nothing", "Chief Executive of Sitting 🪑", "c1")),
  q("Pick a Wi-Fi name.", o("FBI Surveillance Van", "Your neighbours are scared. Good 🚐", "c2"), o("Pretty Fly for a Wi-Fi", "Classic. 2005 called 📞", "d1"), o("Wifi_5G_extra_final_2", "We can see 'final_final_v3' in there 📁", "c1")),
  q("How do you introduce yourself at a party?", o("'Hi, I'm [name]'", "Charming. Like a form field 📝", "i1"), o("Awkward silence", "The silence introduced itself first 🔇", "z1"), o("I find the food table and stay", "A food-bender. Respect 🍕", "c1")),
  q("Your last Google search?", o("How to study fast", "The tab is still open from 2022 🔍", "o1"), o("Am I dumb?", "Google said 'maybe' and showed 4,500 results 🔎", "o2"), o("Pizza near me", "The only valid query 🍕", "i1")),
]

/* ---------- MID: school / college / daily life, gets sharper ---------- */
const mid = [
  q("The teacher asks 'Any doubts?' You:", o("Stare at the floor", "The floor has no doubts. Be like the floor 🪨", "o1i1"), o("Ask 'can you repeat that?'", "That's not a doubt, that's a hobby 🙋", "i2"), o("Ask a long question to kill 10 minutes", "Class hero. The topper wants a word 🦸", "c2r1")),
  q("Group project time. Which one are you?", o("The one who does everything", "We see you. You're also why they never learn 🫡", "o3"), o("The one who adds their name at the end", "A true professional. Your group has a pinned message about you 📌", "r3", q("And what was your contribution?", o("Moral support", "A noble role. Historically unpaid 🙏", "d2"), o("I formatted the title", "Bold, centered, Comic Sans. We have the evidence 🔎", "i1c1"), o("I was there in spirit", "The spirit is doing a lot of work for you this semester 👻", "o1i1"))), o("The one who makes the PPT in Comic Sans", "The font has been reported to the HOD 🚨", "c2i1")),
  q("Phone at 2%. Exam in 10 minutes. First priority?", o("Charge the phone", "Do you even have a pen? Don't answer 🪫", "i2"), o("Revise formulas", "They'll leave your brain faster than your battery 🔋", "d1o1"), o("Borrow a pen. Always borrow a pen", "Pen borrowers: 1% of students, 100% of the pen shortage 🖊️", "r2c1")),
  q("Whose notes do you photocopy?", o("The topper's", "The topper knows. The topper keeps a list 📋", "d1o1"), o("Nobody's. I trust the vibes", "The vibes failed you in 2 subjects already ✨", "i2c1"), o("The topper's, then I highlight everything yellow", "You've highlighted the whole page. Congrats, it's now a yellow page 🟨", "r2")),
  q("Teacher says 'surprise test'. You:", o("Stay calm", "The calm of someone who already failed 🧊", "d2"), o("Panic. Pure panic", "At least you're honest. Barely 😱", "o2"), o("Fake a fever on the spot", "Oscar winner. The pharmacy confirms nothing 🤒", "c1r1", q("How did the fever end?", o("Miracle recovery at lunch", "The fever left when the samosa arrived 🥟", "c1"), o("Mom made me go anyway", "Mom is the real doctor 👩‍⚕️", "i1"), o("I actually got sick. Karma", "Karma has an office near you 🏢", "o1")))),
  q("Your excuse for not doing homework:", o("The dog ate it (no dog)", "You have no dog. Even the dog is disappointed 🐕", "c2"), o("I did it, forgot it at home", "The homework is where your motivation is: nowhere 📓", "r1"), o("Power cut", "In Pune? At midday? Legend ⚡", "c1")),
  q("Your friend asks 'how do I look?'", o("'Great!'", "Lie detected. Kindness approved 💅", "r1"), o("'Honestly? Not great'", "Your friends are now your ex-friends 🔪", "r2"), o("'I'm not looking. Eyes closed'", "Safest answer. Also the most cowardly 🙈", "o1")),
  q("You see your teacher at the mall. You:", o("Hide behind a pillar", "The teacher saw you. The pillar did not help 🏛️", "c1o1"), o("Say 'Good evening, sir!'", "Sir is on vacation. Sir wants peace 😑", "i1"), o("Pretend to be someone else", "You're bad at accents, bro 🥸", "c2")),
  q("Pick your breakfast.", o("Poha", "Respectable. Aunty-approved 🍛", "d1"), o("Maggi at 2 AM", "That's dinner, genius 🍜", "c1"), o("Skip it and cry at 11 AM", "Real. Painfully real 😭", "o1c1")),
  q("A friend says 'wanna hang out?'", o("Sure!", "Enthusiasm detected. Social battery: 4% 🔋", "d1"), o("Maybe next week", "Next week never comes. We both know 🗓️", "o1"), o("'Haha 😂' (and leave it)", "Seen. Left. Ghosted. Efficiently 👻", "r2")),
  q("You forgot your friend's birthday. You:", o("Say 'Happy belated!!'", "Belated, with 4 emojis, so it's fine 🥳", "r1"), o("Act like I never knew", "Three years later, they still know 🕵️", "r3"), o("'My phone died'", "Your phone dies on every birthday. Impressive battery 🔋", "c2r1")),
  q("Your relationship with your alarm clock?", o("Toxic", "It's the one thing that wakes you up and you hate it 💔", "o1c1"), o("We broke up. I use vibration now", "Even the vibration gave up 📳", "c2"), o("12 alarms", "Eleven of them are just emotional support alarms 🚨", "c1i1")),
  q("Movie night snack?", o("Popcorn", "Salted. Perfect. Never wrong 🍿", "i1"), o("My own chips smuggled in", "A criminal career begins 🥷", "r1c1"), o("Nothing. I'm there for the AC", "A realist. We respect the 22 degrees ❄️", "c1i1")),
  q("How do you take compliments?", o("Gracefully", "We watched you blush and trip on air 🌸", "d1"), o("'Thanks, you too'", "You said that to a waiter once. Legendary 🤦", "i2"), o("I argue with them", "The compliment is now in a fight. You're winning, which is sad 🥊", "o2")),
  q("Biggest fear?", o("Public speaking", "Welcome. The club meets in a basement 🎤", "o2"), o("The family group chat", "'Good Morning 🌞' with 87 forwards 🌸", "c1"), o("Running out of data", "The end of days 📉", "i1c1")),
  q("You don't know the answer in class. You:", o("Look confident", "The teacher can smell fear. And confusion. And last night's maggi 🧐", "d2"), o("Look at the ceiling for answers", "The ceiling is not helping. It's a ceiling 🏠", "i2"), o("Say 'I'd like to hear others first'", "Diplomat. Or coward. Hard to say 🕊️", "r1o1")),
  q("Pick a hobby.", o("Gaming", "'Gaming' = 14 hours, 0 sleep, 1 victory 🎮", "c1"), o("Writing poems at 2 AM", "Pain, in rhyme. Bless your keyboard ✍️", "o2"), o("Pretending to have hobbies", "Hobbyist of nothing. Master of lying 🎭", "d2")),
  q("You get ₹100. You:", o("Save it", "For what? A rainy day? It's already raining 🌧️", "d1"), o("Spend it on samosas", "The only solid investment 🥟", "i1"), o("Lend it to a friend, never see it again", "Your friend now owns a villa. Thanks 🏡", "r1i1")),
  q("How do you act in a quiet library?", o("Whisper-talk non-stop", "You're the reason there's a sign 🤫", "c1"), o("Sleep on the book", "Reading with your face. Efficient 😴", "i1"), o("Pretend to read, scroll phone", "The library is your Wi-Fi hotspot 📚", "d1")),
  q("A friend asks for a pen. You:", o("Give it. 'Keep it'", "You'll never see it again. Neither will they 🖊️", "d1"), o("Give it with a 'return it' look", "They return it. Chewed 😤", "r1"), o("'I have none' (3 pens in the bag)", "Instant karma. Stationery crime 🔪", "r2")),
  q("'Seen 11:45 PM.' What does it mean?", o("I'll reply tomorrow", "Tomorrow is a lie we tell 🥀", "r2"), o("I forgot", "Thirteen times. The same 'sorry' 🤷", "c1"), o("I'm angry", "So you left them on read as revenge. Mature ✊", "r2")),
  q("Dream job?", o("Anything with no Mondays", "That job is called 'rich' 💸", "d2"), o("Influencer", "Of what? Your own naps? 📸", "d2"), o("Nap tester", "Your career has finally been decided 🛏️", "i1c1")),
  q("How do you answer 'what are you up to?'", o("Nothing much", "Nothing. And all of it exhausting 😮‍💨", "o1"), o("Studying", "Reels. Studying reels 🎬", "d2"), o("Thinking about stuff", "Dangerous. Sit down 🧠", "o2")),
  q("Your Wi-Fi stops working. You:", o("Restart the router", "Works 2% of the time. Every time 🔄", "d1"), o("Scream into a pillow", "Healthy! Cheaper than therapy 🛏️", "c1"), o("Blame the neighbours", "The neighbours blame you 🏘️", "r1")),
  q("Pick a vibe for today.", o("Main character", "The camera isn't on, babe 🎬", "d2"), o("NPC", "Walking in a straight line. Respect 🤖", "i1"), o("Side quest gone wrong", "The quest was 'find a charger'. You failed 🗡️", "c2")),
  q("How do you react to spoilers?", o("Rage", "You're now a cursed human on Twitter 😤", "c1"), o("I spoil things first", "The group chat has blocked you 🚫", "r2"), o("I read the ending on Wikipedia first", "Honest. And wrong 📖", "r1o1")),
  q("Someone is sitting in your seat. You:", o("Politely ask them to move", "Politely. Ends in a war ⚔️", "d1"), o("Sit nearby and glare", "Glaring is an art. They don't care 👁️", "r1"), o("Cry inside, sit elsewhere", "The seat remains emotionally yours 🪑", "o2")),
  q("Your relationship with the gym?", o("Paid for. Never went", "The gym sends you postcards 🏋️", "c1d1"), o("I go for the selfie", "The weights are props. You're the star ⭐", "d2"), o("Round is a shape", "Geometry? Nice. Biology? Not so much 🫓", "i1c1")),
  q("How's your luck?", o("Great", "Luck: 'who is this?' 🍀", "d2"), o("Terrible", "The luck filed a complaint 🌩️", "o1"), o("Lucky only with food", "Food-based luck. Very you 🥘", "i1")),
  q("How do you eat noodles?", o("Fork, neatly", "Posh. Nobody asked 🍝", "d1"), o("Slurp loudly, no shame", "Loudest noodle-eater in 3 states 🍜", "c1"), o("Cut them with a knife", "We need a moment of silence 🔪", "i3")),
]

/* ---------- SPICY: crush, rizz and embarrassing stuff ---------- */
const spicy = [
  q("Your crush says 'hi'. You reply:", o("'Hi'", "Total charisma. Your rizz is a dial tone 📞", "z1"), o("'Hello, how's the weather in your eyes?'", "That line is a crime. Rizz: negative 💀", "z3"), o("Leave it on read, then cry", "Smooth. Impressive. Cowardly 🥀", "o2", q("How long did you stare at the chat?", o("10 minutes", "Rookie numbers. You'll get there 🥉", "o1"), o("Until the phone died", "Romeo and Juliet, battery edition 🪫", "o2"), o("I'm still staring", "Please blink. Please 👁️", "o3")))),
  q("How do you flirt?", o("I just stare", "A creep, but a quiet one 👀", "z2"), o("Send memes", "If memes were rizz, you'd be a bankrupt millionaire 🤡", "z1i1"), o("My friends flirt for me", "Your friends deserve a salary 💼", "z2c1")),
  q("Pick a pickup line.", o("'Are you Wi-Fi? I feel a connection'", "This line died in 2014. RIP ⚰️", "z3"), o("'Do you have a map? I'm lost in your eyes'", "Your crush just opened Google Maps. For an escape route 🗺️", "z3"), o("'Hi.'", "Minimalist. Zero rizz. Pure silence 🧘", "z1")),
  q("Your crush texts 'wyd?'. You say:", o("'Nothing, u?'", "Nothing. They type... then ghost you 🕳️", "z1"), o("'Thinking of you'", "Creepy? Yes. Wholesome? Also yes. Confused? Same 😬", "z2"), o("Reply after 3 hours: 'just saw this'", "Calculated. Cold. Like leftover pizza 🍕", "r2")),
  q("Your crush sends a heart emoji. Now what?", o("Overanalyse for 6 hours", "The heart was a typo. The typo was a cat's paw 🐾", "o3"), o("Send 10 hearts", "Sir, this is a Wendy's 🍔", "z2"), o("Block them. For safety", "Risk management at its finest 🛡️", "r1c1")),
  q("Who's more likely to ghost?", o("Me", "Your ghost has a ghost. A cute one 👻", "r2"), o("Them", "They're a poltergeist in your DMs 👻", "o2"), o("Both. We're a haunted house", "The relationship comes with a ghost fee 🏚️", "c1r1")),
  q("Your love language?", o("Words of affirmation", "Say 'good morning' and watch you faint 🌅", "z1"), o("Gifts", "Only if they have a coupon 🎁", "r1"), o("Free food", "The ultimate romance 🍔", "i1")),
  q("On a date, who pays?", o("Me, always", "Debt: 2. Rizz: 0. Bank: crying 💸", "d2"), o("Split", "Split the bill. Not the feelings. Cold 🧾", "r1"), o("Whoever stares at the waiter hardest", "The waiter pays. Because of your stare 👀", "c2")),
  q("Best way to impress a date?", o("Be myself", "A bold strategy. Let's see how it works 😬", "d1"), o("Pretend to be someone else", "Congrats! You're dating someone who doesn't exist 🎭", "r2"), o("Order the most expensive thing", "Gold digger energy. The bank is concerned 💳", "r2")),
  q("You wave at someone who wasn't waving at you. You:", o("Turn it into a stretch", "Stretching at 9 PM in a mall. Smooth 🧘", "c1"), o("Run away", "The only exercise you've had this year 🏃", "c2"), o("Wave at the person behind me. Chain wave", "A new religion starts today 🙏", "c2")),
  q("Your ex follows you again. You:", o("Soft-block", "The soft block is a 'hard maybe' 🥲", "r2"), o("Post a story to 'accidentally' show I'm fine", "We saw it. The whole internet saw it 📸", "d2r1", q("How many times did you check who viewed it?", o("Everyone, obviously", "Your thumb has a muscle memory for it 👆", "o2"), o("Only my ex's name", "The 'viewers list' is not a hobby 🕵️", "z1"), o("I don't care. (I checked twice.)", "The truth leaked through the lie 💧", "d2"))), o("Who? I forgot", "We'll be here when you cry at 3 AM 🌙", "d2")),
  q("You see your crush. You:", o("Walk like a model", "Model: 'trips over nothing' 🚶", "d2z1"), o("Freeze and sweat", "Impressive sweat. The freeze? Statue of a coward 🗿", "o2"), o("Pretend I'm on a call", "Nobody's calling you. Nobody has your number 📵", "c1z1")),
  q("Your rizz level in one word:", o("Zero", "The rizz-o-meter says 'error 404' 🚫", "z3"), o("Mid", "A solid 'meh'. Like unsalted rice 🍚", "z1"), o("Immeasurable", "It IS immeasurable. You broke the meter 🔧", "d3")),
  q("Say something sweet to a stranger.", o("'Nice shoes'", "The shoes were fake. Your compliment was real. Respect 👟", "z1"), o("'You look scary. In a good way'", "That's a threat, not a compliment 😬", "z3"), o("'...'", "The silence was your best rizz. Honestly 🔇", "c1")),
  q("Your friend's crush likes you. You:", o("Tell the friend", "A hero. Also a snitch 🦸", "d1"), o("Tell no one, enjoy the chaos", "Villain arc unlocked. We're here for it 😈", "r3"), o("Ghost everyone", "Cleaned the entire friend group in one move 🧹", "r2c1")),
  q("'We're just friends.' You:", o("'Fine. I'm fine'", "The universe: 'He's not fine' 🫠", "o2"), o("'Okay! Bye!'", "Strong. The tears happen in the shower 🚿", "z1"), o("Write a poem about it", "17 stanzas, 2 views ✍️", "o2")),
  q("You texted the wrong person. You:", o("Delete for everyone", "They saw it. They're typing... 😶", "c1"), o("Leave the country", "Passport valid? ✈️", "c2"), o("'Haha wrong chat'", "The chat is now a graveyard ⚰️", "i1")),
  q("You meet your crush's parents. You:", o("'Namaste, Aunty'", "Ah yes, an instant marriage proposal 🙏", "d1"), o("Pretend I don't know them", "You're now a statue in the mall 🗿", "o1"), o("Run", "The hallway is 6 meters long. They saw 🏃", "c2")),
  q("Valentine's Day plan?", o("Alone, with biryani", "Biryani is the only date who never ghosts 🍛", "i1"), o("Study", "Studying is your love language 📚", "d1"), o("Ignore it and nap", "Napping: the best relationship you've ever had 🛌", "c1")),
  q("Describe your dream partner.", o("Someone who pays for my chai", "A sponsor. Not a partner. A wallet with legs 🫰", "r2"), o("Someone who laughs at my bad jokes", "They'll be trapped for life. We pity them 🤡", "d1"), o("Someone who doesn't text first", "They don't exist. We looked 🔎", "o2")),
  q("Your crush likes your story. You:", o("Screenshot it", "Evidence collected. For what, we don't know 📸", "o2"), o("Post 10 more stories", "You turned your account into a billboard 🪧", "d2"), o("Reply with one emoji", "One emoji. Eight hours of regret 😶", "z1")),
  q("How many times have you stalked someone online?", o("Never", "Interpol would like a word 🚨", "d2"), o("Only 20 times. This week", "Your search history has a boyfriend, and he's a detective 🔍", "o1r1"), o("I live there", "Do you pay rent? Your cookies seem to 🍪", "r2")),
  q("A random person calls you 'cutie'. You:", o("Blush and run", "Cute. Weirdly very cute 😳", "d1"), o("'Thanks, you too'", "Rizz: negative six. We're losing you 🪦", "z3"), o("Wonder what they want", "Trust issues loaded. Good ones too 🔒", "o2")),
  q("Someone says 'I love you'. You say:", o("'Thanks'", "Wow. The cold was audible ❄️", "z2"), o("'You too'", "The oldest accident in the book 📖", "i2"), o("Cry, then say it", "Beautiful. Slightly wet. Delivered 😭", "o1")),
  q("Sweetest thing you've done for someone?", o("Shared my food", "The rarest act of love. Even the last chicken piece 🍗", "d1"), o("Waited in the rain", "And now you have a cold. Enjoy the romance 🌧️", "c1"), o("Texted 'reached?'", "'Reached?' is the national love language 📍", "o1")),
]

/* ---------- FINALE: the deep trolling ---------- */
const finale = [
  q("How would your best friend describe you in one word?", o("Loyal", "They said 'Loud'. And 'still owes 200' 💸", "d2"), o("Weird", "The word was 'Exhausting'. We confirm 🫠", "c1"), o("They'd laugh and change the topic", "The laugh was nervous. The topic was your life 😬", "o2")),
  q("What would your teacher write on your report card?", o("Hard-working", "'Hard-working at avoiding work' 🥱", "d2"), o("Shows potential", "Potential: what we say about a student we can't fire 🧾", "i1"), o("Needs to improve. A lot", "Finally, the truth. Frame it 🖼️", "o1")),
  q("How many New Year resolutions did you keep?", o("All of them", "Pinocchio called. He wants his nose back 🤥", "d3"), o("None", "The honest one. Respect 🫡", "c1"), o("I made one: 'don't make resolutions'", "And failed. Spectacular 🥳", "c1o1")),
  q("You cried over something really small. What?", o("A cartoon ending", "Which one? We'll cry with you 🥲", "o1"), o("Spilled chai", "The ground drank your sorrow ☕", "c1"), o("A notification", "Not even a message. A notification 🔔", "i1")),
  q("Biggest lie you told this week?", o("'I'm fine'", "The tragedy of the century 🎭", "o2"), o("'I'll start tomorrow'", "Tomorrow has sued you for defamation ⚖️", "c1"), o("'I studied'", "The syllabus is still pristine, like a museum 🏛️", "d2")),
  q("You get 1 hour to do something useful. You:", o("Study", "For 5 minutes, then a reel, then regret 📚", "d1"), o("Take a nap", "A noble use of time. Truly 😴", "i1"), o("Make a to-do list for the next hour", "You spent the hour making the list. Plot twist 📝", "o2")),
  q("Your friends would call your life story:", o("'Almost'", "Almost passed. Almost cried. Almost done 🥲", "o1"), o("'Tuesday'", "Meh. Constant. Soggy, like cereal 🥣", "c1"), o("'Chaos: The Sequel'", "Rated R for 'really, please stop' 🎬", "c2")),
  q("Honest guess about your future?", o("Bright", "The light is from your phone 📱", "d2"), o("Uncertain", "The only honest word you've said all quiz 🔮", "o1"), o("Haha 💀", "Same. We'll bring snacks to the funeral 🪦", "c1i1")),
  q("You'd rather lose:", o("My phone", "Your phone is the last person who loves you 📱", "d1"), o("My dignity", "That left ten years ago 🏃", "c1"), o("My ability to say 'k'", "That would end 80% of your arguments 💬", "r1")),
  q("Who do you text first when something big happens?", o("Mom", "Mom already knew. Mom always knows 👩", "d1"), o("My best friend", "Who has muted you for 2 weeks 🔕", "o1"), o("The group chat", "The group chat is on silent. You're talking to yourself 🗣️", "c2")),
  q("Your fashion sense?", o("Casual", "A two-day-old t-shirt. 'Casual' ✨", "i1"), o("Whatever's clean", "The bar is on the floor and you tripped over it 🧦", "c1"), o("Chaotic", "Like a colour-blind clown at a funeral 🤡", "c2")),
  q("The nicest thing a stranger did for you?", o("Gave me a seat", "A hero in a Kolhapuri 🦸", "d1"), o("Paid my bus fare", "That stranger is now your guardian angel. Pay them back 🚌", "i1"), o("Nothing. The world is cold", "Plot twist: you were the stranger. And rude 🥶", "o2r1")),
  q("Your honest opinion of yourself?", o("I'm awesome", "Self-esteem so high it needs oxygen 🏔️", "d3"), o("I'm okay", "The 'okay' is carrying the whole sentence 🥴", "o1"), o("A trainwreck, but funny", "The most 'you' sentence ever 🚂", "c1")),
  q("Your biggest talent?", o("Sleeping", "Gold medal. You slept through the ceremony 🥇", "c1"), o("Procrastinating", "You'll tell us about it later 📆", "c2"), o("Being late with confidence", "Your confidence is the only thing on time ⏰", "d1c1")),
  q("If your life had a theme song:", o("A sad violin", "Playing in the canteen while you cry over samosas 🎻", "o2"), o("Random noise", "'Meh' in 4K 🔊", "c1"), o("Silence", "The orchestra left 🎼", "i1")),
  q("Someone says 'be yourself'. You:", o("Nod", "They said it hoping you wouldn't 🫢", "d1"), o("Think 'are they sure?'", "They're not sure. Neither are we 🤔", "o2"), o("Ask 'which self?'", "Sixteen of them. All fighting 🥊", "c2")),
  q("A free ticket to anywhere. You:", o("Go to Goa", "Pune to Goa to 'we're broke' ✈️", "c1"), o("Go home", "The most expensive trip: the bus 🚌", "i1"), o("Sell it", "Capitalism is proud of you 💸", "r2")),
  q("How many times did you say 'I'm fine' today?", o("Zero", "Liar 🔥", "d2"), o("Four, maybe five", "None of them were true 💀", "o2"), o("I lost count. I'm fine", "You're not fine. We can hear your fan from here 🥵", "o2")),
  q("You can fix one thing about yourself:", o("My habits", "Which ones? There's a book 📚", "o1"), o("My looks", "Nothing. You look like a person with a charger problem 🔌", "z1"), o("Nothing. I'm perfect", "Narrator: he wasn't 🎙️", "d3")),
  q("You become invisible. First thing you do?", o("Skip class", "The teachers: 'Finally' 🫥", "r2"), o("Eat everyone's food", "Hunger Games, canteen edition 🍟", "r2c1"), o("Nothing. Same life, but quieter", "Wow. That's a lot. We're not okay 😶", "o2")),
]

/* ---------- Callback + last question (random variants) ---------- */
const CALLBACKS = [
  (t) => q(t ? `Earlier you said: “${t}” How do you feel about that now?` : "Looking back at your answers, how do you feel?", o("Proud", "Nobody else is. We asked around. Nobody 🫥", "d3"), o("Mortified", "Good. Hold onto that. It's carrying you 🕯️", "o3"), o("What did I say?", "We'll read it at your funeral 🪦", "i2c1")),
  (t) => q(t ? `You picked “${t}” earlier. Would your best friend back you up?` : "Would your best friend back you up on your answers?", o("Obviously", "Your best friend just read this and blocked you 📵", "d2"), o("They'd laugh and walk away", "The laugh was recorded. It's evidence 🎙️", "o1"), o("I don't have a best friend", "Bro 🥲 you have us. We hate you, but you have us", "o2")),
  (t) => q(t ? `“${t}”. You really said that. How does it feel?` : "You really said all that. How does it feel?", o("Good. I stand by it", "Standing alone in a field like a scarecrow 🌾", "d3"), o("I'd like to go back in time", "The time machine is out for repairs. Like your career ⏳", "o2"), o("Whatever, it's a quiz", "'It's a quiz,' says someone who's been judged for 10 minutes 🫠", "c1")),
]

const FINALS = [
  q("Last one. Ready for your results, or should we call your parents first?", o("Ready", "Brave. They've already seen it. The family group is on fire 🔥", "d2"), o("Call them. They deserve to know", "Called. They said 'we always knew' 📞", "r2"), o("Can I skip this one?", "No. Like your 8 AM class, this one is mandatory ⏰", "c1i1")),
  q("Final question: are you a good person?", o("Yes", "The quiz disagrees. The quiz has receipts 🧾", "d3"), o("Mostly", "'Mostly' is doing heavy lifting here 🏋️", "o1"), o("The jury is still out", "The jury left. Went for chai ☕", "o2")),
  q("Last question, promise. Are you sure about your answers?", o("100%", "100% wrong, with 100% confidence 🫡", "d3"), o("Not at all", "Same. Everyone is lost, buddy 🥴", "o2"), o("I'd like a refund", "The quiz was free. The shame is the price 💸", "c1")),
]

/* ---------- No-repeat picking, so every restart is different ---------- */
const used = new Set()
function pick(arr, n) {
  let fresh = arr.filter((x) => !used.has(x.text))
  if (fresh.length < n) {
    arr.forEach((x) => used.delete(x.text))
    fresh = arr
  }
  const chosen = shuffle(fresh).slice(0, n)
  chosen.forEach((x) => used.add(x.text))
  return chosen
}

export function buildQueue() {
  const cb = pickOne(CALLBACKS)
  const finals = pick(finale, 2).map(prep)
  finals.splice(Math.floor(Math.random() * 3), 0, { make: (hist) => cb(hist.length ? pickOne(hist.filter((h) => h.t.length < 48).concat({ t: '' })).t : '') })
  return [...pick(warm, 2).map(prep), ...pick(mid, 3).map(prep), ...pick(spicy, 3).map(prep), ...finals, prep(pickOne(FINALS))]
}

export const POOL_SIZE = warm.length + mid.length + spicy.length + finale.length + CALLBACKS.length + FINALS.length

export const JUDGE = [
  "Noted. In red ink. 🖍️",
  "Your teacher just sneezed. Coincidence? No. 🤧",
  "This answer is going on the notice board. 📌",
  "That earns you a 'see me after class'. 😬",
  "Even the back bench went quiet. 🤫",
  "Marks deducted for confidence. ➖",
  "A lesser quiz would have given you grace marks. 🙏",
  "Your parents will hear about this at the next PTM. 📞",
  "Bold. Wrong, but bold. 🫡",
  "Hmm. Hmm. Okay. 🧐",
  "We're calling your class representative. 📣",
  "Written in your permanent record. In pen. 🖊️",
  "Rizz level updated: lower. 📉",
  "Our intern gasped. Our intern is a houseplant. 🪴",
  "We'd say sorry, but we're not. 💅",
  "That one's going in the group chat. 📱",
]

export const NOTES = [
  "(this one is internal marks)",
  "(not in the syllabus)",
  "(no negative marking, only judgment)",
  "(sir is watching)",
  "(take your time, the bell isn't ringing)",
  "(attendance counted)",
  "(rizz is being measured)",
  "(this one's for the group chat)",
]

export const LOADING = [
  "Checking your attendance. It's 41%",
  "Asking the topper. The topper said no",
  "Reading your answers aloud to the HOD",
  "Consulting a pigeon on the notice board",
  "Measuring your rizz. The meter fainted",
  "Grading on a curve. The curve gave up",
  "Calling your parents (just kidding. Maybe)",
  "Deleting the nice things we were going to say",
  "Sending your answers to your crush. Kidding. Maybe",
  "Asking a guy named Kevin to look at this",
]

export const TRAITS = { o: "Overthinking", i: "Idiocy", r: "Red flags", c: "Chaos", d: "Delusion", z: "Bad rizz" }

export const RESULTS = {
  o: {
    name: "Professional Overthinker",
    blurb: "You rehearsed “good morning, sir” forty times in your head, then said “you too” to the peon 🫠. You own a colour-coded study plan and a dread that follows it everywhere.",
    verdict: "Will apologize to a chair for bumping into it. Then to the chair's friend 🪑",
    avoid: "Group chats with read receipts",
    trolls: ["You'll overthink this result for 6 hours and still pick the wrong conclusion 🫠", "Even your overthinking is overthinking. That's a lot of thinking for nothing 🧠", "You'll rewrite the share text 9 times and then not post it 📝"],
  },
  i: {
    name: "Certified Idiot",
    blurb: "We checked your answers twice. Then we checked the quiz, in case it was our fault. It wasn't 🤡. You have one brain cell and it's been on a bunk since first year.",
    verdict: "Would lose an argument with a notice board and thank it for the feedback 📌",
    avoid: "Question papers",
    trolls: ["The bar was on the floor and you still tripped on it 🤡", "If idiocy had Wi-Fi, you'd be the password: 12345678 📶", "Your brain cell left a voicemail. It said 'Help' 📞"],
  },
  r: {
    name: "Walking Red Flag",
    blurb: "You borrow pens and never return them, take credit for group projects and ghost the chat once results come out 🚩. You're not evil. You're just on everyone's 'do not partner with' list.",
    verdict: "Last seen asking for 'one small favour' and a lift 🛵",
    avoid: "Anyone who says 'can I see your notes?'",
    trolls: ["Your future partner just got a stomach ache and doesn't know why 🚩", "Even your shadow keeps a distance 🌑", "Red flags are free for you. You've been handing them out since 2019 🎁"],
  },
  c: {
    name: "Gremlin in a Trench Coat",
    blurb: "Your timetable is a rumour, your attendance a legend, and your bag holds one pen, four chargers and a mysterious banana 🍌. Nobody knows how you pass. Neither do you.",
    verdict: "Has never said 'I'll be there in five' and been there in five ⏱️",
    avoid: "Calendars, deadlines and 8 AM",
    trolls: ["Somewhere, a calendar just burst into tears 📅", "You're not late. You're on a different timeline. A sadder one ⏳", "Your bag holds chaos, a banana and a lost sock. A trilogy 🎒"],
  },
  d: {
    name: "Main Character (Unearned)",
    blurb: "You walk into class like there's a soundtrack. There isn't. It's the projector fan, and it's judging you quietly 🎬.",
    verdict: "Believes the canteen uncle thinks about them at night. He doesn't 🥟",
    avoid: "Mirrors, marksheets and honest friends",
    trolls: ["The camera isn't on, babe. It was a phone flashlight 🔦", "Your 'rizz' is confidence on credit. The bill is due 💳", "You think this quiz was about you. It was. Sadly 🎬"],
  },
  z: {
    name: "Certified Rizz Disaster",
    blurb: "You said 'hi' like a Wi-Fi password and flirted like a customer-care call 📞. Your crush screenshotted you. Not to save it. To warn others 🚨.",
    verdict: "Told a stranger 'nice shoes', then entered witness protection 👟",
    avoid: "Anyone who smiles at you",
    trolls: ["Your rizz couldn't open a fridge. Not even a hungry one 🥶", "If rizz was money, you'd owe a pigeon 🐦", "Your crush is 'typing...' then deleting. Forever ✍️"],
  },
  n: {
    name: "Suspiciously Normal Person",
    blurb: "You scored evenly on everything, which is the most suspicious thing a student can do 🕵️. Either you're perfectly balanced or you copy from everyone. We're going with the second.",
    verdict: "Rare. About one in twenty get this. We've told the invigilator 🧐",
    avoid: "Eye contact with the invigilator",
    trolls: ["Too normal to be real. Blink twice if you're a robot 🤖", "You blend in so well your own shadow lost you 🥷", "Normal people don't take this quiz. So what are you? 🧐"],
  },
}

export function scoreResult(s) {
  const entries = Object.entries(s)
  const vals = entries.map(([, v]) => v)
  const max = Math.max(...vals)
  const min = Math.min(...vals.filter((_, i) => entries[i][0] !== 'z'))
  const top = shuffle(entries.filter(([, v]) => v === max))[0][0]
  const key = max - min <= 4 ? 'n' : top
  const bars = entries.map(([k, v]) => ({ k, label: TRAITS[k], pct: Math.max(4, Math.round((99 * v) / (max || 1))) }))
  const rizz = Math.round(4 - s.z * 1.5)
  const rizzEmoji = rizz >= 3 ? '😎' : rizz >= 0 ? '😐' : '💀'
  return { key, bars, percentile: 61 + Math.floor(Math.random() * 38), rizz: `${rizz}/10 ${rizzEmoji}`, troll: pickOne(RESULTS[key].trolls), ...RESULTS[key] }
}
