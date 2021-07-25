import axios from "axios";
import { useState } from "react";
import { ButtonGroup, FloatingLabel } from "react-bootstrap";
import { useHistory, withRouter, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = ({ setCurrentUser }) => {
  const API = apiURL();
  const history = useHistory();


  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // SHOW
  const getUser = async () => {
    try {
      const res = await axios.get(`${API}/users/login?user=${user.username}&pw=${user.password}`);
     return res.data.payload.username;
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validUser = await getUser();
    if (validUser) {
      setCurrentUser(validUser)}
    goBack();
  };

  const goBack = () => {
    history.push("/shirts");
  };

  return (
      <form className="Login-Form" onSubmit={handleSubmit}>
        <Form.Group className="item">
          <FloatingLabel label="Username">
            <Form.Control
              id="username"
              value={user.username}
              type="text"
              onChange={handleTextChange}
              placeholder="Username"
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="item">
          <FloatingLabel label="Password">
            <Form.Control
              id="password"
              type="text"
              value={user.password}
              placeholder="password"
              onChange={handleTextChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <br />
        <ButtonGroup>
          <Button variant="dark" type="submit">
            Sign in
          </Button>
          <Button variant="light" onClick={goBack}>
            Go back
          </Button>
          <Link to={`/users/login/new_user`}>
            <Button variant="dark">New User</Button>
          </Link>
        </ButtonGroup>
      </form>
  );
};
export default withRouter(LoginForm);
