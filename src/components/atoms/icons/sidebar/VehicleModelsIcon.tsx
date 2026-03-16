import React from 'react'

const VehicleModelsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 11L5 7H15L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="1" y="11" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default VehicleModelsIcon
