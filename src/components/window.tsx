import styles from "../styles/Window.module.scss";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { Delta, Draggable } from "../types/draggable";
import { useState } from "react";

interface WindowProps {
  left?: number;
  top?: number;
  children: any;
}

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

export default function Window(props: WindowProps): JSX.Element {
  const [left, setLeft] = useState(props.left ?? 0);
  const [top, setTop] = useState(props.top ?? 0);

  const move = (delta: Delta) => {
    setLeft(Math.round(left + delta.x));
    setTop(Math.round(top + delta.y));
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: "window", id: "1", move, left, top } as Draggable,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={styles.window}
      style={getStyles(left, top, isDragging)}
    >
      {props.children}
    </div>
  );
}
