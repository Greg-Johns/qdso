import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';
const About = () => {
  return (
    <div css={st.bg}>
      <Link to="/">
        Home
      </Link>
      <h1>About QDSO</h1>
      <p>
        QDSO is a experiment in
        gaming using blockchains
        smart contracts
        &
        ERC-721’s
        (non-fungible tokens)
      </p>
      <a href="https://github.com/Greg-Johns/qdso">Github</a>
    </div>
  )
};

export default About;
