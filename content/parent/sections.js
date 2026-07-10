// Narration for the PARENT site (beyondparentalcontrols.com). Candid, practical,
// third-person about the child. Shipped ONLY to the parent build — the kid build
// never imports this file, which is what keeps candid material off the kid's
// device. Candid copy is left as placeholders in this sketch pending the
// public/private repo decision.
//
// PARENT-ONLY-SENTINEL — tools/build.mjs asserts this marker never reaches apps/kid/lib.

export default {
  intro: {
    body: (h) => `
      <h1>Graduated Internet Access Plan</h1>
      <p class="doc-meta">Parents' edition · ${h.approach.label} pace · ${h.platform.name} household</p>
      <p><strong>For:</strong> ${h.kid}, age ${h.cfg.age}.
         <strong>Goal:</strong> locked-down → full autonomy by 18, on a deliberate schedule
         instead of by attrition.</p>`,
  },

  roadmap: {
    body: (h) => `
      <h2>The roadmap</h2>
      <p><strong>Where ${h.kid} is now:</strong> ${h.current.label}. ${h.approach.tone}
         You can slide the whole schedule earlier or later, but every path still ends at
         full autonomy at 18 — the pace changes, not the destination.</p>
      <table>
        <thead><tr><th>Stage</th><th>Age</th><th>What unlocks</th></tr></thead>
        <tbody>
          ${h.stages.map((s) => `
            <tr class="${s.isCurrent ? 'here' : ''}">
              <td>${s.label}${h.showGrade && !s.terminal ? `<br><span class="grade">${s.grade}</span>` : ''}</td>
              <td>${s.terminal ? '18' : s.age}</td>
              <td>${s.unlocks.join('; ')}</td>
            </tr>`).join('')}
        </tbody>
      </table>`,
  },

  setup: {
    body: (h) => `
      <h2>Setting it up on ${h.platform.name}</h2>
      <p>You'll use <strong>${h.platform.tool}</strong> with ${h.platform.account}.</p>
      <p class="stub">[ ${h.platform.tool} step-by-step lives in a platform fragment — stubbed here ]</p>`,
  },

  risks: {
    // PARENT-ONLY. Never imported by the kid build.
    body: (h) => `
      <h2>What actually goes wrong (and what helps)</h2>
      <p>The risks worth getting ahead of for ${h.kid}
         ${h.cfg.gender === 'boy' ? 'skew one way'
         : h.cfg.gender === 'girl' ? 'skew another'
         : 'cut across both clusters'} — handled without stereotyping the individual kid.</p>
      <p class="stub">[ candid risk education — intentionally a placeholder in this sketch,
         pending the public/private repo call ]</p>`,
  },

  school: {
    when: (cfg) => cfg.schoolDevice,
    body: (h) => `
      <h2>The school-issued device</h2>
      <p>Because ${h.kid} brings home a school-managed device, treat it as its own track: it's
         filtered by the school, not by you, and the rules there are set elsewhere.</p>`,
  },

  closing: {
    body: (h) => `
      <h2>The through-line</h2>
      <p>None of this is control for its own sake. It's a schedule for handing ${h.them} the keys
         on purpose, a bit at a time, so that by 18 ${h.they}${h.haveC} done all of it before —
         with you still in the room.</p>`,
  },
};
