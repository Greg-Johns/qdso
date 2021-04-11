import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { Link, useHistory } from "react-router-dom";
// import Canvas from "../components/Canvas";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const Game = () => {
  const wordsArray = ['cat', 'dog', 'mouse'];
  const canvasEl = useRef(null);
  const history = useHistory();

  const getRandomWord = () => {
    console.log("word up")
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
      <Link className="sm" to="/qdso">
        Home
      </Link>
    </div>
  )
};

export default Game;
