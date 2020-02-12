import React, { useState } from "react";
// @ts-ignore
import { EditableMathField } from "react-mathquill";
import useTransformation from "./Transformation";

interface Coordinates {
  x: number;
  y: number;
}
interface Props {
  position: Coordinates;
}

export default function MathInput(props: Props) {
  const { position } = props;
  const [latex, setLatex] = useState<string>("");

  return useTransformation(
    <EditableMathField
      latex={latex}
      onChange={(mathField: any) => {
        setLatex(mathField.latex());
      }}
    />,
    position
  );
}
