// The shared skeleton: stages, section order, platform facts, approach math.
// Non-candid; imported by BOTH builds. No prose that differs by audience.

// Labels are CAPABILITY/phase names (robust to the approach shifting ages);
// `grade` is a soft annotation shown only at the default (Balanced) pace, where
// ages and grades actually line up.
export const STAGES = [
  { id: 'now',     label: 'Shared & supervised', grade: 'K–3',           baseAge: 8,  terminal: false,
    unlocks: ['A shared family tablet in a common room', 'Video calls with family', 'Co-watching shows together'] },
  { id: 'own',     label: 'Your own login',      grade: '4th grade',     baseAge: 9,  terminal: false,
    unlocks: ['Your own profile on the family tablet', 'Kid-mode YouTube', 'A few games & learning apps'] },
  { id: 'connect', label: 'First messaging',     grade: 'Middle school', baseAge: 11, terminal: false,
    unlocks: ['Texting an approved list of people', 'A basic phone (calls + texts)', 'Group chats, with ground rules'] },
  { id: 'social',  label: 'Smartphone & social', grade: 'High school',   baseAge: 14, terminal: false,
    unlocks: ['A smartphone', 'Social apps, opened one at a time', 'More privacy, more responsibility'] },
  { id: 'adult',   label: 'Full autonomy',       grade: '18',            baseAge: 18, terminal: true,
    unlocks: ['The whole internet', 'No monitoring', "It's all yours"] },
];

// One order for everyone; each audience simply omits sections it has no
// narration for (the kid build has no `risks`, etc.).
export const SECTION_ORDER = [
  'intro', 'bigIdea', 'promise', 'roadmap', 'setup', 'risks', 'school', 'closing',
];

export const PLATFORMS = {
  apple:  { name: 'Apple',       tool: 'Screen Time',  account: 'a child Apple Account in Family Sharing' },
  google: { name: 'Google',      tool: 'Family Link',  account: 'a supervised Google Account' },
  amazon: { name: 'Amazon Fire', tool: 'Amazon Kids',  account: 'an Amazon Kids+ child profile' },
};

// Approach changes the PACE, never the destination. 18 is always 18.
export const APPROACH = {
  cautious: { shift: +1, label: 'Cautious', tone: 'You hold each line a little longer.' },
  balanced: { shift:  0, label: 'Balanced', tone: 'The default schedule.' },
  open:     { shift: -1, label: 'Open',     tone: 'You hand off a little sooner, leaning on trust.' },
};
