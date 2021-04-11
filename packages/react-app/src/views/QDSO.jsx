import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import How from "./How";
import Wanted from "./Wanted";
import Game from "./Game";
import Yeehaw from "./Yeehaw";
import ArtBoard from "./ArtBoard";
import LeaderBoard from "./LeaderBoard";

const QDSO = (props) => {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/qdso" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/how" component={How} />
            <Route exact path="/wanted" component={Wanted} />
            <Route exact path="/game">
              <Game />
            </Route>
            <Route exact path="/yeehaw">
              <Yeehaw props={props} />
            </Route>
            <Route exact path="/leaderboard" component={LeaderBoard} />
            <Route exact path="/artboard" component={ArtBoard} />
          </Switch>
        </BrowserRouter>
      </div>
  )
}

export default QDSO;
