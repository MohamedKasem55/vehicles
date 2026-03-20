import React from 'react'

const SaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Outer body */}
    <rect x="2.25" y="2.25" width="13.5" height="13.5" rx="0.5" stroke="#406F59" strokeWidth="2" />
    {/* Top label window */}
    <rect x="5.25" y="2.25" width="6" height="3.75" stroke="#406F59" strokeWidth="2" />
    {/* Bottom storage area */}
    <rect x="5.25" y="9.75" width="7.5" height="6" rx="0.5" stroke="#406F59" strokeWidth="2" />
  </svg>
)

export default SaveIcon
