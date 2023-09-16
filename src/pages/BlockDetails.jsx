import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./block-details.css";

const BlockDetails = (props) => {
  const location = useLocation();
  const { from } = location.state;

  const {
    number,
    baseFeePerGas,
    difficulty,
    gasLimit,
    gasUsed,
    miner,
    nonce,
    stateRoot,
    parentHash,
    extraData,
    timestamp,
    hash,
    transactions,
  } = from;

  return (
    <div>
      <h3 className="block-details">Block Details - {number}</h3>

      <div className="block-details-section">
        {" "}
        <h3>Block Number:</h3>
        <p>{number}</p>
        <h3>Base Fee Per Gas:</h3>
        <p>{baseFeePerGas._hex}</p>
        <h3>Difficulty:</h3>
        <p>{difficulty}</p>
        <h3>Gas Limit:</h3>
        <p>{gasLimit._hex}</p>
        <h3>Gas Used:</h3>
        <p>{gasUsed._hex}</p>
        <h3>Miner:</h3>
        <p>{miner.substring(1, 20)}</p>
        <h3>Nonce:</h3>
        <p>{nonce}</p>
        <h3>Parent Hash:</h3>
        <p>{parentHash.substring(0, 20)}</p>
        <h3>Hash:</h3>
        <p>{hash.substring(0, 19)}</p>
        <h3>Extra Data:</h3>
        <p>{extraData.substring(0, 19)}</p>
        <h3>Timestamp:</h3>
        <p>{timestamp}</p>
        <h3>Total Difficulty:</h3>
        <p>000343434</p>
      </div>

      <div className="see-transactions">
        <Link to="/block-transactions" state={{ from: from }}>
          See Block Transactions...
        </Link>
      </div>
    </div>
  );
};

export default BlockDetails;
