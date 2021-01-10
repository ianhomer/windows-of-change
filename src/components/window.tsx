import styles from "../styles/Window.module.scss";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { Delta, Draggable } from "../types/draggable";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";

interface WindowProps {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  children: any;
  opacity: number;
}

function getStyles(
  left: number,
  top: number,
  width: number,
  height: number,
  opacity: number,
  isDragging: boolean
): React.CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    resize: "both",
    padding: "7px",
    borderWidth: "5px",
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    borderRadius: "1em",
    color: "#000",
    width,
    height,
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : opacity,
  };
}

export default function Window(props: WindowProps): JSX.Element {
  const [left, setLeft] = useState(props.left ?? 0);
  const [top, setTop] = useState(props.top ?? 0);
  const [opacity, setOpacity] = useState(props?.opacity ?? 0.5);

  const height = props.height ?? 100;
  const width = props.width ?? 100;

  const handleOpacityChange = (event: any, newValue: number | number[]) => {
    setOpacity(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const move = (delta: Delta) => {
    setLeft(Math.round(left + delta.x));
    setTop(Math.round(top + delta.y));
  };

  // opacity with state bias
  const calculateOpacity = (state: number, prop: number) => {
    if (state > 0.95) {
      return state;
    }
    const opacity = 2 * state * prop;
    if (opacity > 1) {
      return 1;
    }
    return opacity < 0 ? 0 : opacity;
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
      style={getStyles(
        left,
        top,
        width,
        height,
        calculateOpacity(opacity, props.opacity),
        isDragging
      )}
    >
      <Slider
        value={opacity}
        onChange={handleOpacityChange}
        aria-labelledby="continuous-slider"
        min={0.2}
        max={1}
        step={0.01}
      />
      {props.children}
    </div>
  );
}
