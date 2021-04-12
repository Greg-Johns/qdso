import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import CanvasDraw from "react-canvas-draw";
import { Link, useHistory } from "react-router-dom";
// import Canvas from "../components/Canvas";
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
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const DEBUG = true

const targetNetwork = NETWORKS['mumbai']; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

const localProviderUrl = targetNetwork.rpcUrl;

const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;

const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);

const Game = () => {
  const [injectedProvider, setInjectedProvider] = useState();
  const wordsArray = ['cat', 'dog', 'mouse'];
  const canvasEl = useRef(null);
  const history = useHistory();

  const gasPrice = useGasPrice(targetNetwork,"fast");
  const userProvider = useUserProvider(injectedProvider, localProvider);
  const tx = Transactor(userProvider, gasPrice)

  const writeContracts = useContractLoader(userProvider)
  if(DEBUG) console.log("writeContracts", writeContracts)

  const getRandomWord = async () => {
    const result = await tx( writeContracts.RandomNumberConsumer.getRandomNumber(92834571));
    if(result) {
      console.log("RESULT:", result)
    }
  }

  return (
    <div css={st.gameBoard}>
      <hr />
      <h3>Welcome</h3>
      <h2>Player 3</h2>
      <span css={st.orangeChip}>4</span>
      {/* <p css={st.script}>Still waiting on 2 more players</p> */}
      {/* <button
        onClick={() => {
          canvasEl.current.loadSaveData(localStorage.getItem("savedDrawing"));
        }}
      >
        load saved
      </button> */}
      <CanvasDraw
        css={st.paper}
        ref={canvasEl}
        brushRadius='8'
        hideInterface
        hideGrid
        canvasWidth="88vw"
        saveData
      />
      <div css={st.opponents}>
        <span css={st.redChip}>1</span>
        <span css={st.yellowChip}>2</span>
        <span css={st.purpleChip}>3</span>
        <span css={st.blankChip}>5</span>
        <span css={st.blankChip}>6</span>
      </div>
      <button
        onClick={() => getRandomWord()}
      >
        wordUp
      </button>
      <button
        onClick={() => {
          localStorage.setItem(
            "savedDrawing",
            canvasEl.current.getSaveData()
          );
          history.push("/yeehaw");
        }}
      >
        End Game
      </button>
      <Link className="sm" to="/">
        Home
      </Link>
    </div>
  )
};

export default Game;
