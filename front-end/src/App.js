import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Pages/Index.js";
import Home from "./Pages/Home.js";
import Show from "./Pages/Show.js";
import New from "./Pages/New.js";
import NavBar from "./Components/NavBar.js";
import Edit from "./Pages/Edit.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/shirts/:id/edit">
              <Edit />
            </Route>
            <Route exact path="/shirts/new">
              <New />
            </Route>
            <Route exact path="/shirts/:id">
              <Show />
            </Route>
            <Route exact path="/shirts">
              <Index />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
