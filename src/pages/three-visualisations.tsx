import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";
import lesson from "../lessons/what-is-good";

const positions = (() => {
  const messages = [
    `
Today we'll play with 3 visualisations to:

1. help with alignment
  `,
    `
Today we'll play with 3 visualisations to:

1. ~help with~ alignment
2. help with prioritisation
  `,
    `
Today we'll play with 3 visualisations to:

1. ~help with~ alignment
2. ~help with~ sequencing work
3. help with doing the right thing
  `,
    `
Today we'll play with 3 visualisations to:

1. ~help with~ alignment
2. ~help with~ sequencing work
3. ~help with~ doing ~the right thing~
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
