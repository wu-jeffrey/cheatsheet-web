import React from "react";
import {IContext} from './types';

export const Context = React.createContext<IContext>({
  x: 0,
  y: 0,
});
