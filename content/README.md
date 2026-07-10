# content/ — the single source of truth

There is **one plan**. Every family's page is this content with their choices
applied. Nothing here is duplicated per-combination.

## Model

The plan is an ordered list of **sections**. Each section declares:

- `audience`: `'both' | 'parent' | 'kid'` — who sees it. **This is the safety
  boundary.** The kid build (`apps/kid`) includes only `both` + `kid`; the
  candid risk sections are `audience: 'parent'` and therefore never enter the
  kid bundle.
- `when` (optional): a predicate over the config, e.g. only show the
  "school-managed device" section when `school_device` is true.
- `body`: content that may itself branch on the config — pronouns, the
  platform's setup steps, the age-shifted timeline, gender risk-emphasis.

## Knobs (see ../README.md for the schema)

- **age** → computes the "you are here" marker; nothing is authored per age.
- **approach** → an offset applied to milestone ages; same finish line (18).
- **platform** → selects a setup fragment (`fragments/platform/{apple,google}`).
- **for** (gender) → pronoun set + optional risk-emphasis callouts. Not a fork.

## Rule of thumb

If you're about to copy a section to make a variant, stop — express the
difference as a knob (a parameter or a tagged fragment) instead. Copies drift;
knobs don't.
