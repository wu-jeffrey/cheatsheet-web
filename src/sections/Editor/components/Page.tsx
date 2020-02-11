import React, {useState, ReactNode} from 'react';
// @ts-ignore
import MathInput from '../../../components/MathInput';
import {MouseCoordinatesProvider} from '../../../components/MouseCoordinates';

interface Coordinates {
  x: number;
  y: number;
}

function Page() {
  const [children, setChildren] = useState<ReactNode[]>([]);
  const [mouseCoordinates, setMouseCoordinates] = useState<Coordinates>({x: 0, y: 0});

  const handleClick = (event: any) => {
    setChildren([...children,
    ]);
  };

  const allowDrop = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const getMouseCoordinates = (event: React.MouseEvent) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
    console.log(mouseCoordinates);
  };

  return (
    <MouseCoordinatesProvider coordinates={mouseCoordinates}>
      <div className="page" onClick={handleClick} onDragOver={allowDrop} onMouseMove={getMouseCoordinates}>
        {children}
      </div>
    </MouseCoordinatesProvider>
  );
}

export default Page;
