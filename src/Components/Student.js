import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Student = () => {
  // Detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Runs every time it enters the viewport
    threshold: 0.5, // Triggers when 50% of the section is visible
  });

  // Force re-render by changing key when inView
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div className="student-container" ref={ref}>
      <h2 className="student-heading">Student Statistics</h2>

      <div className="student-details">
        {/* Total Students */}
        <div className="student-stat">
          <h3>Total Students</h3>
          <CountUp key={animationKey} start={0} end={1000} duration={2} separator="," />
        </div>

        {/* Boys Count */}
        <div className="student-stat">
          <h3>Number of Boys</h3>
          <CountUp key={animationKey + 1} start={0} end={600} duration={2} separator="," />
        </div>

        {/* Girls Count */}
        <div className="student-stat">
          <h3>Number of Girls</h3>
          <CountUp key={animationKey + 2} start={0} end={400} duration={2} separator="," />
        </div>
      </div>
    </div>
  );
};

export default Student;



