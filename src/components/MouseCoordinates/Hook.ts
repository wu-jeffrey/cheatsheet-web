import React from "react";

import {Context} from './Context'

export function useMouseCoordinates() {
  return React.useContext(Context);
};
