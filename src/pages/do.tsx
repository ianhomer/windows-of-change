import Layout from "../components/layout";
import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
Do or do not. There is no try.
Yoda
`,
};

export default function Page() {
  return <Layout lesson={lesson} />;
}
