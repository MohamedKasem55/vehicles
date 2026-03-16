import React from 'react'

const VehicleCompaniesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="7" x2="7" y2="18" stroke="currentColor" strokeWidth="1.5" />
    <line x1="13" y1="7" x2="13" y2="18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default VehicleCompaniesIcon
