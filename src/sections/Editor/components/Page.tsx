import React, { useState, ReactNode } from "react";
// @ts-ignore
import MathInput from "../../../components/MathInput";
import { MouseCoordinatesProvider } from "../../../components/MouseCoordinates";

interface Coordinates {
  x: number;
  y: number;
}

function Page() {
  const [children, setChildren] = useState<ReactNode[]>([]);
  const [mouseCoordinates, setMouseCoordinates] = useState<Coordinates>({
    x: 0,
    y: 0
  });

  const handleClick = (event: any) => {
    const position = {
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    };

    setChildren([
      ...children,
      <MathInput key={children.length + 1} position={position} />
    ]);
  };

  const allowDrop = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const getMouseCoordinates = (event: React.MouseEvent) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div
      className="page"
      onClick={handleClick}
      onDragOver={allowDrop}
      onMouseMove={getMouseCoordinates}
    >
      <MouseCoordinatesProvider coordinates={mouseCoordinates}>
        {children}
      </MouseCoordinatesProvider>
    </div>
  );
}

export default Page;
