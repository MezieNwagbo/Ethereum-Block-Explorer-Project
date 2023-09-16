import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import "./block-details.css";

const BlockTransactions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state;

  const { transactions, number } = from;
  return (
    <div>
      <h3
        onClick={() => console.log(from)}
        style={{
          color: "#fff",
          textShadow: "1px 1px 1px #000",
        }}
      >
        Block Transactions {number && `- ${number}`}
      </h3>

      <div className="block-transactions-section">
        {transactions.map((item) => {
          return (
            <h4
              onClick={() => {
                navigate("transaction-details", { state: { data: item } });
                console.log(item);
              }}
            >
              {item.slice(0, 20) + "..."}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default BlockTransactions;
