import * as React from "react";
import { render } from "react-dom";
import { useEffect } from "react";

function App() {
  console.log("Execution reaches here..");

  useEffect(() => {
    console.log("..but this never gets triggered.");
  }, []);

  return <div />;
}

render(<App />, document.getElementById("root"));
