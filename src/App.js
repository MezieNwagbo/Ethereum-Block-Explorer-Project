import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import BlockTransactions from "./pages/BlockTransactions";
import BlockDetails from "./pages/BlockDetails";
import TransactionDetails from "./pages/TransactionDetails";
import Header from "./components/header/Header";

import { Routes, Route } from "react-router-dom";
import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  // const [blockNumber, setBlockNumber] = useState();

  // useEffect(() => {
  //   async function getBlockNumber() {
  //     setBlockNumber(await alchemy.core.getBlockNumber());
  //   }

  //   getBlockNumber();
  // });

  return (
    <div className="App">
      <Header />
      <br />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="block-transactions" element={<BlockTransactions />} />
        <Route path="block-details" element={<BlockDetails />} />
        <Route
          path="/block-transactions/transaction-details"
          element={<TransactionDetails />}
        />
      </Routes>
    </div>
  );
  // return <div className="App">Block Number: {blockNumber}</div>;
}

export default App;
