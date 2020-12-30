import styles from "../styles/Window.module.css";
import {
  useDrag,
  useDrop,
  DragObjectWithType,
  DragSourceMonitor,
  DropTargetMonitor,
} from "react-dnd";
import { Draggable } from "../types/draggable";
import { useState } from "react";

function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): React.CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
  };
}

export default function Window(): JSX.Element {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const [{ isDragging }, drag] = useDrag({
    item: { type: "window", id: "1", left, top } as Draggable,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [,] = useDrop({
    accept: "window",
    drop(item: Draggable, monitor: DropTargetMonitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };
      setLeft(Math.round(item.left + delta.x));
      setTop(Math.round(item.top + delta.y));
      console.log(item.top);
      return undefined;
    },
  });

  return (
    <div
      ref={drag}
      className={styles.window}
      style={getStyles(left, top, isDragging)}
    >
      {isDragging ? 1 : 0}Y
    </div>
  );
}
