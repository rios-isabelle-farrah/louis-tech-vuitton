import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const LoginForm = () => {
    const API = apiURL();
    const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });


  // add welcome user
  const getUser = async (newUser) => {
    try {
      await axios.post(`${API}/users`, newUser);
      history.push("/shirts");
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(user);
  };

  const goBack = () => {
    history.push("/shirts");
  };
  
  return (
    <div className="Login-Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={user.username}
          type="text"
          onChange={handleTextChange}
          placeholder="Username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          value={user.password}
          placeholder="password"
          onChange={handleTextChange}
          required
        />
        <br />
        <button type="submit">Sign in</button>
        <button onClick={goBack}>Go back</button>
        <Link to={`/users/new_user`}>
        <button>New User</button>
      </Link>
      </form>
    </div>
  );
}
export default withRouter(LoginForm);
