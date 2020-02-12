import React from "react";
import { Context } from "./Context";

interface Coordinates {
  x: number;
  y: number;
}

interface Props {
  children: React.ReactNode;
  coordinates: Coordinates;
}

function Provider({ children, coordinates }: Props) {
  return <Context.Provider value={coordinates}>{children}</Context.Provider>;
}

export default React.memo(Provider);
