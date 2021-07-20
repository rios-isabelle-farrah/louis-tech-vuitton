import axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { apiURL } from "./util/apiURL.js";
import Index from "./Pages/Index.js";
import Home from "./Pages/Home.js";
import Show from "./Pages/Show.js";
import NavBar from "./Components/NavBar.js";
const API = apiURL();

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shirts">
              <Index />
            </Route>
            <Route exact path="/shirts/:id">
              <Show />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;