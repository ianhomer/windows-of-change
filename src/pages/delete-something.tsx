import Layout from "../components/layout";
import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
Delete something each day
`,
};

export default function Page() {
  return <Layout lesson={lesson} />;
}
