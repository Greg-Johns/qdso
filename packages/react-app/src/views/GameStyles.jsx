// import React, { useState } from "react";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { injectGlobal } from '@emotion/css'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'GloriaHallelujah';
    font-style: normal;
    font-weight: 400;
    src: local('GloriaHallelujah'),
      local('GloriaHallelujah'),
      url(../assets/Gloria_Hallelujah/GloriaHallelujah-Regular.ttf)
        format('truetype');
  }
  @font-face {
    font-family: 'Rodeo';
    font-style: normal;
    font-weight: 400;
    src: local('Rodeo'),
      local('Rodeo'),
      url(../assets/Rodeo.ttf)
        format('truetype');
  }
`;

export const noise = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAYAAABU1PscAAAEr0lEQVRYhW2Yy5FkIQwE5YBueIMPmIM3GIE3eMMeepPJVvRhY3veB0qlUkm8OOfkGCNba3nOyTlnzjlzjJFrrdx7Z2st55zZe885Z7bWcu+d994cY2REZO/9XV9rZe89xxg558xzTt57c86Ze++vfVhzrZUR8fbae2fvPXvvGRG51srWWt57v/AEi997c++dEfFurrXe73vv2xiwBDPGeM+31l5APNt7/wps7/1AQxz/33tf8BB0znlEQgSkR0T8zEBr7YE457xgCJLn11rvHhudc/Kc88BW1scYLzsA4zkCIwgysdZ6AXJ9zpnhNAGal2GotfYlJ0BHxAMN2N77CwyQEASbBEKmCJD9q4xgHmwQdM7JMMOWDVHyN5kCDJtExNMlQB47/+VYZWCQZhdwJg1iWRPgqCR42MXs4kL/sOEUW8ewCvAK0JuTGVjlukFSlwTh9XkmIj4ZsP5gAslYGk6lncWMuTDJjIOA7QqEa64JsmFsEfGVlUA+bAgIOw6F6yKlTrhux/J71S655gwRMOsTBNdsMMZ2zvkEgPVR4bZIAgM0gAFvMC5oX6cOnK0qSUvTtWKZuuAfsVQ2L1dp4CakDglVfcMMwdHoYBSmIYV9kSUGwT2vyd6W1asPp7E2ocooUvIGe++XNTcyOxVBQcbTb8lgNRDepeCd0Wf/pLdam53CQOwEBl27rlnmGgz/sly7j8l0YduSyVjwIEGgcZh2W2chFiGNdiozZC8HGGsRRLVbpIKcTaRVwd9Baq1tjxZoGKCwAsMGycIETk9wNgwO8jymVEsH6C+zaK19XIhF+M3CrnacCPat5zpl2gTIrIPwfaRVMdidbASW4Forow5jHhVseWbYTmCWcB87jYPgt4vRIwTrm0AXeG2ue+9PEbtQ7DxonGcAzDPYm3XuHuBmBJg6CDIyUHNuig7KQ6cxhhtS1bUZdWf1DG/mq1RsBNV9zKIPTybhDWwaJF2fa62PC1ln9TBipt1oPMP7neoY7qQuPmeGYicAO5FJsa2/afiXL3vOgWHkU1NIduohxhomc36uTq8AQ2KeiepEimzfKGEd1xdd8bZBWAZUdQs7idNOQbtO3KDeQUUTqu/XOSvsAN7YBevqt3ysxXostf36PXpOrSf2cCZNDgHZteacfzXgkcIjLAtXJtA4TmJAnp1s0+68rh0fmAyS53y/BhX4ufVXu59nDwfpTx0uWGvYI4StkRpz4PVkaAnVeUs1+Tem+rDgc2r9YlCPeLZY1sK56pDmDvvL1fysa8ISZJ85Z4Z91yD49zX5yerwfjsNLOJi7uTuJx4hbAjVxcicj6oeBHvvGW4staHVFu7frhPP8PWo6D7gSdZHSWrF2be51NH9qz/5MOMirDOJde2GxLgBm/6e5BMXmYUozzRcI7M+Ifqk5pH9fUk04Ncc1KzczFyUzpK/Enj4A7zdx4H55AdwN72Ko44aa62/GqjMEiUvuqO6qHnOWoYMa9VgvQ9kuBtjAO7aXLdJrLU+NYDFeZ7hYX/E8uIeL+pwZ68nAz4r1C91VW7gqZL2qZF6Chb2YZtFPe+7oAjWBelTXbU9Z9QOVKdN1uD/rw9YOrm5M/8DNoCiyP8tLEcAAAAASUVORK5CYII=')";

export const gameBoard = css`
  background-color: green;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const playingArea = css`
  border: 1px dashed pink;
`;

export const player = css`
  width: 100px;
  height: 100px;
  border: 3px solid grey;
  border-radius: 50%;
`;

export const op = css`
  width: 40px;
  height: 40px;
  border: 3px solid grey;
  border-radius: 50%;
`;

export const opponents = css`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid gold;
`;

export const bg = css`
  max-width: 600px;
  text-align: center;
  height: 100vh;
  background-color: #D7CDBE;

  @media (min-width: 600px) {
    width: 80vw;
  }
`;

export const poster = css`
  background: ${noise};
	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.4), inset 0 0 50px rgba(0, 0, 0, 0.2);

  &:before,
  &:after {
    position: absolute;
    width: 30%;
    height: 10px;
    content: ' ';
    left: 12px;
    bottom: 12px;
    background: transparent;
    transform: skew(-5deg) rotate(-5deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
    z-index: -1;
  };

  &:after {
    left: auto;
    right: 12px;
    border-left: 4px solid blue;
    transform: skew(5deg) rotate(5deg);
  }
`;

export const posterImg = css`
  width: 80%;
  margin: 40px 0;
  margin-top: 0px;
`;

export const script = css`
  font-family: GloriaHallelujah;
`;

export const rodeo = css`
  padding: 12px;
  font-family: Rodeo;
  font-weight: 900;
  line-height: normal;
  display: inline-block;
`;

export const trigger = css`
  color: white;
  background-color: #FF664D;
  margin-bottom: 20px;
  padding: 8px 20px;
  display: inline-block;
  border-radius: 6px;
  font-size: 1.2rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #CD4630;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;