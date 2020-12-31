import Layout from "../../components/layout";
import Window from "../../components/window";
import Board from "../../components/board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Page() {
  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <Board>
          <Window left={100} top={100}>
            <div>1</div>
          </Window>
          <Window left={100} top={300}>
            <div>2</div>
          </Window>
        </Board>
      </DndProvider>
    </Layout>
  );
}
