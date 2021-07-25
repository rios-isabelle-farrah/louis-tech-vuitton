import axios from "axios";
import { useState } from "react";
import { ButtonGroup, FloatingLabel } from "react-bootstrap";
import { useHistory, withRouter, Link, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  const API = apiURL();
  const history = useHistory();
  const { username } = useParams();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // add welcome user
  const getUser = async () => {
    try {
      await axios.get(`${API}/users`, username);
      console.log(username)
      history.push("/shirts");
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchShirt = async () => {
  //   try {
  //     const result = await axios.get(`${API}/shirts/${id}`);
  //     // console.log(result);
  //     setShirt(result.data.payload);
  //     setColor(result.data.payload.color);
  //     setType_of(result.data.payload.type_of);
  //     // console.log(type_of);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  const handleTextChange = (event) => {
    console.log(event.target.value)
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

        </Form.Group>
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
        <br />
        <ButtonGroup>
        <Button variant="dark" type="submit">Sign</Button>
        <Button variant="light" onClick={goBack}>Go back</Button>
        <Link to={`/users/new_user`}>
          <Button variant="dark" >New User</Button>
        </Link>
        </ButtonGroup>
      </form>
    </div>
  );
};
export default withRouter(LoginForm);