// Narration for the KID site (yourinternetroadmap.com). Warm, second-person,
// forward-facing. This file is the ONLY content the kid build ships — it must
// never contain candid material. Addresses the kid as "you", so gender mostly
// affects the parent side, not here.

const hi = (h) => (h.hasName ? `Hey ${h.name}!` : 'Hey!');

export default {
  intro: {
    body: (h) => `
      <h1>Your Internet Roadmap</h1>
      <p class="sub">How you earn more freedom online — one year at a time.</p>
      <p>${hi(h)} This is the plan for how you'll use the internet as you grow up.
         You and your parents made it together, so you can always see what's coming.</p>`,
  },

  bigIdea: {
    body: (h) => `
      <div class="big-idea">
        <p><strong>Every year, you get a little more freedom online — as long as you
           show you're ready for it.</strong></p>
        <p>It's like learning to ride a bike. First we hold on. Then we run beside you.
           Then one day you ride off on your own. That hand always comes off.</p>
      </div>`,
  },

  roadmap: {
    body: (h) => `
      <h2>Your road</h2>
      <p>Here's where you are today${h.hasName ? `, ${h.name}` : ''} — and what's next.</p>
      <ol class="road">
        ${h.stages.map((s) => `
          <li class="${s.isCurrent ? 'here' : ''}${s.isNext ? ' next' : ''}">
            <span class="age">${s.terminal ? '18' : `Age ${s.age}`}</span>
            <strong>${s.label}${s.isCurrent ? ' — you are here' : s.isNext ? ' — up next' : ''}</strong>
            ${h.showGrade && !s.terminal ? `<span class="grade">${s.grade}</span>` : ''}
            <ul>${s.unlocks.map((u) => `<li>${u}</li>`).join('')}</ul>
          </li>`).join('')}
      </ol>`,
  },

  setup: {
    body: (h) => `
      <h2>How your device is set up</h2>
      <p>Your ${h.platform.name} device uses ${h.platform.tool} so the two of you can see how
         things are going — together. It's not a spy tool. It's the hand on the seat, and it
         comes off a little more every year.</p>`,
  },

  closing: {
    body: (h) => `
      <h2>The finish line</h2>
      <p>At 18 it's all yours — no monitoring, no rules from us. Everything before then is just
         practice, so you're ready for it. We can't wait to watch you ride.</p>`,
  },
};
