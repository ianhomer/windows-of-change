import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
- maturity model
- trunk based development
- golden metrics -> production change
- rock solid CI
- TDD / BDD
- Dream change flow
`,

  notes: `
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
