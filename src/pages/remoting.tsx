import Layout from "../components/layout";
import lesson from "../lessons/remoting";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 300, top: 0, children: "who's where", opacity: 0.4 },
    { left: 500, top: 0, children: "break outs", opacity: 0.4 },
    { left: 100, top: 200, children: "what's the buzz", opacity: 0.6 },
    {
      left: 300,
      top: 200,
      children: "who wants to ask you something",
      opacity: 0.6,
    },
    { left: 500, top: 200, children: "open calls" },
    { left: 700, top: 200, children: "who's chilling", opacity: 0.8 },
    { left: 100, top: 400, children: "who's starting", opacity: 0.6 },
    { left: 900, top: 400, children: "explosions", opacity: 0.4 },
    { left: 500, top: 400, children: "7-bone or Thai?" },
  ];

  return (
    <Layout
      notes={lesson.notes}
      background="https://live.staticflickr.com/7030/6755230449_3dccaa53da_k.jpg"
    >
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
