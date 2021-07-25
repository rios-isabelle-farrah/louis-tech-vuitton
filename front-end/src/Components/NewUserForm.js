import axios from "axios";
import { useState } from "react";
import { ButtonGroup, FloatingLabel, Form, Button } from "react-bootstrap";
import { useHistory, withRouter, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

const API = apiURL();

function NewUserForm() {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const addUser = async (newUser) => {
    try {
      await axios.post(`${API}/users`, newUser);
      history.push(`/users`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setUser({ ...user, in_stock: !user.in_stock });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
  };

  const goBack = () => {
    history.push("/users");
  };

  return (
      <form className="New-User-Form" onSubmit={handleSubmit}>
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
            Submit
          </Button>
          <Button variant="light" onClick={goBack}>
            Go back
          </Button>
          <Link to={`/users/login`}>
            <Button variant="dark">Sign in</Button>
          </Link>
        </ButtonGroup>
      </form>
  );
}
export default withRouter(NewUserForm);
