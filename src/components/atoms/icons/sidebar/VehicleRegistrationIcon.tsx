import React from 'react'

const VehicleRegistrationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="2" width="10" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 13L9.5 14.5L13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default VehicleRegistrationIcon
