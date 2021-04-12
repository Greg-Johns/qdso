import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const How = () => {
  return (
    <div css={st.bg}>
        <h1>How</h1>
        <p>
          It’s pretty simple, kind of like a virtual pictionary. It goes like this:
        </p>
        <p>
          Six players ante up in to the pot (deposit funds in game contract) where it’s stays until a winner is selected.
          <ol>
            <li>
              The game starts when six players ante up and sit down. Each player will take a turn drawing. The game will randomly select a word using Chainlinks VRF and give it only to that rounds drawer. 
            </li>
            <li>
              Guessers will have 20 seconds to guess the drawing, the first to guess wins the round.
            </li>
            <li>
              After six rounds the player with the most correct guesses wins.
            </li>
          </ol>
        </p>
        <h4>Bounty:</h4>
        <p>
          The winner gets their drawing minted into their very own NFTrophy paid for from the pot. Alternatively the winning player could also select one of the other players drawings to mint. This could ruffle some feathers so the game should allow for a duel mode that let's a player challenge another for any of their NFTrophies where both players are given 6 words to draw while the other 4 players divided into two guessing teams for the dueling drawers.
        </p>
      <Link to="/">
        Home
      </Link>
    </div>
  )
};

export default How;
