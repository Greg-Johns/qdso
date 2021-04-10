import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as st from "./GameStyles";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';
const About = () => {
  return (
    <div>
      <Link to="/qdso">
        Home
      </Link>
      <h1>About</h1>
      <h2>QDSO</h2>
      <a href="https://github.com/Greg-Johns/qdso">Github</a>
    </div>
  )
};

export default About;
