import Layout from "../components/layout";
import lesson from "../lessons/zen-board";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 100, top: 100, children: "who's who" },
    { left: 100, top: 300, children: "knowledge" },
    { left: 300, top: 100, children: "comms ; IM / Open Calls" },
    { left: 300, top: 300, children: "events" },
    { left: 500, top: 100, children: "install" },
    { left: 500, top: 300, children: "CI" },
  ];

  return (
    <Layout notes={lesson.notes} title="New Starter - Engineer">
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
