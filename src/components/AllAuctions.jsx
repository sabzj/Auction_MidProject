import React from "react";
import { Link } from "react-router-dom";
import LiveCountdownCard from "../page2/LiveCountdownCard";

function ALLAuctionsInPageTwo() {
  return (
    <div>
      <Link to="/all-auctions">
        <button>All Auctions</button>
      </Link>
      <LiveCountdownCard />
    </div>
  );
}

export default ALLAuctionsInPageTwo;
