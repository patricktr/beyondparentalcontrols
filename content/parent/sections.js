// Narration for the PARENT site (beyondparentalcontrols.com). Candid, practical.
// Shipped ONLY to the parent build — the kid build never imports this file,
// which keeps candid material off the kid's device.
//
// PARENT-ONLY-SENTINEL — tools/build.mjs asserts this marker never reaches apps/kid/lib.
//
// INTERIM: this is the array-shape port onto the new 9-grade spine. The full
// parent migration (evidence, threat model, the stack, per-grade teach/gate,
// conversation scripts, emergency playbook, sources) lands next.

export default [
  {
    body: (h) => `
      <h1>Graduated Internet Access Plan</h1>
      <p class="doc-meta">Parents' edition · ${h.approach.label} pace · ${h.platform.name} household</p>
      <p><strong>For:</strong> ${h.kid}, age ${h.cfg.age}.
         <strong>Goal:</strong> locked-down → full autonomy by 18, on a deliberate schedule
         instead of by attrition.</p>`,
  },

  {
    body: (h) => `
      <h2>The year-by-year plan</h2>
      <p>${h.current ? `<strong>Where ${h.kid} is now:</strong> ${h.current.grade} — “${h.current.title}”. ` : `${h.Cap(h.kid)} is just below the start of the map (it opens at Grade 4). `}${h.approach.tone}
         The through-line: access expands about one notch a year, and controls step
         <em>down</em> on a published schedule ${h.kid} can see.</p>
      <table>
        <thead><tr><th>Grade</th><th>Age</th><th>Stage</th></tr></thead>
        <tbody>
          ${h.stages.map((s) => `
            <tr class="${s.isCurrent ? 'here' : ''}">
              <td>${s.grade}</td><td>${s.age}</td><td>“${s.title}”</td>
            </tr>`).join('')}
        </tbody>
      </table>
      <p class="stub">[ Per-grade unlocks / stays-locked / teach / gate detail migrates next ]</p>`,
  },

  {
    body: (h) => `
      <h2>Setting it up on ${h.platform.name}</h2>
      <p>You'll use <strong>${h.platform.tool}</strong> with ${h.platform.account}, backstopped by a
         network-level filter (so the controls follow the device off your Wi-Fi) and a hard bedtime
         internet cutoff — the single most evidence-backed control in the plan.</p>
      ${h.cfg.platform === 'apple'
        ? `<p class="stub">[ Full Apple stack — Screen Time, Communication Safety, NextDNS, bypass-hole
             closing — migrates next ]</p>`
        : `<p class="stub">[ ${h.platform.name} setup steps need sourcing before they ship — placeholder,
             not fabricated guidance ]</p>`}`,
  },

  {
    // PARENT-ONLY. Never imported by the kid build.
    body: (h) => `
      <h2>What actually goes wrong (and what helps)</h2>
      <p>The threat model, ranked by likelihood × severity for ${h.kid}
         ${h.cfg.gender === 'boy' ? '(the sourced data here is boy-specific — sextortion and the manosphere pipeline lead)'
         : h.cfg.gender === 'girl' ? '(the boy-specific sourcing below still needs a girl-focused revision — image-based abuse and social pressure lead)'
         : '(cuts across both risk clusters)'}.</p>
      <p class="stub">[ Full threat model + conversation scripts + the 60-minute emergency playbook
         migrate next, from the sourced original ]</p>`,
  },

  {
    when: (cfg) => cfg.schoolDevice,
    body: (h) => `
      <h2>The school-issued device</h2>
      <p>Because ${h.kid} brings home a school-managed device, treat it as its own track: it's filtered
         by the school, not by you, and none of your network controls reach it. Your real levers are
         shrinking its role, physical placement (common rooms, charges outside the bedroom), and a
         device-level bedtime cutoff.</p>`,
  },

  {
    body: (h) => `
      <h2>The through-line</h2>
      <p>None of this is control for its own sake. It's a schedule for handing ${h.them} the keys on
         purpose, a bit at a time, so that by 18 ${h.they}${h.haveC} done all of it before — with you
         still in the room. The filters were never the point; ${h.they} ${h.be} the security system
         you were building.</p>`,
  },
];
