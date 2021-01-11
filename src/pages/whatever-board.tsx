import Layout from "../components/layout";
import lesson from "../lessons/whatever-board";
import Board from "../components/board";
import Editable from "../components/editable";
import Mailbox from "../components/mailbox";
import InstantMessager from "../components/instant-messager";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";
import DragAndDrop from "../components/drag-and-drop";

const windowTitles = [
  "Weather",
  "Stocks",
  "Something Else",
  "+1",
  "+2",
  "Fire alarm in 5 minutes!! commit code now!",
  "Fire alarm in 2 minutes!!!",
];

export default function Page() {
  const [titles, setTitles] = useState<string[]>([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setTitles((titles) => [...titles, windowTitles[position]]);
  }, [position]);

  const contents = [
    { left: 100, top: 100, children: <Mailbox /> },
    { left: 100, top: 300, children: <InstantMessager /> },
    { left: 400, top: 350, children: <Editable>What I want</Editable> },
    { left: 200, top: 400, children: <Editable>Assigned Tasks</Editable> },
    {
      left: 500,
      top: 300,
      children: <Editable>Reminders : Timesheets!</Editable>,
    },
    ...titles.map((title) => ({
      left: 200 + Math.random() * 400,
      top: 200 + Math.random() * 400,
      children: <Editable>{title}</Editable>,
    })),
  ];

  return (
    <Layout
      lesson={lesson}
      transition={transition(windowTitles.length, setPosition)}
    >
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
