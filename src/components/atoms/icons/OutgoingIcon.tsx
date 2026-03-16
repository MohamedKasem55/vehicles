import React from 'react'

const OutgoingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path d='M4 14L14 4M14 4H7M14 4V11' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
)

export default OutgoingIcon
