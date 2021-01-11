// As per https://github.com/react-dnd/react-dnd/issues/186#issuecomment-561631584

import { DndProvider, createDndContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useRef } from "react";

interface DragAndDropProps {
  children: any;
}

const RNDContext = createDndContext(HTML5Backend);

function useDNDProviderElement(props: DragAndDropProps) {
  const manager = useRef(RNDContext);

  if (!props.children) return null;

  return (
    <>
      {manager.current.dragDropManager && (
        <DndProvider manager={manager.current.dragDropManager}>
          {props.children}
        </DndProvider>
      )}
      {!manager.current.dragDropManager && (
        <div>DragDropManager not avaialable</div>
      )}
    </>
  );
}

export default function DragAndDrop(props: DragAndDropProps) {
  const DNDElement = useDNDProviderElement(props);
  return <React.Fragment>{DNDElement}</React.Fragment>;
}
