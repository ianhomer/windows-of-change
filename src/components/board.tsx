import { Delta, Draggable } from "../types/draggable";
import { useDrop, DropTargetMonitor } from "react-dnd";

interface BoardProps {
  children: any;
}

export default function Board(props: BoardProps): JSX.Element {
  const [, drop] = useDrop({
    accept: "window",
    drop(item: Draggable, monitor: DropTargetMonitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as Delta;
      item.move(delta);
      return undefined;
    },
  });

  return (
    <div
      ref={drop}
      style={{
        position: "absolute",
        top: 50,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {props.children}
    </div>
  );
}
