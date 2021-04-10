import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';

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

export default How;
