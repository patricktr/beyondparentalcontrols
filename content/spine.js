// The shared skeleton: the real grade-by-grade schedule (Grade 4 → Grade 12),
// platform facts, and approach framing. Non-candid; imported by BOTH builds.
// Per-grade PROSE lives in the audience section files, never here.

export const STAGES = [
  { id: 'g4',  grade: 'Grade 4',  age: 9,  title: 'Finding your balance, together' },
  { id: 'g5',  grade: 'Grade 5',  age: 10, title: 'Doing more on your own' },
  { id: 'g6',  grade: 'Grade 6',  age: 11, title: 'Talking to real people' },
  { id: 'g7',  grade: 'Grade 7',  age: 12, title: 'Leveling up your skills' },
  { id: 'g8',  grade: 'Grade 8',  age: 13, title: 'Your first accounts' },
  { id: 'g9',  grade: 'Grade 9',  age: 14, title: 'Trust, with check-ins' },
  { id: 'g10', grade: 'Grade 10', age: 15, title: 'We mostly step back' },
  { id: 'g11', grade: 'Grade 11', age: 16, title: "We're your advisors now" },
  { id: 'g12', grade: 'Grade 12', age: 17, title: 'The handoff' },
];

export const PLATFORMS = {
  apple:  { name: 'Apple',       tool: 'Screen Time',  account: 'a child Apple Account in Family Sharing' },
  google: { name: 'Google',      tool: 'Family Link',  account: 'a supervised Google Account' },
  amazon: { name: 'Amazon Fire', tool: 'Amazon Kids',  account: 'an Amazon Kids+ child profile' },
};

// Approach changes the PACE and TONE, never the destination. The grade
// schedule is fixed (gates are readiness-based); approach sets how hard you
// hold each gate. Every path still ends at full autonomy by 18.
export const APPROACH = {
  cautious: { label: 'Cautious', tone: 'You hold each new step a little longer, leaning on the locks while the skills catch up.' },
  balanced: { label: 'Balanced', tone: 'The default schedule below — access expands about one notch a year.' },
  open:     { label: 'Open',     tone: 'You move at the pace of demonstrated readiness, leaning on trust and conversation over locks.' },
};
