import Layout from "../components/layout";
import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
Turn up the good
`,
};

export default function Page() {
  return <Layout lesson={lesson} />;
}
