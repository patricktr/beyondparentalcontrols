// Narration for the KID site (yourinternetroadmap.com). Warm, second-person,
// gender-neutral. This file is the ONLY content the kid build ships — it must
// never contain candid material. Ported from the original kid roadmap.

// Per-grade kid content, keyed by stage id. Each grade: a few headline `lines`
// and optional "Tell me more" `notes`.
const GRADES = {
  g4: {
    lines: [
      ['You get', (h) => `individual websites that we approve together, playing Minecraft or similar games — on your own, with us, or with friends you know from real life (chat off or set to just those friends)${h.schoolDevice ? ', the school device at the kitchen table' : ''}, and picking shows and videos to watch together.`],
      ['Coming later', () => `searching on your own, chatting online, social apps.`],
      ["You'll get good at", () => `spotting scams (“free” = trap), keeping passwords secret, and the most important skill of all — <em>close it and tell us</em>.`],
    ],
    notes: [
      ['The scam game.', `The biggest trick online is the word FREE. Real games never ask for your password on some other website to give you “free” coins. When you spot a “free stuff” offer, that’s your cue to yell “SCAM!” and show us. We’ll keep score.`],
      ['Close it and tell us.', `Let’s practice it now so it’s automatic later: if anything on a screen is scary, gross, or just weird — close it, walk away, come find us. Every single time you do that, you did it exactly right.`],
      ['Playing with friends.', `You can build and play with friends you actually know from school or the neighborhood. Chat stays off, or set to just those friends — we’ll decide together who’s on your list.`],
    ],
  },
  g5: {
    lines: [
      ['You get', () => `searching the web (with a safety net that blocks most of the bad stuff), and watching more videos on your own.`],
      ["You'll get good at", () => `the “Break the Fake” trick for checking if something online is true, and spotting the four warning signs.`],
    ],
    notes: [
      ['What’s “Break the Fake”?', `A four-step trick for figuring out if something online is real: <strong>(1)</strong> Who made this? <strong>(2)</strong> Find the original — where did it first come from? <strong>(3)</strong> What do other places say? <strong>(4)</strong> Ask before you share. Most fake stuff spreads because people share it fast without checking — you “break the fake” just by slowing down.`],
      ['The “safety net.”', `Your searches pass through a filter that quietly blocks the worst websites, like the bumpers in bumper-bowling. It’s not there to watch you — it’s there to catch the gutter balls while you’re still learning to aim.`],
    ],
  },
  g6: {
    lines: [
      ['You get', () => `your own email, and texting with people we both know.`],
      ['Still waiting', () => `social media like TikTok, Instagram, and Snapchat — and we’ll explain <em>why</em>, not just say no.`],
      ["You'll get good at", () => `being a good person in group chats (screenshots travel!), and understanding why apps try so hard to keep you scrolling.`],
    ],
    notes: [
      ['Why wait on social media?', `Apps like TikTok and Instagram show you an endless feed picked by a computer, not by you — and that computer’s only goal is to keep you staring. Even grown-ups struggle to put them down. We wait on purpose, and you’ll get them later, one at a time.`],
      ['Group-chat superpowers.', `Once you hit send, it’s out of your hands — a screenshot can fly to the whole grade. Quick test before you send anything: “Would I be okay if <em>everyone</em> saw this?” And be the kid brave enough to type “not cool” when a chat turns mean. Others will follow you.`],
    ],
  },
  g7: {
    lines: [
      ['The idea', () => `this year your <em>skills</em> grow faster than your access — because skills are the thing that unlocks the next stuff.`],
      ["You'll get good at", () => `noticing when someone online is trying to trick or pressure you, and spotting videos that are built to make you angry on purpose (some people make money that way — don’t be their product).`],
    ],
    notes: [
      ['“You’re being farmed.”', `Some videos are designed to make you angry, jealous, or scared on purpose — because upset people keep watching, and the maker gets paid. When a video suddenly makes you mad, ask yourself: “Who’s making money off me being angry right now?” That question is a superpower.`],
      ['Spotting pressure.', `Anyone who rushes you, guilt-trips you, or says “quick, don’t tell your parents” is waving a giant red flag. Real friends never pressure you like that. Slow down, and loop us in.`],
    ],
  },
  g8: {
    lines: [
      ["You get (if you're ready)", () => `your first smartphone by the end of this year — and <em>maybe</em> your first social app. If you do get one, it starts with starter settings and us linked in.`],
      ["You'll get good at", () => `steering your own video feed, and knowing that fake pictures (“deepfakes”) exist — and that it’s never your fault if someone else makes one.`],
    ],
    notes: [
      ['Why “maybe”?', `Two reasons. One: only if you’re ready. Two: the law might say not yet. Some places have set the minimum age for social media at 16, and that could be the rule where we live by the time you get here. If it is, we follow it — the app waits until you’re old enough.`],
      ['Why only one app?', `Because you get really good at one before adding the next — like leveling up in a game instead of starting on the hardest level. Beat level one, unlock level two.`],
      ['Steering your feed.', `You’re the boss of what you see. Tap “not interested” on junk, reset your history when the feed gets weird, and follow stuff that makes you feel good — not stuff that makes you feel bad about yourself. Train it like a pet.`],
      ['Deepfakes.', `Computers can now make fake pictures and videos of real people that look real. If someone ever makes a fake of you, it is 100% not your fault, and we can get it taken down — just tell us.`],
    ],
  },
  g9: {
    lines: [
      ['The rules start coming off — and you’ll feel it', () => `Filters get lighter. You start setting your own time limits (we can see them, but <em>you</em> set them).`],
      ["You'll get good at", () => `telling the difference between real life and the internet’s polished, fake version of it, and spotting an online “friendship” that’s actually sketchy.`],
    ],
    notes: [
      ['Your own limits.', `You set your own screen-time limits now. We can see them, but you’re the one driving. Keep it working and it stays yours — that’s the whole trade.`],
      ['Real vs. the highlight reel.', `Tons of what looks perfect online is edited, staged, or set up to sell something. We’ll talk about it honestly so the fake-perfect stuff doesn’t mess with how you feel about your own life.`],
      ['Sketchy “relationship” signs (online or in person).', `Someone who wants you all to themselves, pushes secrets, rushes everything, or is a lot older — those are the same four warning signs from Grade 5, just grown up.`],
    ],
  },
  g10: {
    lines: [
      ['You get', () => `an almost-open internet — and you become the family expert who helps a younger sibling through the tricky middle-school stuff (first phone, first apps, and the traps that come with them).`],
      ['Most of the controls are gone by now', () => `That was always the plan. But “almost-open” was never “anything goes.” The filters come off; our family’s values don’t. The parts of the internet built on hate and cruelty stay a hard no — not because something blocks them, but because you know who you are.`],
    ],
    notes: [
      ['Teaching mode.', `A younger sibling is now hitting the same stuff you did in grades 7 and 8 — first phone and first apps, feeds trying to farm them, deepfakes, sketchy DMs. You’ve been through all of it, so you become their go-to coach. Being the one who teaches it makes you the family expert — and teaching something is how you truly master it yourself.`],
      ['What’s left.', `Mostly just the same background security we all use, plus a bedtime for screens if sleep needs protecting. The big kid-controls are gone, because you earned that.`],
    ],
  },
  g11: {
    lines: [
      ['Basically the open internet', () => `We keep only the same basic security stuff we use on our <em>own</em> devices. You make more of the calls, and we talk them through like adults.`],
    ],
    notes: [
      ['Advisor mode.', `We’re not checking up on you — we’re just here when you want a second opinion. Now we talk about big-kid stuff: strong passwords, money and job scams aimed at teens, and keeping your accounts locked down.`],
    ],
  },
  g12: {
    lines: [
      ['Everything is yours', () => `All your accounts, all your passwords, no filters. We’ll even throw a little “graduation” — because that was the whole point.`],
    ],
    notes: [
      ['The handoff.', `Every account, every password, no filters — all yours. You’ll know how to protect your own accounts and even help your friends when something goes wrong for them.`],
      ['The rule that never expires.', `Call us first when something goes wrong. That one’s forever.`],
    ],
  },
};

// Freedom-arc line labels map to three tints: what you gain (green), what's
// still gated (tan), and the skills that unlock the next stage (teal).
const lineClass = (label) =>
  label === "You'll get good at" ? 'skill'
    : label === 'Coming later' || label === 'Still waiting' || label === 'Most of the controls are gone by now' ? 'later'
      : 'get';

const gradeCard = (h, s) => {
  const g = GRADES[s.id];
  const n = s.id.slice(1); // "4".."12"
  const isFinish = s.id === 'g12';
  const gradeLabel = `<span class="grade-label">${s.grade.toUpperCase()} · AGE ${s.age}</span>`;
  const head = s.isCurrent
    ? `<div class="head">${gradeLabel}<span class="here-pill">📍 YOU ARE HERE</span></div>`
    : gradeLabel;
  const lines = g.lines
    .map(([label, text]) => `<p><strong class="${lineClass(label)}">${label}:</strong> ${text(h)}</p>`)
    .join('\n');
  const more = g.notes.length
    ? `<details class="more"${s.isCurrent ? ' open' : ''}>
        <summary><span class="chev" aria-hidden="true">▸</span>Tell me more</summary>
        <div class="more-body">${g.notes
          .map(([hd, txt]) => `<p><strong>${hd}</strong> ${txt}</p>`)
          .join('\n')}</div>
      </details>`
    : '';
  return `
    <div class="level${s.isCurrent ? ' now' : ''}${isFinish ? ' finish' : ''}" data-g="${n}">
      <span class="node">${isFinish ? '🎉' : n}</span>
      <div class="card">
        ${head}
        <h3>“${s.title}”</h3>
        ${lines}
        ${more}
      </div>
    </div>`;
};

export default [
  // hero + journey bar + greeting + big idea
  {
    body: (h) => {
      const curAge = h.current ? h.current.age : h.cfg.age;
      const pct = Math.max(0, Math.min(100, Math.round(((curAge - 9) / 9) * 100)));
      return `
      <div class="hero">
        <span class="hero-pill">🚀 A plan just for you</span>
        <h1>Your Internet<br>Roadmap</h1>
        <p class="hero-sub">How you earn more freedom online — one year at a time.</p>
      </div>

      <div class="journey">
        <div class="journey-track">
          <div class="journey-here" style="left:${pct}%">🚲</div>
          <div class="journey-end">🎉</div>
        </div>
        <div class="journey-labels">
          <div class="start"><div class="big">Age ${curAge}</div><div class="small">YOU ARE HERE</div></div>
          <div class="finish"><div class="big">Age 18</div><div class="small">ALL YOURS</div></div>
        </div>
      </div>

      <p class="intro"><strong>${h.hasName ? `Hey ${h.name}!` : 'Hey!'}</strong> This is the plan for how you’ll use
        the internet as you grow up. You and your parents are a team on this, so you wrote it down
        together. Here’s the big idea:</p>

      <div class="big-idea">
        <p class="lead">Every single year, you get more freedom online — as long as you show
           you’re ready for it.</p>
        <p>It’s a little like learning to ride a bike. First we hold on. Then we let go but run
           right beside you. Then one day you ride off on your own. We are <em>not</em> going to
           hold on forever — we let go a little more every year, on a schedule you can see right here.</p>
        <p>The rules aren’t because we don’t trust you. They’re just our hand on the seat while you
           find your balance. And that hand always comes off.</p>
      </div>`;
    },
  },

  // promise
  {
    body: () => `
      <div class="section">
        <h2><span class="emoji">🤝</span>Our promise to you</h2>
        <p class="section-intro">This is the most important part of the whole plan, so read it twice:</p>
        <div class="promise">
          <p class="lead">You will NEVER be in trouble for telling us something that happened online.
             We will never take your devices away because someone else did something to you — even if
             you broke a rule first.</p>
          <p>If something online ever scares you, confuses you, or just makes you feel weird — you can
             always come tell us. Always. We might feel a little worried, but we will <strong>never</strong>
             be mad at you for telling the truth. Telling us is the right move every single time.</p>
          <p><strong>Your promise back:</strong> when something feels off, close it and come find us.
             That’s the whole job.</p>
        </div>
      </div>`,
  },

  // a few things that are always true
  {
    body: () => `
      <div class="section">
        <h2><span class="emoji">⭐</span>A few things that are always true</h2>
        <p class="section-intro">No matter how old you get, these never change:</p>
        <div class="rules">
          <div class="rule"><span class="tile">🎣</span><p><strong>Nothing online is really free.</strong> If something shouts “FREE coins!” or “free skins!”, it’s almost always a trick to steal your password or your info. Real free things don’t make you log in or “verify” first. You’re the scam detective — when you catch one, tell us. It’s fun.</p></div>
          <div class="rule"><span class="tile teal">🎭</span><p><strong>Some people online aren’t who they say they are.</strong> This is the grown-up version of stranger danger. Someone who says they’re a kid your age might really be an adult pretending. That’s why we’re careful about who you talk to online — the same way you wouldn’t walk off with a stranger at the park.</p></div>
          <div class="rule warn-card">
            <div class="rule-head"><span class="tile warn">🚩</span><p><strong>Learn the four warning signs.</strong> Be on the lookout if someone online:</p></div>
            <div class="warn-grid">
              <div class="warn-chip">🎁 offers you gifts or free stuff,</div>
              <div class="warn-chip">💬 says super nice things really fast (“you’re so cool / so mature!”),</div>
              <div class="warn-chip">🤫 asks you to keep a secret from your parents, or</div>
              <div class="warn-chip">📱 asks you to move somewhere private to chat (a different app, or DMs).</div>
            </div>
            <p class="warn-note">Any <strong>one</strong> of those = stop, and come show us. You’re not in trouble — you’re being smart. <strong>Know the difference between surprises and secrets.</strong> A surprise is something everyone learns about eventually. A secret stays hidden. In our house, we do not keep secrets from each other. If someone asks you to keep a secret, tell them you don’t keep secrets — and tell <em>us</em> that someone asked.</p>
          </div>
          <div class="rule"><span class="tile">🛡️</span><p><strong>Your body is private.</strong> If anyone ever asks for pictures of your body, or asks you to do something on camera, stop, don’t answer, and come tell us right away. This is true even when the person is someone you <em>know</em> — a kid from school, a teammate, a friend. Sometimes a person who is being tricked gets pushed into asking other kids, so a message can look like it’s from a friend and still be a trap. No matter who it’s from, you will never, ever be in trouble for telling us. We’ll sort it out together.</p></div>
          <div class="rule"><span class="tile teal">🙈</span><p><strong>If you see grown-up stuff, close it and tell us.</strong> Sometimes you might bump into a video or picture that’s really made for adults, or something that just makes you feel yucky. It’s not your fault and you’re not in trouble. Just close it and come tell us — this happens to almost everybody at some point, so we won’t be shocked.</p></div>
          <div class="rule-pair">
            <div class="rule"><span class="tile">🔒</span><p><strong>Passwords are secrets</strong> — even from your best friend. We’ll keep yours written down somewhere safe.</p></div>
            <div class="rule"><span class="tile purple">😴</span><p><strong>Screens live in the common areas and sleep charging outside your bedroom.</strong> Not a punishment! Screens are just really sneaky at stealing sleep, and sleep is when your brain does its growing.</p></div>
          </div>
          <div class="rule values"><span class="tile mint">💚</span><p><strong>Our values don’t have an off switch.</strong> As you get older, we take the filters and locks off — because we trust you, not because “anything goes.” Some corners of the internet are built on hate: places made to attack people for their race, their religion, or who they are. We don’t spend time there — not because a filter blocks it, but because that’s not who we are. When the guardrails come off, that part stays on.</p></div>
        </div>
      </div>`,
  },

  // the roadmap
  {
    body: (h) => `
      <div class="section">
        <h2><span class="emoji">🗺️</span>The roadmap: what you unlock, year by year</h2>
        <p class="section-intro">Here’s the whole map so you can see what’s coming. Each year unlocks something new — and each
           year some rules come <em>off</em>, because you’ve shown you can handle more.</p>
        <p class="section-tip">💡 One important thing: the grades and ages here are a <em>guide</em>, not a deadline. What
           really unlocks the next stage isn’t your birthday — it’s the <strong>“You’ll get good at”</strong>
           part. When you show us you’ve gotten good at those skills, you’re ready to move up.</p>
        <div class="track">
          ${h.stages.map((s) => gradeCard(h, s)).join('\n')}
        </div>
      </div>`,
  },

  // the secret + questions
  {
    body: () => `
      <div class="secret">
        <p class="label">Here’s the secret we’ll tell you on that last day:</p>
        <p class="big">The filters were never really the point. <span class="hl">You</span> were the thing
           we were building this whole time. And the one rule that never expires: <span class="hl">call us first when
           something goes wrong.</span> That offer never runs out.</p>
      </div>
      <div class="questions">
        <h2>Questions? 🙋</h2>
        <p>Ask us anything, anytime. There is no such thing as a dumb question about this stuff — even we
           have to look things up. We’re on your team, all the way through.</p>
      </div>`,
  },
];
