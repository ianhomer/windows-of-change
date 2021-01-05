import Layout from "../components/layout";
import lesson from "../lessons/whatever-board";
import Window from "../components/window";
import Board from "../components/board";
import Mailbox from "../components/mailbox";
import InstantMessager from "../components/instant-messager";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

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

  return (
    <Layout
      lesson={lesson}
      transition={transition(windowTitles.length, setPosition)}
    >
      <DndProvider backend={HTML5Backend}>
        <Board>
          <Window left={100} top={100}>
            <Mailbox />
          </Window>
          <Window left={100} top={300}>
            <InstantMessager />
          </Window>
          <Window left={400} top={350}>
            What I want
          </Window>
          <Window left={200} top={400}>
            Assigned Tasks
          </Window>
          <Window left={500} top={300}>
            Reminders : Timesheets!
          </Window>
          {titles.map((title) => (
            <Window
              left={200 + Math.random() * 400}
              top={200 + Math.random() * 400}
            >
              {title}
            </Window>
          ))}
        </Board>
      </DndProvider>
    </Layout>
  );
}
