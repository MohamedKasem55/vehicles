import React from 'react'

const VehicleAssignmentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="7" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 10L16 8H19V15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4.5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15.5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default VehicleAssignmentIcon
