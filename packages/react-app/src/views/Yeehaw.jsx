import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { useUserAddress } from "eth-hooks";
import {
  useGasPrice,
  useUserProvider,
  useContractLoader,
  useContractReader,
  useEventListener,
  useBalance,
  useExternalContractLoader
} from "../hooks";
import { Transactor } from "../helpers";
import { formatEther, parseEther } from "@ethersproject/units";
import { INFURA_ID, NETWORK, NETWORKS } from "../constants";
import CanvasDraw from "react-canvas-draw";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https'})

const DEBUG = true

const targetNetwork = NETWORKS['localhost']; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

const mainnetProvider = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID)

const localProviderUrl = targetNetwork.rpcUrl;

const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;

const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);

const Yeehaw = ({props}) => {
  const [injectedProvider, setInjectedProvider] = useState();
  const [winningDrawing, setWinningDrawing] = useState();

  const gasPrice = useGasPrice(targetNetwork,"fast");
  const userProvider = useUserProvider(injectedProvider, localProvider);
  const address = useUserAddress(userProvider);
  if(DEBUG) console.log(">>> selected address:",address)

  const tx = Transactor(userProvider, gasPrice)

  const yourLocalBalance = useBalance(localProvider, address);
  if(DEBUG) console.log(">>> yourLocalBalance",yourLocalBalance?formatEther(yourLocalBalance):"...")
  
  const yourMainnetBalance = useBalance(mainnetProvider, address);
  if(DEBUG) console.log(">>> yourMainnetBalance",yourMainnetBalance?formatEther(yourMainnetBalance):"...")

  if(DEBUG) console.log(">>> selected address:",address)
  // Load in your local 📝 contract and read a value from it:

  const readContracts = useContractLoader(localProvider)
  if(DEBUG) console.log(">>> readContracts",readContracts)

  // If you want to make write transactions to your contracts, use the userProvider:
  const writeContracts = useContractLoader(userProvider)
  if(DEBUG) console.log("writeContracts", writeContracts)

  const balance = useContractReader(readContracts,"NFTrophy", "balanceOf", [ address ]) * 1;
  console.log(">>> balance:", balance)

  const awardWinner = async () => {
    //foobar = svg img
    // const result = await ipfs.add(JSON.stringify({ "foo": "bar" }));
    const result = await ipfs.add(JSON.stringify(winningDrawing));
    if(result && result.path) {
      tx( writeContracts.NFTrophy.mint(address, result.path));
    }
    console.log("RESULT:",result)
  };

  const canvasEl = useRef(null);

  useEffect(() => {
    canvasEl.current.loadSaveData(localStorage.getItem("savedDrawing"));
  }, []);

  return (
    <div>
      <h4>Minting the winners drawing</h4>
      <CanvasDraw
        ref={canvasEl}
        brushRadius='8'
        hideInterface
        hideGrid
        canvasWidth="88vw"
      />

      <Link to="/qdso">
        Home
      </Link>
      <Link to="/leaderboard">
        Leader Board
      </Link>
      <Link to="/artboard">
        Art Board
      </Link>

      <button onClick={() => awardWinner()}>Award Winner</button>
    </div>
  )
};

export default Yeehaw;
