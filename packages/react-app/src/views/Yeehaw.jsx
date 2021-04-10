import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

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

export default Yeehaw;
