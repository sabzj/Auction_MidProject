import React from "react";
import { Link } from "react-router-dom";
import "./leftHandContainer.css";
function LeftHandComponent() {
  return (
    <>
      <div className="leftHandContainer">
        <Link to={"/create"}>Create Auction</Link>
        <Link to={"/create"}>Create Auction</Link>
        <Link to={"/create"}>Create Auction</Link>
        <Link to={"/create"}>Create Auction</Link>
      </div>
    </>
  );
}

export default LeftHandComponent;
