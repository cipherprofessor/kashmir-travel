import React from 'react';
import './Tooltip.scss';

const Tooltip = ({ title, value, x, y, className }) => {
  const tooltipStyle = {
    left: `${x}px`, // Absolute positioning
    top: `${y}px`,
    position: 'absolute',
    transform: 'translate(-50%, -100%)', // Centers the tooltip above the cursor
  };

  return (
    <div className={`custom-tooltip ${className}`} style={tooltipStyle}>
      <div className="tooltip-title">{title}</div>
      <div className="tooltip-value">{value}</div>
    </div>
  );
};

export default Tooltip;
