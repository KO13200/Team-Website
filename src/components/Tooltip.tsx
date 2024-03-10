import React from 'react';
import styles from '../styles/_Tooltip.module.scss';

interface TooltipProps {
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return content ? <div className={styles.tooltip}>{content}</div> : null;
};

export default Tooltip;