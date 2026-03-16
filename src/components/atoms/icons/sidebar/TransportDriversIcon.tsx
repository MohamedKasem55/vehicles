import React from 'react'

const TransportDriversIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 18C2 15.239 4.686 13 8 13C9.168 13 10.258 13.3 11.18 13.82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="15" y1="11" x2="15" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="11" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default TransportDriversIcon
