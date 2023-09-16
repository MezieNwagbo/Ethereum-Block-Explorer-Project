import React, { useEffect, useState } from "react";
import Block from "./Block";
import "./blocks.css";
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const LatestBlocks = () => {
  const [blockNumber, setBlockNumber] = useState();
  // const [blockData, setBlockData] = useState();
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [blockQueryData, setBlockQueryData] = useState({});
  const [query, setQuery] = useState("");
  const [searchOn, setSearchOn] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getBlockDetails() {
    if (latestBlocks.length >= 10) {
      return;
    }
    const latestBlock = await alchemy.core.getBlockNumber();
    const blockDetails = await alchemy.core.getBlock(latestBlock);
    setBlockNumber(latestBlock);
    // setBlockData({ blockDetails });
    // Push data into the array

    if (latestBlocks[latestBlocks.length - 1]?.number !== latestBlock) {
      setLatestBlocks([...latestBlocks, blockDetails]);
    }

    console.log(
      "Latest Block: ",
      latestBlock,
      "previous block number: ",
      latestBlocks[latestBlocks.length - 1]
    );
  }

  //for search
  async function getBlockQueryDetails(blockQuery) {
    setLoading(true);
    const blockQueryDetails = await alchemy.core.getBlock(blockQuery);
    setBlockQueryData({ ...blockQueryDetails });
    setLoading(false);
    console.log(blockQueryDetails);
  }

  useEffect(() => {
    const intervalId = setInterval(getBlockDetails, 5000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [latestBlocks]);

  useEffect(() => {
    getBlockQueryDetails(parseInt(query));
  }, blockQueryData);

  return (
    <>
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          placeholder="Search block here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <h4
          onClick={() => {
            setSearchOn(true);
            getBlockQueryDetails(parseInt(query));
          }}
        >
          Search
        </h4>
      </div>
      <div className="latest-blocks-container">
        <div className="blocks-navigation">
          <h2>{searchOn ? "Search results" : "Latest Blocks"}</h2>
          <h3
            onClick={() => setSearchOn(false)}
            className="back-to-latest-blocks"
          >
            {searchOn ? "Back to latest blocks" : <></>}
          </h3>
        </div>

        <div className="latest-blocks">
          {searchOn ? (
            loading ? (
              <h3>Searching...</h3>
            ) : (
              <div>
                <Block blockDetails={blockQueryData} />
              </div>
            )
          ) : (
            latestBlocks.map((block) => {
              return <Block blockDetails={block} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default LatestBlocks;
