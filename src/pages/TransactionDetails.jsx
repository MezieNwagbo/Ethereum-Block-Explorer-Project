import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";

import "./block-details.css";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const TransactionDetails = () => {
  const location = useLocation();
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTransactionReceipt() {
    setIsLoading(true);
    const transactionReceipt = await alchemy.core.getTransactionReceipt(
      location.state.data
    );
    setTransactionDetails(transactionReceipt);
    console.log(transactionReceipt);
    setIsLoading(false);
  }

  useEffect(() => {
    getTransactionReceipt();
    console.log("location ", location.state.data);
  }, []);

  return (
    <div>
      <h3 className="block-details">
        Transaction Details - {transactionDetails.blockNumber}
      </h3>

      {isLoading ? (
        <h3>Loading..</h3>
      ) : (
        <div className="block-details-section">
          {" "}
          <h3>Block Number:</h3>
          <p>{transactionDetails.blockNumber}</p>
          <h3>Block Hash:</h3>
          <p>{transactionDetails.blockHash}</p>
          <h3>Transaction Hash:</h3>
          <p>{transactionDetails.transactionHash}</p>
          <h3>From:</h3>
          <p>{transactionDetails.from}</p>
          <h3>To:</h3>
          <p>{transactionDetails.to}</p>
          <h3>Confirmations:</h3>
          <p>{transactionDetails.confirmations}</p>
          <h3>Contract Address:</h3>
          <p>{transactionDetails.contractAddress}</p>
          <h3>Gas Used:</h3>
          <p>{transactionDetails.gasUsed?._hex}</p>
          <h3>Cumulative Gas Used:</h3>
          <p>{transactionDetails.cumulativeGasUsed?._hex}</p>
          <h3>Effective Gas Price:</h3>
          <p>{transactionDetails.effectiveGasPrice?._hex}</p>
          <h3>Status:</h3>
          <p>{transactionDetails.status}</p>
          <h3>TransactionIndex:</h3>
          <p>{transactionDetails.transactionIndex}</p>
          <h3>Type:</h3>
          <p>{transactionDetails.type}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
