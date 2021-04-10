import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

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

export default ArtBoard;
