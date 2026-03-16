import React from 'react'

const PrintPermitsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="13" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 14V7H15V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10H2C1.448 10 1 10.448 1 11V15C1 15.552 1.448 16 2 16H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 10H18C18.552 10 19 10.448 19 11V15C19 15.552 18.552 16 18 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="5" y1="2" x2="15" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="5" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default PrintPermitsIcon
