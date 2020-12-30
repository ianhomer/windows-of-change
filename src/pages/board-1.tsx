import Layout from "../components/layout";
import Window from "../components/window";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Page() {
  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <Window />
      </DndProvider>
    </Layout>
  );
}
