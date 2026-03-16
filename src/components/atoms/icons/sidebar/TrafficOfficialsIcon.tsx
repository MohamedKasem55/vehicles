import React from 'react'

const TrafficOfficialsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="7" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 17C1 14.239 3.686 12 7 12C10.314 12 13 14.239 13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 12.5C13.6 12.18 14.3 12 15 12C17.209 12 19 13.567 19 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default TrafficOfficialsIcon
