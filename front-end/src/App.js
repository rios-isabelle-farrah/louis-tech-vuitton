import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import NewUser from "./Pages/NewUser.js";
import Index from "./Pages/Index.js";
import Login from "./Pages/Login.js";
import Home from "./Pages/Home.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import New from "./Pages/New.js";
import { useState } from "react";


function App() {
const [ currentUser, setCurrentUser ] = useState(null)

  return (
    <div className="App">
      <Router>
        <NavBar className="nav"/>
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
            {/* pass state to index */}
            <Route exact path="/shirts">
              <Index currentUser={currentUser}/>
            </Route>
            <Route exact path="/users/login/">
              <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/users/login/new_user">
              <NewUser />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
