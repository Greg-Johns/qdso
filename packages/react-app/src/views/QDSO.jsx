import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const foo = css`
  display: grid;
  height: 100vh;
  background-color: #08A546;
`;

const QDSO = () => {
  return (
      <div css={foo}>
        <h1>Quick Draw Shoot Out</h1>
        <p>
          Fastest guesser wins
          <ul>
            <li>Fome</li>
            <li>Foutune</li>
            <li>&</li>
            <li>A Non-Fungable Trophy</li>
          </ul>
        </p>
        <button class="btn">Draw</button>
      </div>
  )
}

export default QDSO;
