import React from "react";

interface BaseProps {
  x: number;
  y: number;
  rotation: number;
  onClick?: () => {};
}
class Editable extends React.Component {
  constructor(props: BaseProps) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      rotation: props.rotation,
    }
  }
}

export default Editable;