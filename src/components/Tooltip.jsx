import React from "react";

function Tooltip({ children }) {
  return (
    <div>
      <p className="text-2xl text-center leading-6">{children}</p>
    </div>
  );
}

export default Tooltip;
