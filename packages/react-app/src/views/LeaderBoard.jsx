import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';


const LeaderBoard = () => {
  return (
    <div>
      <Link to="/">
        Home
      </Link>
      <h1>Leader Board</h1>
    </div>
  )
};

export default LeaderBoard;
