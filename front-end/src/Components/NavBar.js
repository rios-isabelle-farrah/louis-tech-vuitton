import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

export default function NavBar() {
  return (
    // <nav>
    <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xxxl"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand id="brand" href="/">
          Pursui Vuitton
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse  id="responsive-navbar-nav">
        <ReactBootStrap.Nav>
        {/* <Link to="/">Home</Link> */}
        <NavLink to="/shirts">Shirts</NavLink>
        <NavLink to="/shirts/new">Add New Shirt</NavLink>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      {/* <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/shirts">Shirts</Link>
      </h2>
      <button>
        <Link to="/shirts/new">Add New Shirt</Link>
      </button> */}
      </ReactBootStrap.Navbar>
  );
}
