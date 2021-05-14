// As per https://github.com/react-dnd/react-dnd/issues/186#issuecomment-561631584

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";

interface DragAndDropProps {
  children: any;
}

function useDNDProviderElement(props: DragAndDropProps) {
  if (!props.children) return null;

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {props.children}
      </DndProvider>
    </>
  );
}

export default function DragAndDrop(props: DragAndDropProps) {
  const DNDElement = useDNDProviderElement(props);
  return <React.Fragment>{DNDElement}</React.Fragment>;
}
