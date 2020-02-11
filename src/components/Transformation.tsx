import React, { ReactNode, useState } from "react";

export default function useTransformation(child: ReactNode) {
  const [coordinates, setCoordinates] = useState<any>({x: 0, y: 0});
  const [moveStart, setMoveStart] = useState<any>({x: 0, y: 0});
  const [focused, setFocused] = useState<Boolean>(false);

  const dragStart = (e: React.DragEvent) => {
    // @ts-ignore
    setMoveStart({x: e.target?.offsetLeft, y: e.target?.offsetTop})
    console.log(moveStart)
  }

  const dragEnd = (e: React.DragEvent) => {
    debugger;
    console.log(e);
  }



  const handleFocus = () => {
    if (focused) return;
    setFocused(true);
  }

  const handleBlur = () => {
    setFocused(false);
  }

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
        <div className={`handle ${focused ? "focused" : null}`}>
          {child}
        </div>
      </div>
    </>
  )
}