import Layout from "../components/layout";
import lesson from "../lessons/mind-tools";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = (() => {
  const messages = [
    `
- Work flow & communication tools ... meh!
- Each channel is clamouring for attention
- Misaligned on what is important
  `,
    `
- Work flow & communication tools ... meh!
- Each channel is clamouring for attention
- Misaligned on what is important
- tool X is ...
`,
    `
- Work flow & communication tools ... meh!
- Each channel is clamouring for attention
- Misaligned on what is important
- tool X is ... **!!?&%#!!**
`,
    `
- ~Work flow & communication tools ... meh!~
- ~Each channel is clamouring for attention~
- ~Misaligned on what is important~
- ~tool X is ... **!!?&%#!!**~
- Let's free ourselves from tools - ~no tool blaming~
- Let's dream a little 
    `,
  ];
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
