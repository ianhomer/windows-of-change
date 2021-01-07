import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";
import lesson from "../lessons/what-is-good";

const positions = (() => {
  const messages = [
    `
- how do we know what we can do each day?
  `,
    `
- ~how do we know~ what we can do ~each day~
- how do we know what is good?
  `,
    `
- ~how do we know~ what we can do ~each day~
- ~how do we know~ what is good
- how do align and create the right thing?
  `,
    `
- ~how do we know~ what we can do ~each day~
- ~how do we know~ what is good
- ~how do align and~ create the right thing
- how do we does this together?
  `,
    `
- ~how do we know~ what we can do ~each day~
- ~how do we know~ what is good
- ~how do align and~ create the right thing
- ~how do we does this~ together
- one team
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
      content={content}
      notes={lesson.notes}
      transition={transition(positions.length, setPosition)}
    />
  );
}
