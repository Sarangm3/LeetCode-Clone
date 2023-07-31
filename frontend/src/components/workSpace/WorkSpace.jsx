import React from "react";
import Split from "react-split";
import ProblemDescription from "./problemDescription/ProblemDescription";
import Playground from "./playground/Playground";
function WorkSpace({ problem }) {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground problem={problem} />
    </Split>
  );
}

export default WorkSpace;
