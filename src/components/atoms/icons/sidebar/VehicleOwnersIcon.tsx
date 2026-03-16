import React from 'react'

const VehicleOwnersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 18C3 14.686 6.134 12 10 12C13.866 12 17 14.686 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default VehicleOwnersIcon
