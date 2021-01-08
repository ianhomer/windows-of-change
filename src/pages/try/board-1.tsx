import Layout from "../../components/layout";
import Board from "../../components/board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Page() {
  const contents = [
    { left: 100, top: 100, children: <div>1</div> },
    { left: 100, top: 300, children: <div>2</div> },
  ];

  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <Board contents={contents} />
      </DndProvider>
    </Layout>
  );
}
