import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const foo = css`
  display: grid;
  height: 100vh;
  background-color: #08A546;
`;

const Home = () => {
  return (
    <div>
      <h1>Qick Draw Shoot Out</h1>
      <p>
        Fastest guesser wins
        <ul>
          <li>Fome</li>
          <li>Foutune</li>
          <li>&</li>
          <li>A Non-Fungable Trophy</li>
        </ul>
      </p>
      <Link to="/wanted">Draw</Link>
      <Link to="/how">?</Link>
      <Link to="/about">about QDSO</Link>
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
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <Link to="/game">
        Enter Saloon
      </Link>
      <h1>Wanted</h1>
    </div>
  )
};

const Game = () => {
  return (
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <Link to="/yeehaw">
        End
      </Link>
      <h1>Game</h1>
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
