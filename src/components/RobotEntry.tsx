import React, { useState } from 'react';
import Image from 'next/image';
import styles from "../styles/_robotentry.module.scss";

const RobotEntry: React.FC = (props) => {
  const [hoveredRobot, setHoveredRobot] = useState<string | null>(null);

  const handleMouseEnter = (content: string) => {
    setHoveredRobot(content);
  };

  const handleMouseLeave = () => {
    setHoveredRobot(null);
  };

  return (
    <div className={styles.robotEntry} onMouseEnter={() => handleMouseEnter(props.desc)} onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <Image src='/5663_2019.jpg' alt="i hate this" width={600} height={336} />
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
