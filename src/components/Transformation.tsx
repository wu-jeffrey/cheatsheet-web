import React, { ReactNode, useState } from "react";

interface Coordinates {
  x: number;
  y: number;
}

export default function useTransformation(
  child: ReactNode,
  position: Coordinates
) {
  const [coordinates, setCoordinates] = useState<any>(position);
  const [focused, setFocused] = useState<Boolean>(false);
  let moveStart = { x: 0, y: 0 };

  const dragStart = (e: React.DragEvent) => {
    moveStart = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const dragEnd = (e: React.DragEvent) => {
    const dx = e.clientX - moveStart.x;
    const dy = e.clientY - moveStart.y;
    const newCoord = {
      x: coordinates.x + dx,
      y: coordinates.y + dy
    };

    setCoordinates(newCoord);
  };

  const handleFocus = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (focused) return;
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <>
      <div
        draggable
        className={"react-draggable"}
        style={{
          transform: `translate(${coordinates.x}px, ${coordinates.y}px)`
        }}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        onClick={handleFocus}
        onBlur={handleBlur}
      >
        <div className={`handle ${focused ? "focused" : null}`}>{child}</div>
      </div>
    </>
  );
}
