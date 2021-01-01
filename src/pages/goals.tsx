import Layout from "../components/layout";
import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
- goals
- work
- change
- things change
`,
  notes: `
- breaking down changes
- sequencing changes
`,
};

export default function Page() {
  return <Layout lesson={lesson} />;
}
