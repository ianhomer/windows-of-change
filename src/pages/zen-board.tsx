import Layout from "../components/layout";
import lesson from "../lessons/zen-board";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 100, top: 100, children: "do", opacity: 0.2 },
    { left: 300, top: 100, width: 200, height: 200, children: "doing" },
    { left: 550, top: 100, children: "done", opacity: 0.2 },
  ];

  return (
    <Layout notes={lesson.notes}>
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
