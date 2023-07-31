import React, { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { IoMdAlarm } from "react-icons/io";
function Timer() {
  const [showTimer, setShowTimer] = useState(false);
  const [time, setTime] = useState(0);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  useEffect(() => {
    let intervalId;
    if (showTimer) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [showTimer]);
  return (
    <>
      {showTimer ? (
        <div className="flex items-center space-x-2 p-1.5 bg-dark-fill-3 cursor-pointer rounded hover:bg-dark-fill-2">
          <div>{formatTime(time)}</div>
          <FiRefreshCcw
            onClick={() => {
              setShowTimer(false);
              setTime(0);
            }}
          />
        </div>
      ) : (
        <div
          className="flex items-center p-1 h-8 hover:bg-dark-fill-3 rounded cursor-pointer"
          onClick={() => setShowTimer(true)}
        >
          <IoMdAlarm size={27} />
        </div>
      )}
    </>
  );
}

export default Timer;
