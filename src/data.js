// Traits:
// o = overthinker
// i = idiot
// r = red flag
// c = chaos
// d = delusion
// z = bad rizz

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

// Helpers: o(option, reaction, "o2c1", followUp?) and q(text, ...options)

const P = (s) => {
  const out = {}
  for (const [, k, v] of s.matchAll(/([oircdz])(\d)/g)) out[k] = +v
  return out
}

const o = (t, r, p, f) => (f ? { t, r, p: P(p), f } : { t, r, p: P(p) })

const q = (text, ...options) => ({ text, options })

/* =========================================================
   WARM: SIMPLE QUESTIONS, GENTLE TROLLING
   Themes: Daily life, college, hostel, friendship
========================================================= */

const warm = [

  q("What's your current relationship status?",
    o("Single and happy", "Happy? Your last romantic interaction was with the Swiggy delivery guy 😭", "d2"),
    o("It's complicated", "Even Google Maps can't find your relationship status 🗺️", "o2c1"),
    o("Committed", "Congratulations. Your freedom has officially been discontinued 🔒", "r1")
  ),

  q("What's your attendance percentage?",
    o("Above 85%", "The professor knows your face. That's suspicious 🧐", "d2"),
    o("Between 50–75%", "Living dangerously, but still within the syllabus 📚", "c1"),
    o("Below 30%", "You're enrolled in college, not actually attending it 👻", "c2i1")
  ),

  q("What's your favourite hostel activity?",
    o("Sleeping", "Your bed deserves a roommate who actually has ambitions 🛏️", "i1"),
    o("Eating Maggi at midnight", "Five-star dining. Zero-star nutritional value 🍜", "c1"),
    o("Gossiping about people", "Hostel news channel. No subscription required 📺", "r1c1")
  ),

  q("How do you react when your crush comes online?",
    o("I casually check their profile", "Casually? You've memorised their follower count 💀", "o2"),
    o("I immediately close Instagram", "A digital version of running away 🏃", "z1"),
    o("I post a story hoping they'll see it", "Your story has one target audience. One. 🎯", "d2z1")
  ),

  q("What do you usually do during lectures?",
    o("Actually listen", "The professor would like to thank you personally 🙏", "d1"),
    o("Scroll Instagram", "Your screen time has a separate attendance register 📱", "i1"),
    o("Sleep with your eyes open", "Professional skill. Put it on LinkedIn 😴", "c1")
  ),

  q("Your roommate takes your food without asking. You:",
    o("Share peacefully", "A saint. Your roommate is exploiting your character development 😇", "d1"),
    o("Start an investigation", "CID: Hostel Edition. Fingerprints on the Maggi packet 🔎", "o2"),
    o("Eat their food in revenge", "International relations have collapsed 🍗", "r2c1")
  ),

  q("How many alarms do you set?",
    o("One is enough", "Your confidence is more impressive than your attendance ⏰", "d2"),
    o("Five or six", "An entire orchestra playing for someone who won't wake up 🎻", "c1"),
    o("I don't need alarms", "Your mother is apparently your notification system 📢", "i1")
  ),

  q("Your ideal date?",
    o("A fancy restaurant", "Your bank balance just requested a private meeting 💸", "d1"),
    o("Street food and a long walk", "Romance sponsored by ₹20 pani puri 🥹", "z1"),
    o("Netflix and absolutely no talking", "A relationship with your television. Finally, stability 📺", "c1")
  ),

  q("What's your hostel room like?",
    o("Clean and organised", "Your roommate must be living in a different room 🧹", "d2"),
    o("A little messy", "A little? There's probably a civilisation growing under your bed 🦠", "c1"),
    o("I don't know where anything is", "Archaeologists will discover your laundry in 2045 🏺", "i2")
  ),

  q("What do you do when your friend says 'I have a secret'?",
    o("Listen carefully", "You have been promoted to unpaid therapist 🛋️", "o1"),
    o("Tell them mine first", "Two secrets entered. Eight people will know by tomorrow 🤫", "r1"),
    o("Immediately ask who it is about", "Investigative journalism has found its next victim 📰", "c2")
  ),

  q("Your crush likes your Instagram story. You:",
    o("Like their latest post", "A diplomatic exchange of likes. The United Nations is watching 🌍", "z1"),
    o("Screenshot it", "Evidence collected. Case pending for six business months 📸", "o2"),
    o("Assume they love me", "Wedding venue booked. Parents informed. Reality not consulted 💍", "d3")
  ),

  q("How do you feel about college assignments?",
    o("I finish them early", "The professor has found their favourite fictional character 📝", "d2"),
    o("I do them the night before", "Deadline is your personal productivity coach ⏳", "c1"),
    o("I copy from my friend", "Your academic career is powered by Ctrl+C and Ctrl+V 💻", "r2")
  ),

  q("Your political knowledge comes from:",
    o("Newspapers", "A rare species. Please don't go extinct 📰", "d1"),
    o("Instagram reels", "Your entire political education fits inside 30 seconds 📱", "i1"),
    o("Family WhatsApp groups", "Forwarded as received. Fact-checking sold separately 📩", "c2")
  ),

  q("Someone says 'we need to talk'. Your reaction?",
    o("What happened? Did I do something?", "Your brain has already written 17 apology drafts 🫠", "o2"),
    o("Okay", "The calmness of someone who has accepted their fate 😭", "d1"),
    o("Block them", "Conflict resolution, hostel edition 🚩", "r2")
  ),

  q("Who is the real boss in your hostel?",
    o("The warden", "One whistle and the entire population disappears 🫡", "d1"),
    o("The mess uncle", "Controls the most important resource: food 🍛", "i1"),
    o("The person with the Wi-Fi password", "A dictator with unlimited bandwidth 📶", "r2c1")
  ),

  q("What happens when the professor announces a surprise test?",
    o("I smile confidently", "Your face is confident. Your brain has left the building 🏢", "d2"),
    o("I immediately panic", "At least your heartbeat has perfect attendance ❤️", "o2"),
    o("I ask if it's optional", "The professor has added your name to a special list 📋", "c1")
  ),

  q("What is your biggest romantic achievement?",
    o("Someone called me cute", "And you have been thinking about it since 2023 🥹", "d2"),
    o("I held eye contact", "Olympic-level performance. Gold medal in absolutely nothing 🥇", "z2"),
    o("Someone replied within 5 minutes", "Wedding bells are ringing in your imagination 💍", "o2d1")
  ),

  q("What do you do when the hostel electricity goes out?",
    o("Sleep", "Darkness is your natural habitat 🦇", "i1"),
    o("Complain in the group chat", "The electrician has muted the entire hostel 🔕", "c1"),
    o("Go outside and enjoy the breeze", "A nature enthusiast trapped in a concrete box 🌳", "d1")
  ),

  q("What's your favourite college location?",
    o("Library", "Books recognise you. That's already an achievement 📚", "d1"),
    o("Canteen", "Your stomach has a better academic record than you 🍟", "i1"),
    o("Parking area", "Attending college physically, mentally on vacation 🛵", "c1")
  ),

  q("How do you react to political election promises?",
    o("I research before believing", "A dangerous individual. Facts are not welcome everywhere 🔎", "o1"),
    o("I believe everything", "Your trust issues have taken a holiday 🥹", "d2"),
    o("I just want cheaper food", "Finally, a manifesto with realistic expectations 🍕", "i1")
  )

]

/* =========================================================
   MID: COLLEGE, HOSTEL, FRIENDSHIPS AND RELATIONSHIPS
   Slightly sharper roasting
========================================================= */

const mid = [

  q("Your crush suddenly asks for your notes. You:",
    o("Send them immediately", "Academic assistance or emotional investment? We know the answer 📚", "z2d1"),
    o("Ask why they need them", "Cross-examination before the love confession ⚖️", "o2"),
    o("Send the entire semester's material", "They asked for notes. You delivered a marriage proposal 💍", "d3"),
    q("They reply 'thank youuu'. What now?",
      o("You're welcome!", "Three exclamation marks. Your heart is doing overtime ❤️", "z2"),
      o("Ask if they need anything else", "Customer care has entered the relationship 💼", "r1"),
      o("Tell my friends immediately", "Breaking news: A human has acknowledged your existence 📢", "c2")
    )
  ),

  q("Who handles the group project?",
    o("I do everything", "Congratulations. You are the group leader, employee and unpaid intern 🫡", "o3"),
    o("I make the PPT", "You selected a template and called it contribution 🎨", "d2"),
    o("I disappear until submission", "Your group has probably filed a missing-person report 👻", "r3"),
    q("The professor asks about your contribution. You:",
      o("Explain everything confidently", "Your confidence is carrying an entire team of four 🎤", "d2"),
      o("Look at your teammates", "The betrayal was visible from the backbench 👀", "r2"),
      o("Say I handled coordination", "Coordinating your disappearance, apparently 🏃", "c2")
    )
  ),

  q("Your roommate brings their partner into the room. You:",
    o("Politely leave", "A gentleman. Your bed is now a public waiting room 🛏️", "o1"),
    o("Put headphones on", "The headphones are not noise-cancelling enough for this situation 🎧", "c1"),
    o("Ask if they ordered food", "Priorities. Romance can wait, dinner cannot 🍕", "i1")
  ),

  q("Your ex posts a picture with someone new. You:",
    o("Pretend I didn't see it", "Your search history says otherwise 🔎", "d2"),
    o("Post a gym selfie", "Personal growth sponsored by jealousy 🏋️", "r2"),
    o("Wish them well", "Emotionally mature. Suspiciously mature. Are you okay? 🧐", "o1"),
    q("How many times did you check their profile?",
      o("Once", "Once per hour, perhaps? ⏰", "d2"),
      o("I lost count", "The FBI would like to discuss your dedication 🔍", "o3"),
      o("I blocked them", "The block button deserves a national award 🏆", "c1")
    )
  ),

  q("The warden announces a surprise room inspection. You:",
    o("Clean everything immediately", "Your room hasn't been this clean since admission day 🧹", "c1"),
    o("Hide everything under the bed", "Archaeological discoveries incoming 🏺", "i2"),
    o("Pretend you're not in the room", "The warden has your attendance. Nice try 👁️", "r1")
  ),

  q("You have an exam tomorrow and your friend says 'movie?'. You:",
    o("Refuse and study", "Your friendship has officially entered its academic phase 📚", "d1"),
    o("Go for one movie", "One movie, three episodes, zero revision 🎬", "c2"),
    o("Say yes and panic later", "Tomorrow's problem is tomorrow's problem 🥲", "o2c1")
  ),

  q("Your crush asks 'Are you seeing anyone?' You:",
    o("Say no", "The opportunity was standing in front of you. You waved at it 👋", "z1"),
    o("Say 'why, are you interested?'", "Confidence detected. Please maintain a safe distance 😎", "d2z1"),
    o("Say 'not currently'", "You sound like a company hiring for a position 💼", "o1")
  ),

  q("The mess serves the same food for the fourth day. You:",
    o("Eat it peacefully", "Your digestive system deserves an honorary degree 🍛", "i1"),
    o("Start a revolution", "The hostel parliament has convened 🚩", "c2"),
    o("Order food from outside", "Your bank account is now officially a food delivery app 💸", "d1")
  ),

  q("Your friend says they are preparing for placements. You:",
    o("Start preparing too", "Peer pressure has finally become productive 📈", "o1"),
    o("Ask for their roadmap", "The roadmap is longer than your actual preparation 🗺️", "d1"),
    o("Say placements are overrated", "Your resume is empty but your opinions are fully employed 💀", "i2")
  ),

  q("Your partner says 'I need space'. You:",
    o("Give them space", "NASA has requested your relationship coordinates 🚀", "o1"),
    o("Ask how much space", "Negotiating emotional square footage 📐", "i1"),
    o("Go offline for 3 days", "Congratulations, you've turned communication into a hostage situation 📵", "r2c1")
  ),

  q("Someone steals your food from the hostel fridge. You:",
    o("Put a warning note", "The thief is probably using your marker too 🖊️", "o1"),
    o("Install a camera", "CID: Fridge Investigation Unit 📹", "c2"),
    o("Start stealing everyone else's food", "The circle of hostel life continues 🍗", "r3")
  ),

  q("A politician says 'development is our priority'. You:",
    o("Check the actual work", "A fact-checker. The press conference is sweating 📰", "o1"),
    o("Clap enthusiastically", "Your hands have more activity than the project site 👏", "d2"),
    o("Ask about the potholes outside", "One question. Ten officials suddenly have network issues 🚧", "c2")
  ),

  q("Your friend borrows ₹500 and says 'I'll return it tomorrow'.",
    o("Trust them", "Tomorrow has become a mythical place in your friendship 💸", "d2"),
    o("Send daily reminders", "Your banking app has a personal relationship with their phone 📱", "o2"),
    o("Forget about it", "Congratulations. You have sponsored someone's lifestyle 🏡", "i1")
  ),

  q("You accidentally send a romantic message to your college group.",
    o("Delete immediately", "Twenty-seven people saw it. The screenshot has already been archived 📸", "o2"),
    o("Pretend it was a joke", "The joke is currently applying for a transfer 😂", "d2"),
    o("Leave the group", "A dramatic exit. Even the admin is impressed 🚪", "c2")
  ),

  q("Your roommate snores like a tractor. You:",
    o("Wear earplugs", "A peaceful solution to a mechanical problem 🚜", "o1"),
    o("Record them", "The next viral audio sensation has been discovered 🎙️", "c2"),
    o("Snore louder", "A hostel sound battle nobody requested 🔊", "i2")
  ),

  q("Your college announces 75% mandatory attendance. You:",
    o("Start attending regularly", "Character development has finally arrived 📚", "d1"),
    o("Calculate the minimum classes needed", "Mathematics has never been this personal 🧮", "o2"),
    o("Find a way around it", "Your relationship with the attendance system is toxic 🚩", "r2")
  ),

  q("Your crush asks for relationship advice. You:",
    o("Give genuine advice", "You've become the relationship consultant for your own competition 🥲", "z1"),
    o("Tell them to follow their heart", "Your own heart has been unemployed for years ❤️", "d2"),
    o("Say 'depends, who's the person?'", "Subtlety left the chat immediately 🚪", "z2")
  ),

  q("Election season begins in your college. You:",
    o("Ignore everything", "Your only political position is near the canteen 🍟", "i1"),
    o("Join a campaign for free food", "Democracy has found its most practical supporter 🍕", "r1c1"),
    o("Become a campaign strategist", "Your manifesto has 99 promises and one working printer 🖨️", "d2")
  ),

  q("Your friend says 'bro, I have a business idea'. You:",
    o("Listen seriously", "You're about to become a co-founder without a salary 💼", "d1"),
    o("Ask about investment", "The business is currently a Canva presentation 📊", "o1"),
    o("Ask if it is legal", "Your previous startup experience was downloading movies 🏴‍☠️", "c1")
  ),

  q("How do you survive a boring lecture?",
    o("Take notes", "Your notebook is beautiful. Your understanding is questionable 📝", "d1"),
    o("Play games on your phone", "The professor is teaching Java. You're playing Subway Surfers 🚇", "i1"),
    o("Start a conversation with your neighbour", "The entire row has become a podcast studio 🎙️", "c2")
  )

]

/* =========================================================
   SPICY: LOVE, CRUSHES, EXES, RIZZ AND RELATIONSHIP CHAOS
========================================================= */

const spicy = [

  q("Your crush says 'I miss you'. You:",
    o("Say 'I miss you too'", "A rare moment of emotional competence. Don't ruin it ❤️", "z1"),
    o("Ask 'why?'", "The interrogation has begun. Romance is under investigation 🔎", "o2"),
    o("Screenshot and send it to the group", "Your friends have already designed the wedding invitation 💍", "d2c1")
  ),

  q("Your partner is online but hasn't replied for 2 hours. You:",
    o("Wait patiently", "A fictional character with extraordinary patience 📖", "d1"),
    o("Check their last seen every 3 minutes", "Your thumb has developed a permanent WhatsApp reflex 📱", "o3"),
    o("Also go offline to make them jealous", "Two people playing chess with absolutely no chessboard ♟️", "r2")
  ),

  q("Your crush calls you 'bro'. You:",
    o("Accept my fate", "The friend zone has officially issued you a permanent ID card 🪪", "o2"),
    o("Say 'don't call me bro'", "One sentence away from a restraining order 🚨", "z2"),
    o("Call them 'sis' in revenge", "The romantic situation has become a family gathering 👨‍👩‍👧", "c2")
  ),

  q("Your ex texts 'Hey stranger'. You:",
    o("Reply 'Hey'", "The sequel nobody asked for is officially in production 🎬", "r2"),
    o("Leave it on read", "The blue ticks are doing your emotional labour 🫡", "d1"),
    o("Ask if they need money", "Romance has officially become customer support 💸", "c1")
  ),

  q("Your crush says they have a boyfriend/girlfriend. You:",
    o("Wish them well", "A respectful exit. Character development unlocked 🌱", "o1"),
    o("Say 'lucky person'", "The person is lucky. Your timing is not ⏰", "z1"),
    o("Ask if they're happy", "Brother, this is not a job interview 💀", "r2")
  ),

  q("How do you know someone likes you?",
    o("They make time for me", "Emotionally intelligent. Who let you in here? 🧐", "o1"),
    o("They watch all my stories", "Your story viewers are apparently a marriage registry 📸", "d3"),
    o("My intuition", "Your intuition once thought a delivery notification was a love confession 📦", "d2")
  ),

  q("You accidentally like your crush's photo from 2019. You:",
    o("Unlike immediately", "The notification has already travelled faster than light ⚡", "o3"),
    o("Like another photo to make it intentional", "Damage control has become damage expansion 📈", "c2"),
    o("Delete Instagram", "A complete digital identity relocation 🏃", "i2")
  ),

  q("Your partner asks for your phone password. You:",
    o("Give it confidently", "Either innocent or extremely brave. No third option 🔐", "d1"),
    o("Ask why", "The Supreme Court has entered the relationship ⚖️", "o2"),
    o("Say '1234'", "Your security system is as weak as your excuses 💀", "r1")
  ),

  q("Your ideal proposal?",
    o("Under the stars", "You've watched too many romantic films 🌌", "d2"),
    o("At a street food stall", "Nothing says forever like sharing one plate of momos 🥟", "z1"),
    o("A simple 'wanna be mine?'", "Minimalist romance. Maximum emotional risk ❤️", "o1")
  ),

  q("Someone says 'I think we should take a break'. You:",
    o("Ask what went wrong", "Your brain has opened 46 browser tabs 🧠", "o3"),
    o("Say okay", "You have emotionally resigned from the company 🏢", "d1"),
    o("Ask if the break includes other people", "A legal agreement is being drafted 📄", "r2")
  ),

  q("Your friend starts dating your ex. You:",
    o("Congratulate them", "The friendship has entered a new season of psychological warfare 🥲", "o2"),
    o("Block both", "Two accounts, one decision, zero explanations 🚫", "r2"),
    o("Ask for relationship updates", "You're now the audience of your own horror movie 🍿", "c2")
  ),

  q("Your rizz level in college?",
    o("Legendary", "Legendary? Your last conversation was with the photocopy machine 🖨️", "d3"),
    o("Under construction", "The construction company has gone bankrupt 🚧", "z2"),
    o("Non-existent", "Finally, a scientifically accurate self-assessment 🧪", "z3")
  ),

  q("Your crush asks 'Are you free tonight?'",
    o("Yes, absolutely", "Your entire schedule has been cancelled for one notification 📅", "d2"),
    o("Depends, why?", "The detective has entered the romantic investigation 🔍", "o1"),
    o("I have plans (I don't)", "The plans are imaginary. The loneliness is not 🥀", "r1")
  ),

  q("What's your biggest red flag in a relationship?",
    o("Overthinking everything", "You can turn a full stop into a relationship crisis 🛑", "o3"),
    o("Getting attached too quickly", "You said hello and mentally named your future children 🍼", "d2"),
    o("Ignoring messages when angry", "Communication has left the building 📵", "r3")
  ),

  q("You see your crush with someone else. You:",
    o("Walk away confidently", "The walk is confident. The internal monologue is not 🚶", "o2"),
    o("Pretend that person is my friend", "Your imagination is working overtime 🎭", "d3"),
    o("Go home and listen to sad songs", "Spotify has been informed of your emotional condition 🎧", "c1")
  ),

  q("Your partner asks 'Would you love me if I were a worm?'",
    o("Of course", "You are ready to invest in a very unusual relationship 🪱", "d2"),
    o("What kind of worm?", "The most important compatibility question 🧐", "o2"),
    o("No, please be normal", "Romance has been denied due to biological concerns 🚫", "i1")
  ),

  q("You find out your crush is dating someone from your class. You:",
    o("Act normal in class", "Your attendance is now 100%, emotional stability 0% 📚", "o2"),
    o("Become best friends with their partner", "An undercover operation has begun 🕵️", "r2"),
    o("Change your entire timetable", "Academic planning sponsored by heartbreak 🗓️", "c2")
  ),

  q("How do you apologise after a fight?",
    o("Explain my feelings", "A mature conversation? Are we sure this is the same quiz? 🥹", "o1"),
    o("Send a meme", "Emotional damage repaired using a dancing cat 🐈", "i1"),
    o("Say 'fine, you're right'", "The apology has a hidden terms-and-conditions section 📄", "r2")
  ),

  q("Your crush sends 'good night'. You:",
    o("Reply good night", "A historic exchange of two words. Love is alive 🌙", "z1"),
    o("Send a paragraph", "They wanted sleep. You delivered a novel 📖", "o2"),
    o("Stay online for another hour", "You're not sleeping. You're monitoring the situation 👁️", "d2")
  ),

  q("What would you do if your crush confessed?",
    o("Say yes immediately", "You were ready before they finished the sentence 💍", "d2"),
    o("Freeze", "Your operating system has stopped responding 🖥️", "o2"),
    o("Ask if it's a prank", "Trust issues have officially entered the chat 🔒", "o3")
  )

]

/* =========================================================
   FINALE: HOSTEL, COLLEGE, POLITICS AND DEEP CHAOS
========================================================= */

const finale = [

  q("If your hostel had elections, what would your manifesto promise?",
    o("Unlimited Wi-Fi", "Finally, a leader with a functioning brain 📶", "d1"),
    o("Better food in the mess", "A revolution powered by hunger 🍛", "c1"),
    o("No room inspections", "The corrupt have found their candidate 🚩", "r2")
  ),

  q("If you became college principal for one day, what would you do?",
    o("Cancel attendance requirements", "The entire college has already voted for you 🗳️", "d2"),
    o("Make exams open-book", "Your academic strategy is based on survival 📚", "i1"),
    o("Make professors attend student lectures", "The tables have turned. The classroom is trembling 🔄", "c2")
  ),

  q("A politician promises free Wi-Fi at every hostel. You:",
    o("Ask when it starts", "Your priorities have finally entered public policy 📶", "o1"),
    o("Start campaigning for them", "Democracy is powered by bandwidth 🗳️", "d2"),
    o("Ask if the password is also free", "The opposition has been defeated by one question 💀", "c1")
  ),

  q("Your college canteen announces a price increase. You:",
    o("Stop buying snacks", "Austerity measures have begun 🍟", "d1"),
    o("Start a protest", "The revolution will be televised. Probably on someone's story 📢", "c2"),
    o("Start your own canteen", "Startup founder. Initial investment: one borrowed pan 💼", "d2")
  ),

  q("If your life were a political party, its symbol would be:",
    o("A broken alarm clock", "Your manifesto: wake up someday ⏰", "c2"),
    o("An empty wallet", "Campaign funded by financial suffering 💸", "i1"),
    o("A disappearing student", "Your attendance record is the entire manifesto 👻", "r2")
  ),

  q("Your roommate becomes hostel president. What happens?",
    o("Nothing changes", "The same chaos, now with an official title 🏆", "d1"),
    o("Free food for friends", "Nepotism has entered the mess 🍗", "r2"),
    o("The room becomes a government office", "Files, complaints and one broken chair 🪑", "c2")
  ),

  q("You get caught bunking class. Your excuse?",
    o("I had important work", "Important work: watching a 40-minute YouTube video 🎥", "d2"),
    o("I was sick", "Your health magically improves near the canteen 🤒", "r1"),
    o("The classroom was too crowded", "The attendance register has requested legal representation ⚖️", "c2")
  ),

  q("If your crush became Prime Minister, what would your first demand be?",
    o("More quality time", "National policy now includes your relationship problems 💍", "d3"),
    o("Free food for everyone", "A government built on samosas and promises 🥟", "i1"),
    o("Reply to my messages", "Parliament has been adjourned due to personal reasons 📱", "z2")
  ),

  q("Your hostel mess food becomes a political issue. You:",
    o("Demand a proper menu", "A citizen exercising their constitutional right to dinner 📜", "o1"),
    o("Create a meme page", "Democracy has found its most powerful weapon 😂", "c2"),
    o("Start a hunger strike", "The mess uncle is already planning your replacement 🍛", "d2")
  ),

  q("What's your greatest contribution to college?",
    o("Good academic performance", "The topper has entered the chat. Everyone else has left 🏅", "d2"),
    o("Making everyone laugh", "Your GPA is questionable, but your entertainment value is high 🎭", "c1"),
    o("Sharing assignment PDFs", "A public service institution disguised as a student 📚", "i1")
  ),

  q("If you were given ₹1 crore, what would you do?",
    o("Invest it", "Financial discipline. Your friends have stopped recognising you 💰", "d1"),
    o("Buy a house and a car", "Your future self has already spent the money 🏎️", "d2"),
    o("Disappear from college", "Your professor has been waiting for this announcement 👋", "c2")
  ),

  q("A political leader changes parties overnight. Your reaction?",
    o("I need an explanation", "A journalist has been born. The press conference is nervous 🎤", "o1"),
    o("Politics is politics", "The most experienced statement from the most inexperienced analyst 🧐", "d1"),
    o("I change my opinion too", "Political flexibility has found its strongest competitor 🔄", "c2")
  ),

  q("Your best friend gets a girlfriend/boyfriend and stops meeting you. You:",
    o("Give them space", "Friendship has been placed on airplane mode ✈️", "o1"),
    o("Send daily reminders", "Your friendship has become a subscription service 🔔", "r1"),
    o("Find a new best friend", "Replacing people faster than a phone upgrade 📱", "c2")
  ),

  q("If your college life were a movie, its title would be:",
    o("The Pursuit of Attendance", "A tragic masterpiece. Runtime: 4 years 🎬", "o1"),
    o("Mission Impossible: Placements", "Tom Cruise has declined the role 😭", "d2"),
    o("Fast and Curious: The Backbenchers", "No learning, just acceleration 🏎️", "c1")
  ),

  q("You are made the hostel warden for one night. First action?",
    o("Check every room", "The students have declared a state of emergency 🚨", "r2"),
    o("Order pizza for everyone", "A leader who understands the people 🍕", "d1"),
    o("Sleep in the warden's room", "Power has finally made you lazy 🛏️", "i1")
  ),

  q("Your friend says they have a plan to pass without studying. You:",
    o("Ask for details", "Academic research has reached a new low 🔬", "o1"),
    o("Join immediately", "Two brain cells have formed a coalition 🤝", "i2"),
    o("Tell them to study", "The only responsible person in the group is also the least invited 📚", "d1")
  ),

  q("What is your biggest contribution to democracy?",
    o("Voting responsibly", "The Election Commission would like to thank you 🗳️", "d1"),
    o("Arguing in Instagram comments", "Your constituency is the comment section 💬", "c2"),
    o("Forwarding political memes", "Your political influence is measured in laughing emojis 😂", "i1")
  ),

  q("You become famous overnight. What is your first move?",
    o("Give interviews", "Your confidence has finally found an audience 🎤", "d2"),
    o("Buy a luxury car", "Your bank account is still loading 💳", "i1"),
    o("Delete all embarrassing posts", "The internet has already backed them up forever 📸", "o2")
  ),

  q("If your hostel had a parliament, what would be the biggest debate?",
    o("Who stole the last Maggi packet?", "The nation demands answers 🍜", "o2"),
    o("Who used all the hot water?", "A constitutional crisis in the bathroom 🚿", "c2"),
    o("Who is responsible for the dirty room?", "Everyone is guilty. Nobody is responsible 🧹", "r2")
  ),

  q("You are asked to give a speech about your college experience. You:",
    o("Talk about learning and growth", "The placement brochure has entered the chat 🎓", "d1"),
    o("Complain about attendance", "Your speech has already been approved by 90% of the audience 📢", "c1"),
    o("Say 'no comments'", "A politician in the making 🎤", "r1")
  )

]

/* =========================================================
   CALLBACK QUESTIONS
========================================================= */

const CALLBACKS = [

  (t) => q(
    t ? `Earlier you said: "${t}". Still standing by that decision?` : "Looking back at your answers, how do you feel?",
    o("Absolutely", "Confidence without evidence. A political campaign could use you 🗳️", "d3"),
    o("I regret everything", "Good. Personal growth has finally started 🥲", "o3"),
    o("What did I say?", "We have the receipts. Unlike your memory 🧾", "i2c1")
  ),

  (t) => q(
    t ? `Remember "${t}"? Would your best friend agree with you?` : "Would your best friend agree with your answers?",
    o("Obviously", "Your best friend has requested anonymity 📵", "d2"),
    o("They'd laugh at me", "At least someone is getting entertainment from your life 😂", "o1"),
    o("I don't have a best friend", "We would comfort you, but we're also judging you 🥲", "o2")
  ),

  (t) => q(
    t ? `You really chose "${t}". What were you thinking?` : "What were you thinking throughout this quiz?",
    o("I was being honest", "Honesty is admirable. Your answers are not 🫡", "d2"),
    o("I wasn't thinking", "That explains the entire situation 🧠", "i3"),
    o("I want my answers deleted", "The group chat has already received the report 📱", "c2")
  )

]

/* =========================================================
   FINAL QUESTIONS
========================================================= */

const FINALS = [

  q("Last one. Ready for your results, or should we call your parents first?",
    o("Ready", "Brave. Your family group chat is about to become active 🔥", "d2"),
    o("Call them. They deserve to know", "They said they already knew. Apparently, everyone did 📞", "r2"),
    o("Can I skip this one?", "No. Like your attendance shortage, this is unavoidable ⏰", "c1i1")
  ),

  q("Final question: are you actually a good person?",
    o("Yes", "The quiz disagrees. The quiz has screenshots 🧾", "d3"),
    o("Mostly", "Mostly is doing some very heavy lifting here 🏋️", "o1"),
    o("The jury is still out", "The jury left for chai and never came back ☕", "o2")
  ),

  q("Last question, promise. Are you happy with your decisions?",
    o("100%", "100% confidence. 0% supporting evidence 🫡", "d3"),
    o("Not really", "Self-awareness has entered the chat. Finally 🥹", "o2"),
    o("I'd like a refund", "The quiz was free. The embarrassment was complimentary 💸", "c1")
  )

]

/* =========================================================
   NO-REPEAT PICKING
========================================================= */

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

  finals.splice(
    Math.floor(Math.random() * 3),
    0,
    {
      make: (hist) =>
        cb(
          hist.length
            ? pickOne(
                hist
                  .filter((h) => h.t.length < 48)
                  .concat({ t: "" })
              ).t
            : ""
        )
    }
  )

  return [
    ...pick(warm, 2).map(prep),
    ...pick(mid, 3).map(prep),
    ...pick(spicy, 3).map(prep),
    ...finals,
    prep(pickOne(FINALS))
  ]
}

export const POOL_SIZE =
  warm.length +
  mid.length +
  spicy.length +
  finale.length +
  CALLBACKS.length +
  FINALS.length

/* =========================================================
   JUDGEMENT MESSAGES
========================================================= */

export const JUDGE = [

  "Noted. In red ink. 🖍️",
  "Your teacher just sneezed. Coincidence? No. 🤧",
  "This answer is going on the notice board. 📌",
  "That earns you a 'see me after class'. 😬",
  "Even the backbench went quiet. 🤫",
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
  "Your hostel warden has been informed. 🚨",
  "The mess committee is reviewing your answer. 🍛",
  "Even the opposition agrees with this one. 🗳️",
  "Your crush has been notified. Just kidding. Probably. 👀",
  "The placement cell has requested a meeting. 💼",
  "A committee will be formed to investigate this answer. 📄",
  "The canteen uncle is disappointed. 🥲",
  "Your roommate is already laughing. 🛏️",
  "The entire hostel has voted against you. 🗳️"

]

/* =========================================================
   NOTES
========================================================= */

export const NOTES = [

  "(this one is internal marks)",
  "(not in the syllabus)",
  "(no negative marking, only judgment)",
  "(sir is watching)",
  "(take your time, the bell isn't ringing)",
  "(attendance counted)",
  "(rizz is being measured)",
  "(this one's for the group chat)",
  "(hostel warden is watching)",
  "(your crush might see this)",
  "(the mess uncle knows)",
  "(democracy is optional, apparently)",
  "(your roommate has receipts)",
  "(placement season is approaching)",
  "(no grace marks for bad decisions)"

]

/* =========================================================
   LOADING MESSAGES
========================================================= */

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
  "Checking your hostel room. The smell is concerning",
  "Asking the mess uncle for a second opinion",
  "Verifying your attendance with the warden",
  "Checking your ex's opinion. They declined",
  "Consulting the election commission",
  "Counting your red flags. We ran out of paper",
  "Checking your placement eligibility",
  "Asking your roommate. They started laughing",
  "Preparing a parliamentary investigation",
  "Searching for your lost common sense"

]

/* =========================================================
   TRAIT LABELS
========================================================= */

export const TRAITS = {
  o: "Overthinking",
  i: "Idiocy",
  r: "Red flags",
  c: "Chaos",
  d: "Delusion",
  z: "Bad rizz"
}

/* =========================================================
   RESULTS
========================================================= */

export const RESULTS = {

  o: {
    name: "Professional Overthinker",

    blurb:
      "You rehearsed 'good morning' forty times in your head, then said 'you too' to the peon 🫠. You analyse every message, every emoji, every last-seen timestamp. Your brain has 47 tabs open and none of them are responding.",

    verdict:
      "Will apologise to a chair for bumping into it. Then wonder if the chair felt uncomfortable 🪑",

    avoid:
      "Read receipts, relationship discussions and unexpected phone calls",

    trolls: [
      "You'll overthink this result for 6 hours and still pick the wrong conclusion 🫠",
      "Even your overthinking is overthinking. That's a lot of thinking for nothing 🧠",
      "You'll rewrite the breakup message 9 times and then send 'k' 📝"
    ]
  },

  i: {
    name: "Certified Idiot",

    blurb:
      "We checked your answers twice. Then we checked the quiz, in case it was our fault. It wasn't 🤡. Your one remaining brain cell has applied for a transfer. You make decisions first and ask questions never.",

    verdict:
      "Would lose an argument with a notice board and thank it for the feedback 📌",

    avoid:
      "Exams, common sense and complicated instructions",

    trolls: [
      "The bar was on the floor and you still tripped on it 🤡",
      "If idiocy had Wi-Fi, you'd be the password: 12345678 📶",
      "Your brain cell left a voicemail. It said 'Help' 📞"
    ]
  },

  r: {
    name: "Walking Red Flag",

    blurb:
      "You borrow pens and never return them, leave people on read, take credit for group projects and disappear when responsibility arrives 🚩. You're not evil. You're just the reason people have trust issues.",

    verdict:
      "Last seen asking for 'one small favour', a lift and someone's Netflix password 🛵",

    avoid:
      "Healthy relationships, group projects and shared hostel refrigerators",

    trolls: [
      "Your future partner just got a stomach ache and doesn't know why 🚩",
      "Even your shadow keeps a distance 🌑",
      "Red flags are free for you. You've been handing them out since admission 🎁"
    ]
  },

  c: {
    name: "Gremlin in a Trench Coat",

    blurb:
      "Your timetable is a rumour, your attendance a legend, and your hostel bag contains one pen, four chargers and a mysterious banana 🍌. Nobody knows how you survive. Neither do you.",

    verdict:
      "Has never said 'I'll be there in five' and actually been there in five ⏱️",

    avoid:
      "Calendars, deadlines, hostel inspections and 8 AM lectures",

    trolls: [
      "Somewhere, a calendar just burst into tears 📅",
      "You're not late. You're on a different timeline. A sadder one ⏳",
      "Your bag holds chaos, a banana and a lost sock. A trilogy 🎒"
    ]
  },

  d: {
    name: "Main Character (Unearned)",

    blurb:
      "You walk into college like there's a soundtrack. There isn't. It's the projector fan, and it's judging you quietly 🎬. You think your crush notices every story, your professor remembers your face and your friends secretly admire you.",

    verdict:
      "Believes the canteen uncle thinks about them at night. He doesn't 🥟",

    avoid:
      "Mirrors, marksheets, honest friends and reality checks",

    trolls: [
      "The camera isn't on, babe. It was a phone flashlight 🔦",
      "Your rizz is confidence on credit. The bill is due 💳",
      "You think this quiz was about you. It was. Sadly 🎬"
    ]
  },

  z: {
    name: "Certified Rizz Disaster",

    blurb:
      "You said 'hi' like a Wi-Fi password and flirted like a customer-care call 📞. Your crush screenshotted you. Not to save it. To warn others. Your romantic life needs a software update.",

    verdict:
      "Told a stranger 'nice shoes', then entered witness protection 👟",

    avoid:
      "Anyone who smiles at you, romantic situations and pickup lines",

    trolls: [
      "Your rizz couldn't open a fridge. Not even a hungry one 🥶",
      "If rizz was money, you'd owe a pigeon 🐦",
      "Your crush is typing... then deleting. Forever ✍️"
    ]
  },

  n: {
    name: "Suspiciously Normal Person",

    blurb:
      "You scored evenly on everything, which is the most suspicious thing a student can do 🕵️. Either you're perfectly balanced or you copy from everyone. You somehow survived college, hostel life and relationships without becoming a complete disaster.",

    verdict:
      "Rare. About one in twenty get this. We've informed the invigilator 🧐",

    avoid:
      "People who ask too many questions about your normal behaviour",

    trolls: [
      "Too normal to be real. Blink twice if you're a robot 🤖",
      "You blend in so well your own shadow lost you 🥷",
      "Normal people don't take this quiz. So what are you? 🧐"
    ]
  }

}

/* =========================================================
   RESULT SCORING
========================================================= */

export function scoreResult(s) {

  const entries = Object.entries(s)

  const vals = entries.map(([, v]) => v)

  const max = Math.max(...vals)

  const min = Math.min(
    ...vals.filter((_, i) => entries[i][0] !== "z")
  )

  const top = shuffle(
    entries.filter(([, v]) => v === max)
  )[0][0]

  const key = max - min <= 4 ? "n" : top

  const bars = entries.map(([k, v]) => ({
    k,
    label: TRAITS[k],
    pct: Math.max(
      4,
      Math.round((99 * v) / (max || 1))
    )
  }))

  const rizz = Math.round(4 - s.z * 1.5)

  const rizzEmoji =
    rizz >= 3 ? "😎" :
    rizz >= 0 ? "😐" :
    "💀"

  return {
    key,
    bars,
    percentile: 61 + Math.floor(Math.random() * 38),
    rizz: `${rizz}/10 ${rizzEmoji}`,
    troll: pickOne(RESULTS[key].trolls),
    ...RESULTS[key]
  }

}