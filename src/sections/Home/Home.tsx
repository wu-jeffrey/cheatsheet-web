import React from "react";
import {useHistory} from 'react-router';

export default function Home() {
  const history = useHistory();

  return (
    <>
      <h1> HOME </h1>
      <button onClick={() => history.push({pathname: "/editor"})}> editor </button>
    </>
  );
}
