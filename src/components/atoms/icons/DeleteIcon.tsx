import React from "react";

const DeleteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Handle tab */}
    <rect x="6" y="1.5" width="6" height="3" rx="0.5" stroke="currentColor" strokeWidth="2" />
    {/* Lid bar */}
    <line x1="2.25" y1="4.5" x2="15.75" y2="4.5" stroke="currentColor" strokeWidth="2" />
    {/* Body */}
    <rect x="3.75" y="4.5" width="10.5" height="12" rx="0.5" stroke="currentColor" strokeWidth="2" />
    {/* Left inner line */}
    <line x1="7.5" y1="8.25" x2="7.5" y2="12.75" stroke="currentColor" strokeWidth="2" />
    {/* Right inner line */}
    <line x1="10.5" y1="8.25" x2="10.5" y2="12.75" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default DeleteIcon;
