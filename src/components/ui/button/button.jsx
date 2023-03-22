import React from "react";

import "./style.css";

function Button({ children }) {
  return (
    <button className="Button" type="button">
      {children}
    </button>
  );
}

export default Button;
