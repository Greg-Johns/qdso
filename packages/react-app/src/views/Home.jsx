import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";
import cat from "../assets/cat.svg";

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

export default Home;
