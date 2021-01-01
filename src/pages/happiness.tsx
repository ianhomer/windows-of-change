import Layout from "../components/layout";
import { Lesson } from "../types/lesson";

const lesson: Lesson = {
  content: `
Happiness is when what you think, what you say, and what you do are in harmony.

Mahatma Gandhi
`,
};

export default function Page() {
  return <Layout lesson={lesson} />;
}
