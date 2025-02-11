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
    <div className={styles.robotEntry} onMouseEnter={() => handleMouseEnter("Our 2021 robot ANNA : Using the latest technology in the robot industry and the best ai we could find we created a beast of a robot that can code anything that we need")} onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <Image src='/ananna.png' alt="i hate this" width={600} height={336} />
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
