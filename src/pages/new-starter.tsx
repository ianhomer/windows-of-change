import Layout from "../components/layout";
import lesson from "../lessons/zen-board";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 900, top: 0, children: "North Star" },
    { left: 100, top: 200, children: "who's who" },
    { left: 100, top: 400, children: "knowledge" },
    { left: 300, top: 200, children: "comms ; IM / Open Calls" },
    { left: 300, top: 400, children: "events" },
    { left: 500, top: 400, children: "tl;dr install" },
    { left: 500, top: 200, children: "your squad" },
  ];

  const content = `
- Learner's journey
`;
  return (
    <Layout
      content={content}
      notes={lesson.notes}
      title="New Starter - Engineer"
    >
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
