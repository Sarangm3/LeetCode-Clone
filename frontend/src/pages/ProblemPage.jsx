import React, { useEffect, useState } from "react";
import TopBar from "../components/navbar/TopBar";
import WorkSpace from "../components/workSpace/workSpace";
import { useParams } from "react-router-dom";
import { problems } from "../utils/problems";

function ProblemPage() {
  const pid = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    // Fetch the problem data based on the pid parameter
    const fetchProblemData = async () => {
      const problemData = problems[pid.name];
      if (problemData) {
        problemData.handlerFunction = problemData.handlerFunction.toString();
        setProblem(problemData);
      } else {
        // Handle the case when the problem is not found
        console.log("Problem not found");
      }
    };

    fetchProblemData();
  }, []);

  if (!problem) {
    return null; // You can render a loading spinner or a "Problem not found" message here
  }
  return (
    <>
      <TopBar problemPage={true} />
      <WorkSpace problem={problem} />
    </>
  );
}

export default ProblemPage;
