import React from 'react'

const SaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Outer body */}
    <rect x="2.5" y="2.5" width="15" height="15" rx="1.5" stroke="currentColor" strokeWidth="2" />
    {/* Top label window */}
    <rect x="5.83" y="2.5" width="6.67" height="4.17" stroke="currentColor" strokeWidth="2" />
    {/* Bottom storage area */}
    <rect x="5.83" y="10.83" width="8.34" height="6.67" rx="0.5" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export default SaveIcon
