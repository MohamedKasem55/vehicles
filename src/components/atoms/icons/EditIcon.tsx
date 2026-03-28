import React from "react";

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Pencil body */}
    <path
      d="M2.25 15.75L5.625 14.625L13.875 6.375L11.625 4.125L3.375 12.375L2.25 15.75Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Pencil cap */}
    <rect
      x="11.25"
      y="3.75"
      width="3"
      height="3"
      transform="rotate(45 13 3)"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default EditIcon;
