import React from "react";
import BlockIcon from "../../assets/cube.png";
import moment from "moment/moment";
import { Link } from "react-router-dom";

import "./blocks.css";

const Block = ({ blockDetails }) => {
  const { number, timestamp, miner, transactions } = blockDetails;

  const centerItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="block">
      <div className="block-img-container">
        <img src={BlockIcon} alt={"block-icon"} />
      </div>
      <div style={centerItem}>
        <h3>Block Number: {number}</h3>
      </div>
      <div>
        <p>
          Mined by: <b>{miner.slice(0, 10) + "..."}</b>
        </p>
        <p>Mined on: {timestamp} </p>
      </div>
      <div>
        <h3>{transactions.length} Transactions</h3>
        <Link to="/block-transactions" state={{ from: blockDetails }}>
          See Transactions...
        </Link>
      </div>
      <div>
        <br />
        <Link to="block-details" state={{ from: blockDetails }}>
          <p>See block details... </p>
        </Link>
      </div>
    </div>
  );
};

export default Block;
