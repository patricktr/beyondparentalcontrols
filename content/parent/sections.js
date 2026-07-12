// Narration for the PARENT site (beyondparentalcontrols.com). Candid, practical,
// research-backed. Shipped ONLY to the parent build — the kid build never
// imports this file, which keeps candid material off the kid's device.
//
// PARENT-ONLY-SENTINEL — tools/build.mjs asserts this marker never reaches apps/kid/lib.
//
// Ported from the original parents' edition and since generalized: the 2026 threat
// model is gender-aware (boy/girl/lgbtq/neutral branches, each footnoted); device
// setup is fully built for Apple/Google/Amazon; hyper-local bits (the school
// Chromebook / Zscaler layer) are gated behind the school-device flag.

// Per-grade parent detail (Part 4 of the source), keyed by stage id.
const GRADES = {
  g4: {
    lead: 'The year of supervised everything. Goal: build the tell-an-adult reflex before independence, and bank hundreds of boring-normal internet hours with you nearby.',
    unlocks: [
      'Browsing on allowlist (Allowed Websites Only) in common rooms',
      'YouTube Kids “Older” preset or supervised Explore, co-viewed',
      'Minecraft (or similar), chat off, single-player or local co-op only',
    ],
    schoolUnlock: 'School-managed device at the kitchen table',
    locked: ['Open search; any algorithmic feed', 'YouTube main app solo; Shorts', 'ALL chat/DMs anywhere; Discord', 'Devices in bedrooms, ever'],
    teach: [
      'Private vs. personal information; passwords are secrets.',
      'Ads and scams: “free Robux” is always a trap; nothing free exists (Kaspersky logged 1.6M Roblox-themed attacks in a year — make it a game to spot them).',
      'Photos can be fake. Plant this seed years before deepfakes matter.',
      'The exit plan for disturbing content: <em>close it → come tell me → you are not in trouble.</em> Practice it; praise it lavishly the first real time.',
      '<strong>The first porn conversation happens THIS YEAR</strong> — calm, brief, no shame. Average first exposure is 12; 15% by 10. A kid this age needs: it exists, it’s made for adults, it can feel weird, none of it is your fault, closing-and-telling always wins.',
    ],
    gate: 'closes-and-tells on something weird at least once (or role-plays it convincingly); can explain why a stranger offering free Robux wants something; keeps passwords from friends.',
  },
  g5: {
    lead: 'The year of solo-but-visible. Goal: real searching and research skills, with the filter catching the potholes.',
    unlocks: [
      'Allowlist → category filter (“Limit Adult Websites” + network filter); open SafeSearch-enforced search',
      'Supervised YouTube “Explore” solo (no comments — supervised accounts can’t)',
      'In-game chat (e.g. Minecraft) with in-person friends only',
      'Maybe: smartwatch or basic phone (Gabb-class) for logistics',
    ],
    locked: ['Algorithmic feeds; short-form video', 'DMs; group chats', 'Discord (“13+ anyway” is your easy no)', 'Smartphone'],
    teach: [
      '<strong>Digital footprint</strong> before anything social exists: screenshots are forever; the internet has no eraser.',
      'First verification skills: MediaSmarts’ “Break the Fake” four moves (check the source, find the original, check other coverage, ask before sharing).',
      '<strong>Grooming red flags, explicitly</strong> — the four tells are <em>gifts, flattery, secrets, and “let’s chat somewhere private.”</em> The platform-move request is THE red flag (65% of groomed kids get asked to migrate apps). House rule with no exceptions: <strong>anyone who asks to move to a different app gets shown to a parent.</strong> Frame it as scam-detection, not fear — kids this age love being deputized.',
      'The uh-oh feeling: act on body signals without needing proof. Surprises are fine; secrets from parents are not.',
    ],
    gate: 'demonstrates Break-the-Fake on a real example; flags a platform-move or gift offer (real or drilled); can explain footprint permanence in their own words.',
  },
  g6: {
    lead: 'The year of messaging real people. Goal: private communication with known humans, still zero engagement-optimized feeds. This sequencing is the plan’s core bet — feeds are where porn arrives, where sextortion recon happens, and where the 23-minute manosphere pipeline lives.',
    unlocks: [
      'Personal email (child account, you hold recovery)',
      'iMessage with Communication Limits (approved contacts)',
      'Group chats with known kids (expect the first drama — it’s curriculum)',
      'Supervised YouTube “Explore More” late in the year if earned',
    ],
    locked: ['Social media of any kind', 'Snapchat, TikTok, Instagram — and say why, not just no', 'Discord', 'Short-form feeds (incl. YouTube Shorts — block the domain if needed)'],
    teach: [
      'Group-chat citizenship: screenshots travel; what “everyone will see this” means; being the kid who says “not cool” (upstander skills).',
      '<strong>Sextortion 101</strong> (age-appropriate v1): people online pretend to be kids; anyone who asks for photos of your body is committing a crime against you; telling me = you win, every time.',
      'Nudes and the law, plainly: even receiving/forwarding can be a legal problem for minors; deleting-and-telling beats panicking.',
      '<strong>Algorithm literacy 101:</strong> why feeds show what they show (engagement, not truth or wellbeing).',
      'Begin the smartphone conversation explicitly — target is <strong>end of 8th grade</strong> (the Wait Until 8th line).',
    ],
    gate: 'handles a group-chat conflict without disaster (or debriefs one honestly); recites sextortion rule #1 unprompted (“I’m never in trouble for telling”); email inbox shows no mystery signups.',
  },
  g7: {
    lead: 'The year of the full drill. About to cross the age-13 platform floor and enter sextortion’s target demographic. Deliberately heavy on offense (skills) while access barely moves — explain that: <em>skills unlock access.</em>',
    unlocks: [
      'Multiplayer voice with in-person friends (party chat, not open lobbies)',
      'More YouTube (supervised, watch history reviewed together sometimes)',
      'Maybe: hand-me-down smartphone WITHOUT social apps, if logistics demand',
    ],
    locked: ['Open-lobby voice; Discord until a real friend group needs it', 'TikTok/IG/Snap — one more year', 'App Store above 13+ tier; AI companion apps (unsafe under 18)'],
    teach: [
      '<strong>The full sextortion drill</strong> — the single highest-leverage hour in this plan. Tabletop it: “It’s 11pm, you sent something, they’re threatening to send it to everyone you follow — walk me through your next five minutes.” Cover: never pay (it doesn’t stop), never delete (evidence), screenshot, block, tell me, Take It Down, CyberTipline — and that this exact script targets boys this age 50,000+ times a year.',
      '<strong>Prebunking, formally:</strong> watch the Cambridge/Jigsaw inoculation videos together (5 manipulation techniques). Then lateral reading (Stanford Civic Online Reasoning). Booster doses matter — make “what’s this clip trying to make you feel?” a running family game.',
      'Name the manosphere on-ramp <em>before the feeds arrive</em>: “There’s a genre that tells you someone stole something from you, sold by guys monetizing your anger — researchers watch it hit new accounts in 23 minutes.” Boys respond better to “you’re being farmed” than “that’s bad.”',
    ],
    gate: 'passes the sextortion tabletop cold; can name three manipulation techniques in a real video; a month of watch history you’d both sign off on.',
  },
  g8: {
    lead: 'The year of 13 — deliberately, not automatically. 13 is a data-privacy artifact (COPPA), not a readiness certificate. Decide app-by-app against the gates, not the birthday.',
    unlocks: [
      'Smartphone by end of 8th (the Wait Until 8th line) — child account, 13+ App Store cap',
      '<strong>One</strong> social platform, teen account, parental supervision linked: Instagram Teen Account OR TikTok with Family Pairing — one only, their choice',
      'Discord IF a real-life friend group uses it: teen-by-default, DMs from non-friends off, server list reviewed together',
      'Snapchat only if the social graph demands it — Family Center linked; have the “screenshots exist, nothing disappears” talk the same day',
    ],
    locked: ['16+/18+ app tiers', 'The other platforms (sequencing beats simultaneity)', 'Public/discovery servers; NSFW-permitting spaces', 'AI companions (revisit at 16+ if ever)'],
    teach: [
      '<strong>Feed hygiene as a skill:</strong> long-press → Not Interested; watch-history reset when the feed sours; “one lingering view breeds a pipeline — the algorithm is doing this TO you, and you can steer it.”',
      'Deepfake/nudify reality: making one = federal crime + expulsion pattern; being targeted = not your fault, Take It Down works on AI images too, tell me immediately.',
      'Parasocial literacy: influencers are businesses; the “relationship” is the product.',
      'Sextortion refresher #1 (now IN the demographic and ON the platforms where recon happens).',
      'Weekly 15-minute sit-down: look at their feed together with curiosity, not audit energy. This is active mediation — the intervention with the best evidence base in the field.',
    ],
    gate: 'three months of one-platform use without blowups; initiates at least one “look at this weird/sketchy thing” conversation (proof the channel works); phone charges outside the bedroom without being policed.',
  },
  g9: {
    lead: 'The year controls start visibly falling away. They should feel the difference on day one of high school — that’s the deal paying off, and what the reactance research says to do before rules start backfiring.',
    unlocks: ['Second/third social platform with teen defaults', 'Discord normalized (friend servers)', 'App Store 16+ tier', 'Later bedtime cutoff (the cutoff itself stays — sleep is the hill worth dying on)'],
    lockedLabel: 'Steps down',
    locked: ['Web filter narrows to porn/malware/scam categories only', 'App-by-app time limits → replaced by their self-set limits (you can see them; they set them)', 'Bark-class alerting, if you ever used it, sunsets by agreement', 'Contact approval relaxes'],
    teach: [
      '<strong>Porn realism v2</strong> (they’ve almost certainly seen it — 73% by 17): a media-literacy lesson, not a morality one. “Porn is choreography, not documentation” — scripted, edited, skewed. What it teaches about consent and bodies is wrong the way action movies are wrong about driving. Short; repeated; the AAP note that authoritarian shaming <em>increases</em> use is worth remembering.',
      'Online relationship red flags they can self-diagnose: intensity, isolation, secrecy, age gaps, “don’t tell your parents” — the same four tells from grade 5, now applied to romance.',
      'Money: crypto scams, sports-betting funnels aimed at teens, account-theft resale economics.',
      'They run their own privacy-settings audit on every platform and walk YOU through it (teaching = retention).',
    ],
    gate: 'self-set limits roughly hold for a semester without enforcement theater; at least one voluntarily-surfaced sketchy thing; grades/sleep/offline life intact.',
  },
  g10: {
    lead: 'The year you mostly get out of the way. The rules-backfire inflection lands ~15.7; the autonomy research and Australia’s legal line both point at 16. Ride the step-down TO the line, don’t hold past it.',
    unlocks: ['Effectively open browsing (porn/malware DNS categories remain — frame as household hygiene, applies to guests too)', 'Their own account trajectory discussed openly (child account converts at their pace toward 18)', 'Reverse mentoring: they help configure a younger sibling’s grade-4/5 stack — best retention exercise there is'],
    lockedLabel: 'Steps down',
    locked: ['All app time limits; all content-tier caps below 18+', 'Screen-time restrictions → dashboard-only (they see their own data; so can you, mutually, if they agree)', 'Your visibility into logs, except the mutually-agreed dashboard'],
    teach: [
      'Civic online reasoning at full strength (AI-content detection, source triangulation during a live news event — do one together).',
      'Digital footprint with college/job stakes now real.',
      'Sextortion refresher #2 (16–17 is still peak target age; the no-freakout pledge gets re-said, verbatim, even though it’s awkward).',
    ],
    gate: 'they catch YOU on something (a scam text, a fake headline) — the reversal is the graduation signal.',
  },
  g11: {
    lead: 'Essentially open internet. DNS narrows to security-only (malware/phishing — the same protection you give your own devices). Porn category: their call, discussed honestly. No monitoring. What remains: the bedtime router rule if sleep demands it, family dinner tech-talk culture, and the standing offer.',
    teach: ['Credential hygiene as adulthood prep — password manager, 2FA everywhere, freeze their credit (identity theft of minors is boring and real), romance/job scam patterns aimed at college kids.'],
  },
  g12: {
    lead: 'Full access, zero controls, formal exit interview (make it dinner, not a meeting):',
    outro: [
      'They own every account, every recovery method, the password manager, 2FA keys.',
      'Credit frozen at all three bureaus; they know how to thaw it.',
      'They know Take It Down, CyberTipline, and 988 exist — <strong>for their friends as much as themselves</strong> (peers disclose to peers first; make them the competent first responder).',
      'The last conversation is the first one, closed: <em>“You’ve seen how the whole thing works. The filters were never the point. You were the security system we were building. Call me before you call anyone when something goes wrong — that part never expires.”</em>',
    ],
  },
};

const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

// Layer 2 device-setup steps, per platform. Sourced from each vendor's current
// (2025–26) parental-control tooling — no fabrication; unknown platforms would
// fall back to an empty layer.
const DEVICE_LAYER = {
  apple: [
    'Configure <strong>Screen Time</strong> from Family Sharing, then verify from the kid’s device. Web Content → Allowed Websites Only for grade 4; “Limit Adult Websites” from grade 5–6.',
    '<strong>Communication Limits</strong> (approved contacts) + <strong>Communication Safety</strong> on (on-device nude-image blurring; can’t be disabled under 13).',
    '<strong>Ask to Buy</strong> + <strong>Don’t Allow Deleting Apps</strong> + App Store cap at the kid’s age tier. Lock the known bypasses (time-zone trick, Siri web search, YouTube link previews).',
    '<strong>Reliability warning:</strong> Screen Time has a long history of silently failing — treat it as <em>policy signal, not enforcement</em>; the network layer is your backstop.',
  ],
  google: [
    'Install the <strong>Family Link</strong> app (yours) and sign a <strong>supervised child Google Account</strong> (true birthdate) into the device. Full supervision works on <strong>Android 6+ and Chromebooks (Chrome OS 71+)</strong> only — not iPhones/iPads or Windows/Mac.',
    '<strong>Require approval for every app install</strong> (Play downloads and purchases); set daily <em>and</em> per-app time limits, <strong>Downtime/bedtime</strong>, and a <strong>School Time</strong> schedule.',
    'Enforce <strong>SafeSearch</strong> and manage <strong>Chrome site filtering</strong> — “only approved sites” (allowlist) for grade 4, then block mature/specific sites from grade 5–6 — plus the <strong>YouTube supervised experience</strong> (Explore → Explore More → Most of YouTube) and <strong>approved contacts</strong> for calls/texts.',
    '<strong>Removal reality:</strong> under 13 the child can’t leave supervision; at 13 the account is offered the choice; 13–17 need your approval (a parent access code) to switch it off. A VPN can still slip local filters, so lock app installs and remove VPN apps — the network layer is your backstop.',
  ],
  amazon: [
    'Fire tablets run <strong>Fire OS</strong> (a fork of Android) with the <strong>Amazon Appstore</strong> — <strong>Google Family Link and Google Play don’t apply</strong>. The native tool is <strong>Amazon Kids</strong>, free and built in.',
    'Create a <strong>child profile</strong> (Settings → Profiles &amp; Family Library, or the <strong>Parent Dashboard</strong> at parents.amazon.com) with a true birthdate — the child gets the walled Amazon Kids experience, not the adult tablet.',
    '<strong>Web browsing</strong> has three modes: <strong>off</strong>, <strong>“Hand-Selected Websites &amp; Videos”</strong> (an Amazon-curated allowlist — the grade-4 setting), or <strong>“Filtered Websites &amp; Videos”</strong> (broader but filtered, with the option to block specific sites — grade 5–6).',
    'Set <strong>daily time limits</strong> per day, a <strong>bedtime</strong>, per-activity limits (apps/reading/videos), and <strong>Learn First</strong> goals (educational activity before entertainment); PIN-protect purchases. <strong>Amazon Kids+</strong> (optional) adds curated, no-in-app-purchase content, and is Fire-only as of 2025.',
  ],
};

const gradeBlock = (h, s) => {
  const g = GRADES[s.id];
  const isLast = h.stages[h.stages.length - 1].id === s.id;
  const cls = ['stage', s.isCurrent && 'now', s.age === 13 && 'floor', isLast && 'handoff']
    .filter(Boolean).join(' ');
  const heading = `${s.grade} · age ${s.age} — “${s.title}”`;
  const unlocks = [...(g.unlocks || []), ...(g.schoolUnlock && h.schoolDevice ? [g.schoolUnlock] : [])];
  const items = (arr) => (arr || []).map((i) => `<li>${i}</li>`).join('');

  let year;
  if (s.isCurrent) {
    const grid = (unlocks.length || g.locked)
      ? `<div class="unlock-grid">
          <div><div class="col-label u">Unlocks</div><ul class="u-list">${items(unlocks)}</ul></div>
          <div><div class="col-label l">${g.lockedLabel || 'Stays locked'}</div><ul class="l-list">${items(g.locked)}</ul></div>
        </div>`
      : '';
    const teach = g.teach ? `<div class="teach-box"><strong>Teach this year:</strong>${list(g.teach)}</div>` : '';
    const outro = g.outro ? list(g.outro) : '';
    const gate = g.gate ? `<p class="gate"><strong>Gate to the next stage:</strong> ${h.kid} ${g.gate}</p>` : '';
    year = `<div class="year">
        <div class="year-head"><h3>${heading}</h3><span class="here-pill">you are here</span></div>
        <p>${g.lead}</p>
        ${grid}${teach}${outro}${gate}
      </div>`;
  } else if (isLast) {
    const outro = g.outro ? list(g.outro) : '';
    year = `<div class="year">
        <h3>${heading}</h3>
        <p>${g.lead}</p>
        ${outro}
      </div>`;
  } else {
    const lockLabel = g.lockedLabel
      ? `<strong class="s">${g.lockedLabel}:</strong>`
      : '<strong class="l">Locked:</strong>';
    const runline = (unlocks.length || g.locked)
      ? `<div class="runline"><strong class="u">Unlocks:</strong> ${unlocks.join(' · ')} · ${lockLabel} ${(g.locked || []).join(' · ')}</div>`
      : '';
    year = `<div class="year">
        <h3>${heading}</h3>
        <p class="lead">${g.lead}</p>
        ${runline}
      </div>`;
  }

  return `<div class="${cls}"><span class="age">${s.age}</span><span class="node"></span>${year}</div>`;
};

export default [
  {
    body: (h) => `
      <p class="eyebrow config-summary">Parents' edition · ${h.platforms.map((p) => p.name).join(' + ')} · ${h.approach.label} · ${h.they}/${h.them} · age ${h.cfg.age}</p>
      <h1 class="doc-title">Graduated Internet Access Plan</h1>
      <p class="doc-meta"><strong>Parents' edition.</strong> The full, candid plan. A kid-facing
        version lives on the kid site, safe to hand over.</p>
      <p><strong>For:</strong> ${h.platforms.map((p) => p.name).join(' + ')} household, ${h.kid} at age ${h.cfg.age}${h.schoolDevice ? ', a school-issued device that comes home' : ''}. Younger siblings age into each stage.
        <strong>Goal:</strong> locked-down → full autonomy by 18, on a deliberate schedule instead of by attrition.
        <strong>Built from:</strong> ~70 sources including peer-reviewed research, NCMEC/FBI data, and
        AAP/APA/eSafety guidance (footnotes at the end).</p>`,
  },

  {
    body: (h) => `
      <p class="eyebrow">Section 1</p>
      <h2>What the evidence actually says</h2>
      <p>Five findings should drive the whole plan:</p>
      <ol class="evidence">
        <li><strong>Filters barely work as a shield — but that’s not why you deploy them.</strong>
          The best study available found parental filtering explains <strong>less than 0.5% of the
          variance</strong> in whether a teen encounters sexual material; a preregistered replication
          found no protective effect at all${h.cite({ text: 'Przybylski &amp; Nash, “Internet Filtering and Adolescent Exposure to Online Sexual Material,” <em>Cyberpsychology, Behavior &amp; Social Networking</em> (2018)', url: 'https://www.oii.ox.ac.uk/parental-controls-ineffective-at-preventing-teens-from-seeing-pornography-new-research-finds/' })}. Filters still earn their keep
          in elementary school: they cut <em>accidental</em> exposure (the majority of first
          exposures), buy you years to teach, and signal family norms. Deploy them; never mistake them
          for the strategy.</li>
        <li><strong>Talking beats restricting — for harm.</strong> A 52-study meta-analysis
          (N=74,159): restrictive rules reduce screen <em>time</em>; active mediation (discussing,
          co-using, coaching) reduces <em>harm</em>${h.cite({ text: 'Chen &amp; Shi, “Reducing Harm From Media: A Meta-Analysis of Parental Mediation,” <em>Journalism &amp; Mass Communication Quarterly</em> (2019)', url: 'https://scholars.hkbu.edu.hk/en/publications/reducing-harm-from-media-a-meta-analysis-of-parental-mediation-2/' })}. Tools as a supplement,
          conversation as the core, rules co-created and relaxed with age.</li>
        <li><strong>Rules have an expiration date: ~age 12 they protect, ~age 16 they backfire.</strong>
          Strict internet rules predicted <em>less</em> problematic social-media use under ~12.3 and <em>more</em>
          over ~15.7${h.cite({ text: 'Geurts et al., “Parental Internet-Specific Rules and the Onset of Adolescents’ Problematic Social Media Use,” <em>JMIR</em> (2025)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12445780/' })}. Your step-down schedule is not generosity — it’s the mechanism.</li>
        <li><strong>The disclosure channel is your single most valuable asset.</strong> 40% of kids
          <em>said</em> they’d tell a caregiver if an adult sent them nudes; <strong>only 10% of those
          it happened to did</strong>${h.cite({ text: 'Thorn, “Research Insights: Disclosure &amp; Reporting” (2022)', url: 'https://www.thorn.org/research/disclosure-and-reporting/' })}. Reasons for silence: embarrassment, fear of trouble,
          fear of losing devices. Nearly every serious harm below is survivable <em>if the kid tells
          you in hour one</em>. The evidence-backed move is the pre-commitment, said out loud and honored:
          <blockquote>“You will never be in trouble for telling me something that happened online, and I
          will never respond by taking your devices away. Even if you broke a rule first.”</blockquote>
          Never punish a disclosure with device removal — that single reaction teaches kids to handle
          the next crisis alone.</li>
        <li><strong>Covert monitoring backfires; transparent scaffolding doesn’t.</strong> Teens
          experience surveillance apps as overly restrictive and privacy-invasive: in an analysis of 736
          kids’ reviews of 37 parental-control apps, 76% rated them one star, describing them as
          privacy-violating, overly controlling, and damaging to the parent-child relationship${h.cite({ text: 'Ghosh et al., “Safety vs. Surveillance: What Children Have to Say about Mobile Apps for Parental Control,” ACM CHI (2018)', url: 'https://epublications.marquette.edu/mscs_fac/618/' })}. Everything here is done in the open — the kid knows what’s filtered, what’s visible,
          and the date it steps down. The driving-permit framing (“I’m in the car while you have your
          permit”) is the one that lands.</li>
      </ol>`,
  },

  {
    // PARENT-ONLY threat model — gender-aware. Shared threats stay shared; where the
    // data diverges by sex it branches (showBoy/showGirl), and `other` shows both.
    // Every specific figure carries a footnote via h.cite() (see render.js).
    body: (h) => {
      const g = h.cfg.gender;
      const showBoy = g === 'boy' || g === 'neutral' || g === 'lgbtq';
      const showGirl = g === 'girl' || g === 'neutral' || g === 'lgbtq';
      const showLgbtq = g === 'lgbtq';
      const both = showBoy && showGirl; // neutral & lgbtq both show the two sex-patterns
      const lead = (s) => (both ? `<strong>${s}</strong> ` : '');
      return `
      <p class="eyebrow">Section 2</p>
      <h2>The 2026 threat model</h2>
      <p class="note">Every threat below can reach any kid — but the <em>mix</em> skews by sex and identity, and
        where the data diverges this plan shows you ${h.kid}’s side of it.
        ${showLgbtq ? 'LGBTQ+ kids carry a distinct layer of targeting and coercion, and because a birth sex isn’t assumed here, the boy- and girl-pattern data are shown too.'
          : both ? 'Since you didn’t specify a sex, both patterns are shown: boys are hit hardest by financial sextortion and manosphere content; girls by coercive image abuse and the body-image/mental-health pipeline.'
          : showGirl ? 'For girls, coercion, image-based abuse, and the body-image pipeline carry the most weight.'
          : 'For boys, financial sextortion and the manosphere pipeline dominate.'}</p>
      ${showLgbtq ? `
      <h3>The LGBTQ+ layer — targeting, coercion, and a lifeline you shouldn’t cut</h3>
      <p><strong>Start here, because the intuitive move is the wrong one.</strong> For an LGBTQ+ kid the
        internet is disproportionately where safety lives: in a 2025 study <strong>44% felt very safe in
        online spaces versus just 9% in person</strong>${h.cite({ text: 'Hopelab &amp; Born This Way Foundation, “‘Without It, I Wouldn’t Be Here Today’” (2025)', url: 'https://www.prnewswire.com/news-releases/new-research-from-hopelab-and-born-this-way-foundation-reveals-online-spaces-provide-a-lifeline-to-lgbtq-young-people-302398923.html' })},
        and <strong>68% reach LGBTQ-affirming spaces online</strong> — often more than they can at home or
        school${h.cite({ text: 'The Trevor Project, “2024 U.S. National Survey on the Mental Health of LGBTQ+ Young People” (2024)', url: 'https://www.thetrevorproject.org/survey-2024/' })}.
        They also know it’s fragile: <strong>76% worry that platform or government restrictions will cut that
        content off</strong>${h.cite({ text: 'Hopelab &amp; Born This Way Foundation, “‘Without It, I Wouldn’t Be Here Today’” (2025)', url: 'https://www.prnewswire.com/news-releases/new-research-from-hopelab-and-born-this-way-foundation-reveals-online-spaces-provide-a-lifeline-to-lgbtq-young-people-302398923.html' })}.
        A blunt ban doesn’t read as protection here — it reads as losing the one room where they can breathe.</p>
      <p>That lifeline sits beside a heavier threat load. LGBTQ+ minors are <strong>2–3× more likely to face
        unwanted or risky online interactions</strong>${h.cite({ text: 'Thorn, “LGBTQ+ Minors are 3X More Likely to Experience Unwanted and Risky Online Interactions” (2023)', url: 'https://www.thorn.org/blog/new-research-from-thorn-lgbtq-minors-are-3x-more-likely-to-experience-unwanted-and-risky-online-interactions/' })},
        and sextortion reaches them at <strong>36% versus 18%</strong> — with offenders likelier to actually
        carry out the threat, and to weaponize outing and image-distribution rather than demand
        cash${h.cite({ text: 'Thorn, “Sexual Extortion &amp; Young People” (2025)', url: 'https://www.thorn.org/research/library/sexual-extortion-young-people/' })};
        for a closeted kid, “I’ll tell everyone” is uniquely coercive. There’s an ambient layer too: one
        analysis counted <strong>1.7M+ tweets tying LGBTQ+ terms to “groomer”/“predator” slurs, up
        119%</strong> in a year${h.cite({ text: 'Center for Countering Digital Hate, “Toxic Twitter: anti-LGBTQ+ hate” (2023)', url: 'https://counterhate.com/research/toxic-twitter-anti-lgbtq/' })}.
        And the disparities are real: <strong>46% of trans and nonbinary youth seriously considered suicide in
        the past year, versus 30% of cisgender LGBQ peers</strong>${h.cite({ text: 'The Trevor Project, “2024 U.S. National Survey on the Mental Health of LGBTQ+ Young People” (2024)', url: 'https://www.thetrevorproject.org/survey-2024/' })},
        and body dissatisfaction runs up to <strong>~93% among trans youth</strong>${h.cite({ text: 'The Trevor Project, “LGBTQ Youth and Body Dissatisfaction” (2023)', url: 'https://www.thetrevorproject.org/research-briefs/lgbtq-youth-and-body-dissatisfaction-jan-2023/' })}.</p>
      <p><strong>So the parenting move is additive, not subtractive:</strong> protect the safe spaces and keep
        the disclosure channel wide open. The affirming community and the coercion risk often ride the same
        apps, and a kid who fears being outed <em>by you</em> won’t come to you first. Safer spaces plus an
        honest, no-punishment conversation beat a blunt ban — which this population experiences as a threat in
        its own right.</p>` : ''}

      <h3>1. Sextortion — the one that kills</h3>
      <p>The fastest-growing serious threat: NCMEC reports climbed from 10,731 in 2022 to <strong>over
        50,000 in 2025 (137 a day)</strong>${h.cite({ text: 'NCMEC, “Over 100 Reports Received Daily in 2025” (2026)', url: 'https://www.ncmec.org/blog/2026/ncmec-releases-new-sextortion-data-2025' })}.
        No filter touches it — but a pre-briefed kid defuses it, because the threat collapses the moment they
        stop engaging and tell an adult.</p>
      ${showBoy ? `<p>${lead('For boys:')}The pattern is <strong>financial</strong>, and boys are nearly the whole
        target — <strong>90% of financial-sextortion victims are boys 14–17</strong>${h.cite({ text: 'Thorn, “Trends in Financial Sextortion” (2024) — analysis of NCMEC CyberTipline data', url: 'https://www.thorn.org/research/library/financial-sextortion/' })}.
        The script is industrialized: a fake attractive-girl account DMs → fast flirtation → move to Snapchat →
        reciprocal nude → instant pivot to a screenshot of the follower list → payment demands. At least
        <strong>36 American teen boys have died by suicide</strong> since 2021${h.cite({ text: 'NCMEC, “2024 in Numbers” (2025)', url: 'https://www.missingkids.org/blog/2025/ncmec-releases-new-data-2024-in-numbers' })},
        in documented cases within hours of first contact. It’s winnable: <strong>94% of public reports</strong>
        (where the reporter is known) come from the victim or a parent${h.cite({ text: 'NCMEC, “Over 100 Reports Received Daily in 2025” (2026)', url: 'https://www.ncmec.org/blog/2026/ncmec-releases-new-sextortion-data-2025' })}.</p>` : ''}
      ${showGirl ? `<p>${lead('For girls:')}The sextortion pattern is more often <strong>coercive than financial</strong> —
        the offender wants more images, sexual compliance, or humiliation rather than cash, and is likelier to be
        someone she knows. Girls carry the surrounding image abuse: US women recall <strong>image-based sexual abuse
        before 18 at 16.3% vs 5.4% for men</strong>, and unwanted online sexual solicitation at <strong>34.6% vs
        9.2%</strong>${h.cite({ text: 'Finkelhor, Turner &amp; Colburn, “Prevalence of Online Sexual Offenses Against Children in the US,” <em>JAMA Network Open</em> (2022)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9568794/' })}.
        Same defense: no shame, no blame, tell an adult fast.</p>` : ''}

      <h3>2. Pornography — arrives via social feeds, not porn sites</h3>
      <p>Average first exposure is <strong>age 12</strong>; 15% by age 10; a majority accidental${h.cite({ text: 'Common Sense Media, “Teens and Pornography” (2023)', url: 'https://www.commonsensemedia.org/press-releases/new-report-reveals-truths-about-how-teens-engage-with-pornography' })}.
        The most common source in current UK data is <strong>X/Twitter (45%), ahead of dedicated porn sites
        (35%)</strong>, and <strong>58%</strong> of exposed children had seen porn depicting strangulation${h.cite({ text: 'Children’s Commissioner for England, “‘Sex is kind of broken now’” (2025)', url: 'https://www.childrenscommissioner.gov.uk/news-and-blogs/press-notice-children-see-violent-pornography-by-accident-via-social-media-and-as-young-as-six-new-research-from-the-childrens-commissioner-reveals/' })}.
        So <strong>delaying algorithmic social feeds IS your porn filter</strong> — assume exposure around 10–12 and pre-teach the response.</p>

      <h3>3. The algorithm’s pull — ${both ? 'radicalization and the body-image spiral' : showBoy ? 'radicalization, passive and fast' : 'the body-image and self-harm spiral'}</h3>
      <p>The harm here isn’t a stranger — it’s the recommendation engine, which reads a new account’s apparent sex
        within minutes and starts feeding whatever keeps that demographic scrolling.</p>
      ${showBoy ? `<p>${lead('For boys:')}Fresh teen-boy accounts were fed <strong>toxic content within 23 minutes</strong>,
        and by the end of the test <strong>76% (TikTok) / 78% (YouTube Shorts)</strong> of recommendations were
        toxic${h.cite({ text: 'Baker, Ging &amp; Andreasen, “Recommending Toxicity,” DCU Anti-Bullying Centre (2024)', url: 'https://www.dcu.ie/antibullyingcentre/recommending-toxicity-summary-report' })};
        a separate study watched misogynistic recommendations climb from <strong>13% to 56% in five days</strong>${h.cite({ text: 'UCL, with the University of Kent &amp; ASCL, “Safer Scrolling” (2024)', url: 'https://www.ucl.ac.uk/news/2024/feb/social-media-algorithms-amplify-misogynistic-content-teens' })}.
        It works: <strong>63% of young men</strong> say they watch “masculinity influencers”${h.cite({ text: 'Movember Institute, “Young Men’s Health in a Digital World” (2025)', url: 'https://ex.movember.com/movember-institute/masculinities-report' })}.
        Defenses with evidence: delaying feeds, co-viewing, feed-hygiene, and prebunking (“who profits from you angry?”) — not keyword filters.</p>` : ''}
      ${showGirl ? `<p>${lead('For girls:')}The same engine points a different way. A new girl-coded account was served
        <strong>suicide content within 2.6 minutes and eating-disorder content within 8</strong>, and a “vulnerable”
        girl-coded account got <strong>12× more self-harm/suicide videos</strong>${h.cite({ text: 'Center for Countering Digital Hate, “Deadly by Design” (2022) — controlled bot experiment', url: 'https://counterhate.com/research/deadly-by-design/' })};
        after 5–6 hours on TikTok, <strong>nearly 1 in 2</strong> videos served to mental-health-signalling accounts were
        harmful${h.cite({ text: 'Amnesty International, “Driven into the Darkness” (2023)', url: 'https://www.amnesty.org/en/latest/news/2023/11/tiktok-risks-pushing-children-towards-harmful-content/' })}.
        The platform’s own research found Instagram makes body image worse for <strong>1 in 3 teen girls</strong>${h.cite({ text: 'Meta internal research (2021), disclosed via the “Facebook Files”', url: 'https://metasinternalresearch.org/' })},
        and <strong>80% of girls have used a filter or editing app to change their looks by age 13</strong>${h.cite({ text: 'Dove Self-Esteem Project, “The Selfie Talk” (2021) — Canada, n≈503', url: 'https://www.newswire.ca/news-releases/it-s-time-to-have-the-selfie-talk-new-dove-self-esteem-project-research-finds-80-of-canadian-girls-are-using-photo-editing-apps-by-the-age-of-13-866468860.html' })}.
        Same defenses — plus following real-body accounts on purpose and naming the filter game out loud.</p>` : ''}

      <h3>4. The grooming funnel — the control point is the platform move</h3>
      <p><strong>40%</strong> of 9–17s have received a cold nude solicitation and <strong>65% have been asked to move
        from a public or game chat to a private platform</strong>${h.cite({ text: 'Thorn, “Online Grooming” (2022)', url: 'https://www.thorn.org/press-releases/online-grooming-report-young-peoples-online-encounters-growing-riskier/' })} —
        that migration moment is the teachable choke point: gifts, flattery, secrecy, and platform-move requests are the
        four red flags a 10-year-old can memorize.${showGirl ? ` Girls are groomed by adults at roughly <strong>3.5× the rate of boys (8.4% vs 2.4%)</strong>${h.cite({ text: 'Finkelhor, Turner &amp; Colburn, <em>JAMA Network Open</em> (2022)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9568794/' })}.` : ''}
        At the extreme, the FBI’s 2025 “764” alert documents violent online networks that target 10–17-year-olds across
        social media, gaming, and messaging apps${h.cite({ text: 'FBI / IC3, Public Service Announcement I-030625-PSA (2025)', url: 'https://www.ic3.gov/PSA/2025/PSA250306' })}.</p>

      <h3>5. AI-era risks</h3>
      ${list([
        `<strong>AI companions:</strong> 72% of US teens have used one; Common Sense’s assessment is <em>not safe under 18</em>${h.cite({ text: 'Common Sense Media, “Talk, Trust, and Trade-Offs” (2025)', url: 'https://www.commonsensemedia.org/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds' })}. Treat companion AI like strangers-in-DMs.`,
        `<strong>Nudify/deepfake harassment:</strong> 1 in 17 teens has had deepfake nudes made of them${h.cite({ text: 'Thorn, “Deepfake Nudes &amp; Young People” (2025)', url: 'https://www.thorn.org/research/library/deepfake-nudes-and-young-people/' })}, and <strong>98% of the AI abuse imagery</strong> the IWF assessed depicted girls${h.cite({ text: 'Internet Watch Foundation, “AI-generated child sexual abuse,” Annual Data &amp; Insights (2024)', url: 'https://www.iwf.org.uk/annual-data-insights-report-2024/data-and-insights/ai-generated-child-sexual-abuse/' })}. Making one is now a federal crime — the TAKE IT DOWN Act requires 48-hour removal${h.cite({ text: 'TAKE IT DOWN Act, Pub. L. 119-12 / S.146 (2025)', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/146' })}; NCMEC’s <strong>Take It Down</strong> tool pulls real and AI images.`,
        `<strong>Scams:</strong> 1.6M attacks disguised as Roblox files in 2024${h.cite({ text: 'Kaspersky, “1.6 million cyberattacks on Roblox players detected in 2024” (2025)', url: 'https://me-en.kaspersky.com/about/press-releases/loading-cyberthreats-16-million-cyberattacks-on-roblox-players-detected-in-2024' })}. “Nothing free exists” is a 4th-grade lesson.`,
      ])}

      <h3>6. Background rot: sleep, harassment, mental health</h3>
      <p>The one harm with near-unanimous expert consensus — <strong>sleep loss</strong> — is solved by boring logistics
        (a bedtime cutoff), not software. The rest skews by sex:</p>
      ${showGirl ? `<p>${lead('For girls:')}The mental-health gap is stark — <strong>52.6% of high-school girls report
        persistent sadness or hopelessness vs 27.7% of boys</strong>, and girls attempt suicide at twice the rate
        (12.6% vs 6.4%)${h.cite({ text: 'CDC, Youth Risk Behavior Survey 2023, <em>MMWR</em> (2024)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11559681/' })}.
        Cyberbullying is more relational and lands harder: <strong>54% of girls 15–17 have been cyberbullied vs 44% of
        boys</strong>, and girls are twice as likely to be targeted for their gender (14% vs 6%)${h.cite({ text: 'Pew Research Center, “Teens and Cyberbullying 2022” (2022)', url: 'https://www.pewresearch.org/internet/2022/12/15/teens-and-cyberbullying-2022/' })}.</p>` : ''}
      ${showBoy ? `<p>${lead('For boys:')}The load concentrates in gaming spaces. <strong>75% of young multiplayer gamers
        (10–17) report harassment</strong>${h.cite({ text: 'ADL, “Hate is No Game” (2023 data, published 2024)', url: 'https://www.adl.org/resources/press-release/three-quarters-young-people-experienced-harassment-online-gaming-2023-new' })},
        and boys are called offensive names far more than girls (48% vs 32%)${h.cite({ text: 'Pew Research Center, “Teens and Video Games Today” (2024)', url: 'https://www.pewresearch.org/internet/2024/05/09/teens-and-video-games-today/' })}.
        Boys also buy loot boxes at <strong>3× the rate of girls (37% vs 11%)</strong>${h.cite({ text: 'UK Gambling Commission, “Young People and Gambling 2022”', url: 'https://www.gamblingcommission.gov.uk/report/young-people-and-gambling-2022/ypg-2022-online-gambling-awareness-and-use-of-in-game-items-in-video-games' })}, the gambling-style mechanic most linked to later problem gambling.</p>` : ''}`;
    },
  },

  {
    body: (h) => `
      <p class="eyebrow">Section 3</p>
      <h2>The stack — set up once, before school starts</h2>
      <p>No single layer survives a motivated 13-year-old, so you run several thin layers and let the
        redundancy work. Estimated setup: one weekend.</p>
      <div class="stack">
      <div class="layer"><span class="layer-label">Layer 0 — Identity (do this first)</span><div class="layer-body">${list([
        `A supervised <strong>child account</strong> for each kid with a <strong>true birthdate</strong> (${h.platforms.map((p) => p.account).join('; ')}) — the store’s age tiers and platform age-assurance systems key off it.`,
        'One family email (yours) as the recovery address on every kid account. You hold all passwords until the handoff years.',
      ])}</div></div>
      <div class="layer"><span class="layer-label">Layer 1 — Network (the layer everything obeys)</span><div class="layer-body">${list([
        '<strong>A filtering DNS resolver</strong> (e.g. NextDNS, ~$20/yr) — one profile per kid. Block porn + bypass methods (VPNs/proxies/DoH), enforce SafeSearch and YouTube Restricted Mode, enable logging so <em>you</em> can see what’s blocked (transparently). Installs via a device profile so it follows the device onto cellular and friends’ Wi-Fi.',
        '<strong>Router:</strong> point DHCP at your filtered DNS, and <strong>schedule a hard internet cutoff at bedtime</strong> — the single most evidence-backed control in this plan.',
        'Close the bypass holes now (they don’t matter at 9, they will at 13): block known VPN, proxy, and DoH endpoints (plus iCloud Private Relay on Apple); redirect outbound DNS to your resolver.',
      ])}</div></div>
      <div class="layer"><span class="layer-label">Layer 2 — ${h.multiPlatform ? 'Devices' : `${h.platform.name} devices`}</span><div class="layer-body">${h.platforms.map((p) => `${h.multiPlatform ? `<h4>${p.name} (${p.tool})</h4>` : ''}${list(DEVICE_LAYER[p.id])}`).join('')}</div></div>
      ${h.schoolDevice ? `
      <div class="layer"><span class="layer-label">The school-issued device (the machine you don’t control)</span><div class="layer-body">
      <p>A district-enrolled device obeys district policy, not you — parental tools can’t touch it, and
        management survives a wipe. In many districts (NYC’s DOE runs <strong>Zscaler</strong>) it
        tunnels <em>all</em> traffic — DNS included — to a cloud filter that runs on and off the school
        network, so <strong>none of your network controls reach it</strong>. Your real levers, in order:</p>
      ${list([
        '<strong>Shrink its role.</strong> It’s a schoolwork machine; discretionary browsing, YouTube, and games belong on a device you actually control.',
        '<strong>Physics.</strong> It lives in common rooms and charges overnight outside bedrooms. Placement <em>is</em> the enforcement, and it needs no software.',
        '<strong>Your router’s only lever is on/off.</strong> A device-level bedtime block (a hard traffic block, not DNS-based) still works regardless of the school filter.',
        '<strong>Email school IT</strong> — confirm off-network filtering is on, ask what’s monitored and who sees it, and whether take-home is actually required for this grade. For a young kid, “it lives in the classroom” is often the cleanest answer.',
      ])}</div></div>` : ''}
      <div class="layer"><span class="layer-label">Layer 4 — Platforms (configure as each is unlocked)</span><div class="layer-body">${list([
        '<strong>YouTube:</strong> YouTube Kids → supervised account: Explore (~9+) → Explore More (~13+) → Most of YouTube. Supervised accounts can’t comment or upload — half the value.',
        '<strong>Games (Minecraft etc.):</strong> link a parent account, set chat to people known in person, set the maturity rating at the kid’s age, loosen on schedule.',
        '<strong>Consoles/Spotify:</strong> family apps for play limits, ratings, purchase approval, and explicit-content filters the kid can’t flip back.',
      ])}</div></div>
      <div class="layer"><span class="layer-label">Layer 5 — Monitoring (the honest version)</span><div class="layer-body">
      <p>Optional, and only worth it transparent. On <strong>Apple</strong>, third-party apps can’t read
        message/app content (no visibility into Snap/TikTok/Discord); on <strong>Android</strong> a
        VPN-based monitor filters but rarely reads app content either; on <strong>Amazon</strong>, the
        Parent Dashboard already surfaces activity and browsing history. Reasonable default everywhere:
        <strong>skip the monitoring apps; use your DNS logs + platform-native family tools + weekly
        sit-downs.</strong> If you do use alerting in middle school, disclose it and sunset it by ~15–16.</p>
      </div></div>
      </div>`,
  },

  {
    body: (h) => `
      <p class="eyebrow">Section 4 · The centerpiece</p>
      <h2>The year-by-year plan</h2>
      <p>Each stage lists what unlocks, what stays locked, what you teach, and a <strong>gate</strong> —
        observable behaviors that green-light the next. The grade labels are one fixed schedule; the
        <strong>${h.approach.label}</strong> pace just moves where ${h.kid} sits on it. ${h.approach.tone}
        ${h.current
          ? `<strong>Right now (${h.approach.label} pace): ${h.kid} is at ${h.current.grade}${h.next ? `, ${h.next.grade} up next` : ' — the final handoff'}.</strong>`
          : `<strong>Right now (${h.approach.label} pace): ${h.kid} is just shy of the first stage.</strong>`}</p>
      <div class="schedule">
      ${h.stages.map((s) => gradeBlock(h, s)).join('\n')}
      </div>`,
  },

  {
    body: (h) => {
      const g = h.cfg.gender;
      const showGirl = g === 'girl' || g === 'neutral' || g === 'lgbtq';
      const showLgbtq = g === 'lgbtq';
      return `
      <p class="eyebrow">Section 5</p>
      <h2>The conversation calendar</h2>
      <p>The tools above buy time; these conversations are the actual product — each short, repeated,
        and calm. Your <em>anticipated reaction</em> is the variable that decides whether you hear about
        the crisis.</p>
      <table>
        <thead><tr><th>When</th><th>Talk</th><th>Core script</th></tr></thead>
        <tbody>
          <tr><td>Now &amp; every stage change</td><td><strong>No-freakout pledge</strong></td><td>“You’ll never be in trouble for telling me what happened online. I’ll never take your devices for something someone else did to you. Even if you broke a rule first.” Then <em>honor it.</em></td></tr>
          <tr><td>Grade 4 (before exposure)</td><td><strong>Porn v1</strong></td><td>“Some videos show adults doing sexual stuff. It’s made for adults. If you see it: close it, come tell me, zero trouble. It might feel weird — all normal, none of it your fault.”</td></tr>
          <tr><td>Grade 5</td><td><strong>Grooming red flags</strong></td><td>“Four tells someone wants something from a kid online: gifts, over-the-top compliments, ‘keep it secret,’ and ‘let’s move to a different app.’ Any one = show me.”</td></tr>
          <tr><td>Grade 6</td><td><strong>Sextortion exists</strong></td><td>“People online pretend to be kids. Anyone asking for body photos is committing a crime against you. Telling me is winning.”</td></tr>
          ${showGirl ? `<tr><td>Grade 6–7</td><td><strong>Filters &amp; the comparison trap</strong></td><td>“Almost every face and body you scroll past is filtered, edited, or posed — including your friends’ selfies. Follow a few real-body accounts on purpose. You don’t owe anyone a perfect photo, and comparison is a game the app wants you to keep losing.”</td></tr>` : ''}
          ${showLgbtq ? `<tr><td>Grade 6–8</td><td><strong>Safe spaces &amp; outing threats</strong></td><td>“The communities that actually get you can live online — go find the good ones. But if anyone ever threatens to ‘out’ you unless you pay, send photos, or do what they say, that’s a crime against you, not a secret to keep. Come to me — I’ll never out you to anyone, and never as a punishment.”</td></tr>` : ''}
          <tr><td>Grade 7 — the big one</td><td><strong>Full sextortion drill</strong></td><td>The criminal script + the protocol: <strong>never pay · stop responding · don’t delete · screenshot · block · tell me · Take It Down · CyberTipline.</strong> Then the tabletop. FBI’s framing: “You are not the one in trouble.”</td></tr>
          <tr><td>Grade 7–8</td><td><strong>“You’re being farmed”</strong></td><td>Watch the Jigsaw videos; name the five techniques; then the running game: “what’s this clip trying to make you feel, and who profits?”</td></tr>
          <tr><td>Grade 9</td><td><strong>Porn v2 (realism)</strong></td><td>“Choreography, not documentation. It teaches consent and bodies the way action movies teach driving.” Short, occasional, no shame.</td></tr>
        </tbody>
      </table>`;
    },
  },

  {
    body: (h) => {
      const showLgbtq = h.cfg.gender === 'lgbtq';
      return `
      <div class="emergency">
        <div class="emg-label">If the worst happens — the 60-minute playbook:</div>
        <ol>
          <li><strong>Sextortion in progress:</strong> Believe them. Say the pledge back. Do NOT pay,
            do NOT delete the thread. Screenshot everything. Block. Report: CyberTipline
            (report.cybertip.org) + FBI (1-800-CALL-FBI). Submit images to takeitdown.ncmec.org (works
            on AI fakes; the image never leaves your device — it’s hashed). The threat usually collapses
            within days once they stop engaging. Watch closely the first 48 hours — the lethal window —
            and say explicitly that this is survivable, common, and not character-defining.</li>
          ${showLgbtq ? `<li><strong>An outing threat:</strong> Someone threatens to reveal that ${h.kid} is
            LGBTQ+ unless they pay, send images, or comply. Lead with this: it is not their fault, and being
            outed is never a punishment you’d impose. Do NOT pay and do NOT comply — it doesn’t stop the
            threat. Preserve evidence (screenshot the messages and the profile; don’t delete the thread),
            then block. Report to the CyberTipline (report.cybertip.org); if images are involved,
            takeitdown.ncmec.org works on them too. Then make the promise explicit and keep it: their
            identity is theirs to share — on their own timeline, with whoever they choose — never leverage,
            never a consequence.</li>` : ''}
          <li><strong>They saw porn (or you found the history):</strong> Regulate yourself first.
            “Thanks for telling me / I’m not mad. What did you see? How did it land?” No device removal —
            that’s the punishment that teaches concealment.</li>
          <li><strong>Deepfake of them/a classmate:</strong> Take It Down + school administration +
            preserve evidence (platforms have 48h to remove under the TAKE IT DOWN Act).</li>
          <li><strong>Grooming suspicion:</strong> preserve everything, don’t confront the adult,
            CyberTipline, local PD if any in-person contact was arranged.</li>
          <li><strong>Radicalization drift:</strong> do not mock, do not ban — that confirms the
            narrative. More real-world status and belonging, genuine curiosity about the ideas,
            prebunking angles (“who profits from you angry?”). Life After Hate / Parents for Peace exist
            for exactly this.</li>
        </ol>
      </div>`;
    },
  },

  {
    body: (h) => `
      <p class="eyebrow">Section 6</p>
      <h2>Quick-reference</h2>
      <p><strong>Shopping list:</strong> a filtering DNS (~$20/yr) · a router that schedules a bedtime
        cutoff · everything else in the plan is free (device controls, platform teen accounts, all curricula).</p>
      <p><strong>This week:</strong> DNS profiles → router DNS + bedtime cutoff → bypass-hole blocks →
        ${h.multiPlatform ? 'your' : h.platform.name} child account${h.multiPlatform ? 's' : ''} + device controls${h.schoolDevice ? ' → email school IT re: the take-home device' : ''}
        → family media agreement draft → porn-v1 and pledge conversations on the calendar.</p>
      <p><strong>Annual maintenance (each August):</strong> re-verify controls actually enforce ·
        review filter categories against the grade table · execute the scheduled step-downs
        <em>visibly</em> · re-say the pledge · one tabletop drill · update the agreement together.</p>
      <p><strong>Free curricula worth using at home:</strong> Common Sense Digital Literacy · Be
        Internet Awesome/Interland (gr. 4–6) · NCMEC “Into the Cloud” (ages 10–11) · MediaSmarts Break
        the Fake · Stanford Civic Online Reasoning · Jigsaw/Cambridge prebunking videos.</p>`,
  },

  {
    body: (h) => `
      <div class="sources">
        <h2>Sources</h2>
        <p><strong>Efficacy &amp; frameworks:</strong> Przybylski &amp; Nash, <em>J. Pediatrics</em> 2017
          &amp; <em>Cyberpsychology</em> 2018 (filtering ineffectiveness, preregistered) · Chen &amp;
          Shi, <em>JMCQ</em> 2019 (52-study meta-analysis) · Livingstone et al. 2017 · EU Kids Online
          2020 · Geurts et al., <em>JMIR</em> 2025 (rules × age inflection) · Ghosh/Wisniewski CHI 2018 ·
          APA Health Advisory 2023 · AAP 5 Cs + Family Media Plan · eSafety Commissioner · UNICEF Dec
          2025 · Odgers, <em>Nature</em> 2024 vs. Haidt 2024 · NASEM 2024.</p>
        <p><strong>Threats:</strong> Common Sense, <em>Teens and Pornography</em> 2023 · UK Children’s
          Commissioner 2023/2025 · NCMEC CyberTipline data 2022–2025 · FBI/HSI financial-sextortion
          alerts · NCRI “Digital Pandemic” 2024 · Thorn (<em>Online Grooming</em> 2022, <em>Deepfake
          Nudes</em> 2025, disclosure data) · DCU <em>Recommending Toxicity</em> 2024 · UCL/Kent
          <em>Safer Scrolling</em> 2024 · FBI 764 alert 2025 · Common Sense/NORC AI companions 2025.</p>
        <p><strong>Tooling (2025–26 primary docs):</strong> Apple Newsroom · Google Family Link docs + Feb 2025 update · Amazon Kids / Parent Dashboard (parents.amazon.com) ·
          Zscaler ChromeOS/ZIA + NYC DOE case study · NextDNS/ControlD/CleanBrowsing · Meta Teen
          Accounts · TikTok Family Pairing · SCOTUS <em>Free Speech Coalition v. Paxton</em> 2025 · FTC
          COPPA 2025 · TAKE IT DOWN Act 2025.</p>
        <p><strong>Teaching:</strong> Common Sense Digital Literacy 2025 · NCMEC NetSmartz · MediaSmarts ·
          Roozenbeek &amp; van der Linden, <em>Science Advances</em> 2022 (prebunking, n≈30k) · Stanford
          SHEG · FBI sextortion scripts.</p>
        <p class="note"><em>Confidence &amp; caveats: the filtering-ineffectiveness result includes a
          preregistered replication. The algorithmic-feed findings (23-minute / 13%→56% radicalization,
          CCDH’s 2.6-minute and Amnesty’s “1 in 2” figures) come from researcher-created accounts and
          bot experiments — worst-case passive exposure, not guaranteed individual experience. A few
          girl-side figures are non-US (body-image and filter data are UK/Canada; the WHO problematic-use
          gap is European) and are labelled where they appear. The “98% of AI abuse imagery depicts girls”
          figure describes generated content; self-reported peer deepfake victimisation is more evenly
          split by sex.</em></p>
      </div>
      ${h.footnotes({ title: 'References' })}`,
  },
];
