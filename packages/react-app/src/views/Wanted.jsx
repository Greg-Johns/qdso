import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const Wanted = () => {
  return (
    <div css={st.bg}>
      <div css={st.poster}>
        <h1><span css={st.rodeo}>Wanted</span></h1>
        <Link to="/">Home</Link>
        <h4>All Crypto Artists:</h4>
        <h6>Anti-up</h6>
        <p>
          All right Huckleberry, think you got what it takes? Connect your wallet, throw some xDia in the pot and play a game or two.
        </p>
        <p>
          Your .002 Gwei anti will get you into the Shootout Saloon and a seat at the table. Once six players sit down then the fun begins.
        </p>
        <h6>Bounty for the best guesser</h6>
        <p>
          Win your own NFT art but remember, crypto is like the wild west, keep your eyes out and be ready to draw...
        </p>
        <h2><span css={st.rodeo} style={{color: "brown"}}>NFT REWARDS</span></h2>
        <Link css={css`${st.trigger}; margin-bottom: 30px;`} to="/game">Enter Saloon</Link>
      </div>
    </div>
  )
};

export default Wanted;
