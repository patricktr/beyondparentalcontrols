// Narration for the PARENT site (beyondparentalcontrols.com). Candid, practical,
// research-backed. Shipped ONLY to the parent build — the kid build never
// imports this file, which keeps candid material off the kid's device.
//
// PARENT-ONLY-SENTINEL — tools/build.mjs asserts this marker never reaches apps/kid/lib.
//
// Ported faithfully from the original parents' edition (Apple + boy + NYC-DOE
// sourced). Hyper-local bits (the school Chromebook / Zscaler layer) are gated
// behind the school-device flag; boy-sourced threat data carries a visible note
// for non-boy configs; non-Apple platform steps are honest stubs, not invented.

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

const gradeBlock = (h, s) => {
  const g = GRADES[s.id];
  const here = s.isCurrent ? ' <span class="here">you are here</span>' : '';
  const unlocks = [...(g.unlocks || []), ...(g.schoolUnlock && h.schoolDevice ? [g.schoolUnlock] : [])];
  const table = g.locked
    ? `<table><thead><tr><th>${g.unlocks ? 'Unlocks' : ''}</th><th>${g.lockedLabel || 'Stays locked'}</th></tr></thead><tbody><tr>
         <td>${list(unlocks)}</td><td>${list(g.locked)}</td></tr></tbody></table>`
    : '';
  const teach = g.teach ? `<p><strong>Teach this year:</strong></p>${list(g.teach)}` : '';
  const outro = g.outro ? list(g.outro) : '';
  const gate = g.gate ? `<p><strong>Gate to the next stage:</strong> ${h.kid} ${g.gate}</p>` : '';
  return `
    <div class="year${s.isCurrent ? ' now' : ''}">
      <h3>${s.grade} · age ${s.age} — “${s.title}”${here}</h3>
      <p>${g.lead}</p>
      ${table}${teach}${outro}${gate}
    </div>`;
};

export default [
  {
    body: (h) => `
      <h1>Graduated Internet Access Plan</h1>
      <p class="doc-meta"><strong>Parents' edition.</strong> The full, candid plan. A kid-facing
        version lives on the kid site, safe to hand over.</p>
      <p><strong>For:</strong> ${h.platform.name}-primary household, ${h.kid} at age ${h.cfg.age}${h.schoolDevice ? ', a school-issued device that comes home' : ''}. Younger siblings age into each stage.
        <strong>Goal:</strong> locked-down → full autonomy by 18, on a deliberate schedule instead of by attrition.
        <strong>Built from:</strong> ~70 sources including peer-reviewed research, NCMEC/FBI data, and
        AAP/APA/eSafety guidance (footnotes at the end).</p>`,
  },

  {
    body: () => `
      <h2>What the evidence actually says</h2>
      <p>Five findings should drive the whole plan:</p>
      <ol class="findings">
        <li><strong>Filters barely work as a shield — but that’s not why you deploy them.</strong>
          The best study available found parental filtering explains <strong>less than 0.5% of the
          variance</strong> in whether a teen encounters sexual material; a preregistered replication
          found no protective effect at all (Przybylski &amp; Nash 2018). Filters still earn their keep
          in elementary school: they cut <em>accidental</em> exposure (the majority of first
          exposures), buy you years to teach, and signal family norms. Deploy them; never mistake them
          for the strategy.</li>
        <li><strong>Talking beats restricting — for harm.</strong> A 52-study meta-analysis
          (N=74,159): restrictive rules reduce screen <em>time</em>; active mediation (discussing,
          co-using, coaching) reduces <em>harm</em> (Chen &amp; Shi 2019). Tools as a supplement,
          conversation as the core, rules co-created and relaxed with age.</li>
        <li><strong>Rules have an expiration date: ~age 12 they protect, ~age 16 they backfire.</strong>
          Strict internet rules predicted <em>less</em> problematic use under ~12.3 and <em>more</em>
          over ~15.7 (Geurts 2025). Your step-down schedule is not generosity — it’s the mechanism.</li>
        <li><strong>The disclosure channel is your single most valuable asset.</strong> 40% of kids
          <em>said</em> they’d tell a caregiver if an adult sent them nudes; <strong>only 10% of those
          it happened to did</strong> (Thorn). Reasons for silence: embarrassment, fear of trouble,
          fear of losing devices. Nearly every serious harm below is survivable <em>if the kid tells
          you in hour one</em>. The evidence-backed move is the pre-commitment, said out loud and honored:
          <blockquote>“You will never be in trouble for telling me something that happened online, and I
          will never respond by taking your devices away. Even if you broke a rule first.”</blockquote>
          Never punish a disclosure with device removal — that single reaction teaches kids to handle
          the next crisis alone.</li>
        <li><strong>Covert monitoring backfires; transparent scaffolding doesn’t.</strong> Teens rate
          surveillance apps as trust-destroying; covert monitoring correlates with hidden behavior, not
          safety. Everything here is done in the open — the kid knows what’s filtered, what’s visible,
          and the date it steps down. The driving-permit framing (“I’m in the car while you have your
          permit”) is the one that lands.</li>
      </ol>`,
  },

  {
    // PARENT-ONLY threat model. Boy-sourced; flagged for non-boy configs.
    body: (h) => `
      <h2>The 2026 threat model</h2>
      ${h.cfg.gender !== 'boy' ? `<p class="note"><strong>Sourcing note:</strong> the figures below are
        drawn from research on boys — financial sextortion and the manosphere pipeline are boy-dominated
        in the data. For ${h.kid}, the overall shape holds, but the mix skews differently for girls
        (image-based abuse and coercive social dynamics feature more heavily); this section doesn’t yet
        carry girl-specific citations. Treat the numbers as directional.</p>` : ''}
      <h3>1. Financial sextortion — the one that kills</h3>
      <p>The fastest-growing serious threat. NCMEC reports climbed 10,731 (2022) → <strong>50,000+
        (2025, 137/day)</strong>; at least <strong>36 American teen boys have died by suicide</strong>
        since 2021, some within <em>hours</em> of first contact. The script is industrialized: fake
        attractive-girl account DMs → fast flirtation → move to Snapchat → reciprocal nude → instant
        pivot to a screenshot of the follower list → payment demands. <strong>Why it’s winnable:</strong>
        94% of reports come from the victim or a parent — pre-briefed kids come forward, and the threat
        collapses the moment they stop engaging and tell an adult. No filter touches this.</p>
      <h3>2. Pornography — arrives via social feeds, not porn sites</h3>
      <p>Average first exposure is <strong>age 12</strong>; 15% by 10; a majority accidental. The #1
        vector in current UK data is <strong>X/Twitter (45%), ahead of dedicated porn sites</strong>,
        then Instagram and Snapchat; 58% of exposed UK kids had seen strangulation content. So:
        <strong>delaying algorithmic social feeds IS your porn filter</strong>, and you should assume
        exposure around 10–12 and pre-teach the response.</p>
      <h3>3. Algorithmic radicalization — passive, fast, aimed at boys</h3>
      <p>Fresh accounts registered as teen boys had <strong>manosphere content pushed within 23
        minutes</strong>; a UCL study watched misogynistic recommendations go from <strong>13% to 56%
        in 5 days</strong>. The pipeline is short-form feeds + influencer ecosystems + gaming chat. At
        the extreme, the FBI’s 764 alert documents groups recruiting 10–17-year-olds starting in
        in-game chat. Defenses with evidence: delaying feeds, co-viewing, feed-hygiene skills, and
        prebunking — not keyword filters.</p>
      <h3>4. The grooming funnel — the control point is the platform move</h3>
      <p>Thorn: 40% of 9–17s have received a cold nude solicitation; <strong>65% have been asked to
        move from a public/game chat to a private platform</strong>. That migration moment is the choke
        point, and it’s teachable: gifts, flattery, secrecy, and platform-move requests are the four
        red flags a 10-year-old can memorize.</p>
      <h3>5. AI-era risks</h3>
      ${list([
        '<strong>AI companions:</strong> 72% of US teens have used one; Common Sense’s assessment: not safe under 18. Treat companion AI like strangers-in-DMs.',
        '<strong>Nudify/deepfake harassment:</strong> 1 in 17 teens has had deepfake nudes made of them. Making one is now a federal crime (TAKE IT DOWN Act); NCMEC’s <strong>Take It Down</strong> tool removes real and AI images.',
        '<strong>Scams:</strong> 1.6M attacks disguised as Roblox files in 2024. “Nothing free exists” is a 4th-grade lesson.',
      ])}
      <h3>6. Background rot: sleep, harassment, hate exposure</h3>
      <p>75% of teen multiplayer gamers report harassment; the one harm with near-unanimous expert
        consensus — sleep loss — is solved by boring logistics (a bedtime cutoff), not software.</p>`,
  },

  {
    body: (h) => `
      <h2>The stack — set up once, before school starts</h2>
      <p>No single layer survives a motivated 13-year-old, so you run several thin layers and let the
        redundancy work. Estimated setup: one weekend.</p>
      ${h.cfg.platform !== 'apple' ? `<p class="note"><strong>Platform note:</strong> the device layer
        below is written for an Apple household (Screen Time). The <em>principle</em> — identity →
        network filter → device controls → bedtime cutoff — applies to ${h.platform.name}
        (${h.platform.tool}) too, but the device-specific steps need that platform’s own tooling, which
        isn’t sourced here yet.</p>` : ''}
      <h3>Layer 0 — Identity (do this first)</h3>
      ${list([
        `A child account for each kid in family sharing, with <strong>true birthdates</strong> — the App Store age tiers and platform age-assurance systems all key off it.`,
        'One family email (yours) as the recovery address on every kid account. You hold all passwords until the handoff years.',
      ])}
      <h3>Layer 1 — Network (the layer everything obeys)</h3>
      ${list([
        '<strong>A filtering DNS resolver</strong> (e.g. NextDNS, ~$20/yr) — one profile per kid. Block porn + bypass methods (VPNs/proxies/DoH), enforce SafeSearch and YouTube Restricted Mode, enable logging so <em>you</em> can see what’s blocked (transparently). Installs via a device profile so it follows the device onto cellular and friends’ Wi-Fi.',
        '<strong>Router:</strong> point DHCP at your filtered DNS, and <strong>schedule a hard internet cutoff at bedtime</strong> — the single most evidence-backed control in this plan.',
        'Close the bypass holes now (they don’t matter at 9, they will at 13): block iCloud Private Relay endpoints and known DoH servers; redirect outbound DNS to your resolver.',
      ])}
      <h3>Layer 2 — ${h.platform.name} devices</h3>
      ${h.cfg.platform === 'apple'
        ? list([
            'Configure <strong>Screen Time</strong> from Family Sharing, then verify from the kid’s device. Web Content → Allowed Websites Only for grade 4; “Limit Adult Websites” from grade 5–6.',
            '<strong>Communication Limits</strong> (approved contacts) + <strong>Communication Safety</strong> on (on-device nude-image blurring; can’t be disabled under 13).',
            '<strong>Ask to Buy</strong> + <strong>Don’t Allow Deleting Apps</strong> + App Store cap at the kid’s age tier. Lock the known bypasses (time-zone trick, Siri web search, YouTube link previews).',
            '<strong>Reliability warning:</strong> Screen Time has a long history of silently failing — treat it as <em>policy signal, not enforcement</em>; the network layer is your backstop.',
          ])
        : `<p class="stub">[ ${h.platform.tool} device-setup steps need sourcing before they ship — placeholder, not fabricated guidance. ]</p>`}
      ${h.schoolDevice ? `
      <h3>The school-issued device (the machine you don’t control)</h3>
      <p>A district-enrolled device obeys district policy, not you — parental tools can’t touch it, and
        management survives a wipe. In many districts (NYC’s DOE runs <strong>Zscaler</strong>) it
        tunnels <em>all</em> traffic — DNS included — to a cloud filter that runs on and off the school
        network, so <strong>none of your network controls reach it</strong>. Your real levers, in order:</p>
      ${list([
        '<strong>Shrink its role.</strong> It’s a schoolwork machine; discretionary browsing, YouTube, and games belong on a device you actually control.',
        '<strong>Physics.</strong> It lives in common rooms and charges overnight outside bedrooms. Placement <em>is</em> the enforcement, and it needs no software.',
        '<strong>Your router’s only lever is on/off.</strong> A device-level bedtime block (a hard traffic block, not DNS-based) still works regardless of the school filter.',
        '<strong>Email school IT</strong> — confirm off-network filtering is on, ask what’s monitored and who sees it, and whether take-home is actually required for this grade. For a young kid, “it lives in the classroom” is often the cleanest answer.',
      ])}` : ''}
      <h3>Layer 4 — Platforms (configure as each is unlocked)</h3>
      ${list([
        '<strong>YouTube:</strong> YouTube Kids → supervised account: Explore (~9+) → Explore More (~13+) → Most of YouTube. Supervised accounts can’t comment or upload — half the value.',
        '<strong>Games (Minecraft etc.):</strong> link a parent account, set chat to people known in person, set the maturity rating at the kid’s age, loosen on schedule.',
        '<strong>Consoles/Spotify:</strong> family apps for play limits, ratings, purchase approval, and explicit-content filters the kid can’t flip back.',
      ])}
      <h3>Layer 5 — Monitoring (the honest version)</h3>
      <p>Optional, and only worth it transparent. On iOS, third-party apps <strong>cannot read
        message/app content</strong> (no visibility into Snap/TikTok/Discord). Reasonable default:
        <strong>skip the monitoring apps; use DNS logs + platform-native family tools + weekly
        sit-downs.</strong> If you do use alerting in middle school, disclose it and sunset it by ~15–16.</p>`,
  },

  {
    body: (h) => `
      <h2>The year-by-year plan</h2>
      <p>Each stage: what unlocks, what stays locked, what you teach, and a <strong>gate</strong> —
        observable behaviors that green-light the next stage. Gates are readiness-based, so a cautious
        kid can run a year behind the grade labels without drama. ${h.approach.tone}
        ${h.current ? `<strong>Where ${h.kid} is now:</strong> ${h.current.grade}.` : ''}</p>
      ${h.stages.map((s) => gradeBlock(h, s)).join('\n')}`,
  },

  {
    body: () => `
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
          <tr><td>Grade 7 — the big one</td><td><strong>Full sextortion drill</strong></td><td>The criminal script + the protocol: <strong>never pay · stop responding · don’t delete · screenshot · block · tell me · Take It Down · CyberTipline.</strong> Then the tabletop. FBI’s framing: “You are not the one in trouble.”</td></tr>
          <tr><td>Grade 7–8</td><td><strong>“You’re being farmed”</strong></td><td>Watch the Jigsaw videos; name the five techniques; then the running game: “what’s this clip trying to make you feel, and who profits?”</td></tr>
          <tr><td>Grade 9</td><td><strong>Porn v2 (realism)</strong></td><td>“Choreography, not documentation. It teaches consent and bodies the way action movies teach driving.” Short, occasional, no shame.</td></tr>
        </tbody>
      </table>`,
  },

  {
    body: () => `
      <div class="emergency">
        <p><strong>If the worst happens — the 60-minute playbook:</strong></p>
        <ol>
          <li><strong>Sextortion in progress:</strong> Believe them. Say the pledge back. Do NOT pay,
            do NOT delete the thread. Screenshot everything. Block. Report: CyberTipline
            (report.cybertip.org) + FBI (1-800-CALL-FBI). Submit images to takeitdown.ncmec.org (works
            on AI fakes; the image never leaves your device — it’s hashed). The threat usually collapses
            within days once they stop engaging. Watch closely the first 48 hours — the lethal window —
            and say explicitly that this is survivable, common, and not character-defining.</li>
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
      </div>`,
  },

  {
    body: (h) => `
      <h2>Quick-reference</h2>
      <p><strong>Shopping list:</strong> a filtering DNS (~$20/yr) · a router that schedules a bedtime
        cutoff · everything else in the plan is free (device controls, platform teen accounts, all curricula).</p>
      <p><strong>This week:</strong> DNS profiles → router DNS + bedtime cutoff → bypass-hole blocks →
        ${h.platform.name} child account + device controls${h.schoolDevice ? ' → email school IT re: the take-home device' : ''}
        → family media agreement draft → porn-v1 and pledge conversations on the calendar.</p>
      <p><strong>Annual maintenance (each August):</strong> re-verify controls actually enforce ·
        review filter categories against the grade table · execute the scheduled step-downs
        <em>visibly</em> · re-say the pledge · one tabletop drill · update the agreement together.</p>
      <p><strong>Free curricula worth using at home:</strong> Common Sense Digital Literacy · Be
        Internet Awesome/Interland (gr. 4–6) · NCMEC “Into the Cloud” (ages 10–11) · MediaSmarts Break
        the Fake · Stanford Civic Online Reasoning · Jigsaw/Cambridge prebunking videos.</p>`,
  },

  {
    body: () => `
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
        <p><strong>Tooling (2025–26 primary docs):</strong> Apple Newsroom · Google Family Link docs ·
          Zscaler ChromeOS/ZIA + NYC DOE case study · NextDNS/ControlD/CleanBrowsing · Meta Teen
          Accounts · TikTok Family Pairing · SCOTUS <em>Free Speech Coalition v. Paxton</em> 2025 · FTC
          COPPA 2025 · TAKE IT DOWN Act 2025.</p>
        <p><strong>Teaching:</strong> Common Sense Digital Literacy 2025 · NCMEC NetSmartz · MediaSmarts ·
          Roozenbeek &amp; van der Linden, <em>Science Advances</em> 2022 (prebunking, n≈30k) · Stanford
          SHEG · FBI sextortion scripts.</p>
        <p class="note"><em>Confidence: single-study findings (the Geurts inflection point) are labeled
          as such; the filtering-ineffectiveness result includes a preregistered replication; the
          23-minute and 13%→56% radicalization findings are from researcher-created fresh accounts —
          worst-case passive exposure, not guaranteed individual experience.</em></p>
      </div>`,
  },
];
