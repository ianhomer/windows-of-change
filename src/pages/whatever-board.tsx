import Layout from "../components/layout";
import lesson from "../lessons/whatever-board";
import Window from "../components/window";
import Board from "../components/board";
import Mailbox from "../components/mailbox";
import InstantMessager from "../components/instant-messager";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Page() {
  return (
    <Layout lesson={lesson}>
      <DndProvider backend={HTML5Backend}>
        <Board>
          <Window left={100} top={100}>
            <Mailbox />
          </Window>
          <Window left={100} top={300}>
            <InstantMessager />
          </Window>
          <Window left={200} top={400}>
            Assigned Tasks
          </Window>
          <Window left={500} top={300}>
            Reminders : Timesheets!
          </Window>
        </Board>
      </DndProvider>
    </Layout>
  );
}
