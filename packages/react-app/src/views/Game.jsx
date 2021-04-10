import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const Game = () => {
  return (
    <div css={st.gameBoard}>
      <hr />
        <h3>Welcome</h3>
        <h2>Player 3</h2>
        <span css={st.orangeChip}>4</span>
        <p css={st.script}>Still waiting on 2 more players</p>
        <canvas  css={st.paper}></canvas>
        <div css={st.opponents}>
          <span css={st.redChip}>1</span>
          <span css={st.yellowChip}>2</span>
          <span css={st.purpleChip}>3</span>
          <span css={st.blankChip}>5</span>
          <span css={st.blankChip}>6</span>
        </div>
      <Link className="sm" to="/qdso">
        Home
      </Link>
      <Link className="sm" to="/yeehaw">
        End
      </Link>
    </div>
  )
};

export default Game;
