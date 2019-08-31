import * as React from "react";
import { render } from "react-dom";
import { useEffect, useState, useLayoutEffect } from "react";

export function useBackgroundKeepaliveHack() {
  const [tick, setTick] = useState(0);
  useLayoutEffect(() => {
    setTick(1);
    setInterval(() => setTick(prev => prev + 1), 1000);
  }, []);
}

function App() {
  console.log("Execution reaches here..");

  useEffect(() => {
    console.log("..but this never gets triggered.");
  }, []);

  // If you uncomment the below line then it works..
  //useBackgroundKeepaliveHack();

  return <div />;
}

render(<App />, document.getElementById("root"));
