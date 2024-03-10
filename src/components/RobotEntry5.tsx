import React, { useState } from 'react';
import Image from 'next/image';
import styles from "../styles/_robotentry.module.scss";

const RobotEntry: React.FC = () => {
  const [hoveredRobot, setHoveredRobot] = useState<string | null>(null);

  const handleMouseEnter = (content: string) => {
    setHoveredRobot(content);
  };

  const handleMouseLeave = () => {
    setHoveredRobot(null);
  };

  return (
    <div className={styles.robotEntry} onMouseEnter={() => handleMouseEnter("Our 2023 robot Overkill:blah blah blah")} onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <Image src='/robot2023.jpg' alt="i hate this" width={600} height={336} />
      </div>
      {hoveredRobot && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipContent}>{hoveredRobot}</div>
        </div>
      )}
    </div>
    
    
  );
};

export default RobotEntry;
