import Layout from "../components/layout";
import lesson from "../lessons/worth-knowing";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 300, top: 200, width: 300, height: 300, children: "WORTH knowing" },
  ];

  return (
    <Layout notes={lesson.notes} content={lesson.content}>
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
