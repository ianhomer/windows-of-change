import { Delta, Draggable } from "../types/draggable";
import { useDrop, DropTargetMonitor } from "react-dnd";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import Window from "../components/window";
import Editable from "../components/editable";

interface WindowParams {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  opacity?: number;
  children: any;
  slider?: boolean;
}

interface BoardProps {
  contents: WindowParams[];
}

Board.defaultProps = {
  slider: true,
};

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
      {props.slider && (
        <div style={{ padding: "1em", zIndex: 10 }}>
          <Slider
            value={opacity}
            onChange={handleOpacityChange}
            aria-labelledby="continuous-slider"
            min={0.1}
            max={1}
            step={0.01}
          />
        </div>
      )}

      {props.contents.map((window) => (
        <Window
          left={window.left}
          top={window.top}
          width={window.width}
          height={window.height}
          opacity={window.opacity ?? opacity}
        >
          {typeof window.children === "string" ? (
            <Editable>{window.children}</Editable>
          ) : (
            window.children
          )}
        </Window>
      ))}
    </div>
  );
}
