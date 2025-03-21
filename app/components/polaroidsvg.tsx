import React from "react";

export const PolaroidSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 350"
      className={`w-56 md:w-72 h-auto filter drop-shadow transition-transform duration-300 hover:scale-105 ${props.className || ""}`}
      {...props}
    >
      <rect
        x="20"
        y="20"
        width="260"
        height="310"
        rx="5"
        ry="5"
        fill="white"
        stroke="#e0e0e0"
        strokeWidth="2"
      />
      <rect
        x="40"
        y="40"
        width="220"
        height="220"
        fill="#f5f5f5"
        stroke="#e0e0e0"
        strokeWidth="1"
      />
      <rect x="40" y="260" width="220" height="50" fill="white" />
      <rect
        x="25"
        y="25"
        width="260"
        height="310"
        rx="5"
        ry="5"
        fill="none"
        stroke="#d0d0d0"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M40,40 L50,50 M260,40 L250,50 M40,260 L50,250 M260,260 L250,250"
        stroke="#e0e0e0"
        strokeWidth="1"
      />
    </svg>
  );
};

export default PolaroidSvg;
