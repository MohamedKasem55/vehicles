import React from 'react'

const HajjVehiclesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="6" width="18" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 10H19" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="6" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="6" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="15" y1="6" x2="15" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default HajjVehiclesIcon
