import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import cat from "../assets/cat.svg";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const Home = () => {
  return (
    <div css={st.bg}>
      <div css={st.poster}>
        <img css={st.posterImg} src={cat} />
        <h1>
          <span css={css`
            ${st.rodeo};
            border-style: double none double none;
          `}>
            Quick Draw
            <b>Shoot Out</b>
          </span>
        </h1>
        <ul>
          Fastest guesser wins
          <li>Fame</li>
          <li>Fortune</li>
          <li>& A Non-Fungible Trophy</li>
        </ul>
        <Link css={st.trigger} to="/wanted">Draw</Link>
        <br />
        <Link css={css`margin: 0;`} to="/how">{'< ? >'}</Link>
      </div>
      <Link css={st.rodeo} to="/about">about QDSO</Link>
    </div>
  )
};

const About = () => {
  return (
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <h1>About</h1>
      <h2>QDSO</h2>
    </div>
  )
};

const How = () => {
  return (
    <div>
      <h1>How</h1>
      <Link to="/qdso">
        Home
      </Link>
    </div>
  )
};

const Wanted = () => {
  return (
    <div css={st.bg}>
      <div css={st.poster}>
        <h1><span css={st.rodeo}>Wanted</span></h1>
        <Link to="/qdso">Home</Link>
        <h4>All Crypto Artists:</h4>
        <h6>Anti-up</h6>
        <p>
        All right Hucklberry, think you got what it takes? Connect your wallet, throw some xDia in the pot and play a game or two.
        </p>
        <p>
          Your .002 Gwei anti will get you into the Shootout Saloon and a seat at the table. Once six players sit down then the fun begins.
        </p>
        <h6>Bounty for the best guesser</h6>
        <p>
          Win your own NFT art but remember, crypto is like the wild west, keep your eyes out and be ready to draw...
        </p>
        <h2><span css={st.rodeo}>NFT REWARDS</span></h2>
        <Link css={css`${st.trigger}; margin-bottom: 30px;`} to="/game">Enter Saloon</Link>
      </div>
    </div>
  )
};

const Game = () => {
  return (
    <div css={st.gameBoard}>
      <hr />
        <h3>Welcome</h3>
        <h2>Player 3</h2>
        <span css={st.player} />
        <p>Still waiting on 2 more players</p>
        <div css={st.opponents}>
          <span css={st.op} />
          <span css={st.op} />
          <span css={st.op} />
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

const Yeehaw = () => {
  return (
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <Link to="/leaderboard">
        Leader Board
      </Link>
      <Link to="/artboard">
        Art Board
      </Link>
      <h1>Yeehaw</h1>
    </div>
  )
};

const LeaderBoard = () => {
  return (
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <h1>Leader Board</h1>
    </div>
  )
};

const ArtBoard = () => {
  return (
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <h1>Art Board</h1>
    </div>
  )
};

const QDSO = () => {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/qdso" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/how" component={How} />
            <Route exact path="/wanted" component={Wanted} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/yeehaw" component={Yeehaw} />
            <Route exact path="/leaderboard" component={LeaderBoard} />
            <Route exact path="/artboard" component={ArtBoard} />
          </Switch>
        </BrowserRouter>
      </div>
  )
}

export default QDSO;
