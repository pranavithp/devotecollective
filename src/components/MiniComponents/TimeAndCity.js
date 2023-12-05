import React, { useState, useEffect } from "react";

function TimeandLocation() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    function formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString([], options);
    }

    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
    }

    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentDate(formatDate(now)); // Update the formatted date
      updateTime(); // Update the time every second
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="DateandTime">
      <div id="currentDate">{currentDate}</div>
      <div id="currentTime">{currentTime}</div>
    </div>
  );
}

export default TimeandLocation;
