import Layout from "../components/layout";
import DragAndDrop from "../components/drag-and-drop";
import Board from "../components/board";

export default function Page() {
  const contents = [
    { left: 100, top: 0, children: "Sunrise / Sunset", opacity: 0.8 },
    { left: 300, top: 0, children: "Code Health", opacity: 0.8 },
    {
      left: 500,
      top: 0,
      width: 350,
      children:
        "Golden Metrics : Deployment Frequency ; Lead Time ; MTTR ; Change Failure Rate",
      opacity: 0.8,
    },
    { left: 900, top: 0, children: "North Star ; Trend", opacity: 0.8 },
    { left: 100, top: 400, children: "orientation", opacity: 0.2 },
    { left: 300, top: 400, children: "knowledge", opacity: 0.2 },
    {
      left: 100,
      top: 200,
      children: "(only important) messages",
      opacity: 0.6,
    },
    { left: 300, top: 200, children: "do", opacity: 0.6 },
    { left: 500, top: 200, children: "doing" },
    { left: 700, top: 200, children: "done", opacity: 0.2 },
    { left: 900, top: 200, children: "CI Health", opacity: 0.8 },
    { left: 900, top: 400, children: "Production Health", opacity: 0.8 },
  ];

  return (
    <Layout>
      <DragAndDrop>
        <Board contents={contents} />
      </DragAndDrop>
    </Layout>
  );
}
