import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import NewUser from "./Pages/NewUser.js";
import Index from "./Pages/Index.js";
import Login from "./Pages/Login.js";
import Home from "./Pages/Home.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import New from "./Pages/New.js";

// const [user, setUser] = useState({
//   username: "",
//   password: "",
// });

// get req - so state can be passed down to login to shirts
// const addUser = async (newUser) => {
//   try {
//     await axios.post(`${API}/users`, newUser);
//     // console.log(newUser)
//     goBack();
//   } catch (error) {
//     console.log(error);
//   }
// };

// // SHOW
// const getUser = async () => {
//   try {
//     await axios.get(`${API}/users/login`, username);
//     // console.log(user);
//     goBack();
//   } catch (error) {
//     console.log(error);
//   }
// };


// const handleTextChange = (event) => {
//   setUser({ ...user, [event.target.id]: event.target.value });
// };

function App() {
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
              <Index />
            </Route>
            <Route exact path="/users/login/">
              <Login />
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
