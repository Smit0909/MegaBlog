import React from "react";
import logo from "../Logo/megaBlogLogo.jpg";

function Logo({ width = "100px", className = "" }) {
  return (
    <img
      src={logo}
      alt="Logo"
      className={`h-10 w-10 rounded-xl overflow-hidden ${className}`}
    />
  );
}

export default Logo;
