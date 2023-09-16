import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./header.css";

const Header = () => {
  const navigate = useNavigate("/");
  return (
    <div className="header">
      <h3>Andre Block Explorer</h3>

      <div>
        <h4
          onClick={() => navigate("/")}
          style={{
            cursor: "default",
          }}
        >
          Home
        </h4>
      </div>
    </div>
  );
};

export default Header;
