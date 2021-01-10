import Layout from "../components/layout";
import lesson from "../lessons/zen-board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 100, top: 100, children: "do" },
    { left: 300, top: 100, children: "doing" },
    { left: 500, top: 100, children: "done" },
  ];

  return (
    <Layout notes={lesson.notes}>
      <DndProvider backend={HTML5Backend}>
        <Board contents={contents} />
      </DndProvider>
    </Layout>
  );
}
