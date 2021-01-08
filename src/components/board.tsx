import { Delta, Draggable } from "../types/draggable";
import { useDrop, DropTargetMonitor } from "react-dnd";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import Window from "../components/window";

interface WindowParams {
  left?: number;
  top?: number;
  children: any;
}

interface BoardProps {
  contents: WindowParams[];
}

export default function Board(props: BoardProps): JSX.Element {
  const [opacity, setOpacity] = useState(0.9);

  const [, drop] = useDrop({
    accept: "window",
    drop(item: Draggable, monitor: DropTargetMonitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as Delta;
      item.move(delta);
      return undefined;
    },
  });

  const handleOpacityChange = (event: any, newValue: number | number[]) => {
    setOpacity(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  return (
    <div
      ref={drop}
      style={{
        position: "absolute",
        top: 50,
        left: 0,
        width: "100%",
        height: "90%",
      }}
    >
      <div style={{ padding: "1em" }}>
        <Slider
          value={opacity}
          onChange={handleOpacityChange}
          aria-labelledby="continuous-slider"
          min={0.1}
          max={1}
          step={0.01}
        />
      </div>

      {props.contents.map((window) => (
        <Window left={window.left} top={window.top} opacity={opacity}>
          {window.children}
        </Window>
      ))}
    </div>
  );
}
