import Layout from "../components/layout";
import lesson from "../lessons/tooling";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = (() => {
  const messages = [
    `
- how do we know what to do each day
- how do we know good
  `,
    `
- work flow tools we use every day are far from optimal
`,
    `
- sub-par work flow tools
`,
  ];
  messages.push(
    messages[1] +
      `
- let's dream a little of what would actual help
`
  );
  return messages;
})();

export default function Page() {
  const [position, setPosition] = useState(0);
  const [content, setContent] = useState(positions[0]);

  useEffect(() => {
    setContent(positions[position]);
  }, [position]);

  return (
    <Layout
      notes={lesson.notes}
      content={content}
      transition={transition(positions.length, setPosition)}
    />
  );
}
