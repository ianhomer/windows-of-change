import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
- ~on my mind - modelling / visualisation of ...~
- [trunk based development](https://trunkbaseddevelopment.com/)
- golden metrics → production change
- rock solid CI - ~ship it on a Friday~
- TDD / BDD - ~assertion of change ; assertion of value~
- ~what is a dream change flow?~
`,

  notes: `
- maturity model
- c.f. Arch Linux - everyone on latest, continual integration validation from
  users ; continuously don't care about old states.
- NFR assertions
- Value of assertions - how effective at raising quality
- What does quality look like?
- change not too distant from production
- how distant is a change from production? How long since branch point / cycle
  time?
`,
};

export default lesson;
