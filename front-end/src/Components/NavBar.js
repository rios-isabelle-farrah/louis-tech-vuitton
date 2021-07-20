import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/">Home</Link>
            </h1>
            <h1>
                <Link to="/shirts">Shirts</Link>
            </h1>
            <button>
                <Link to="/shirts/new">New Shirt</Link>
            </button>
        </nav>
    );
}
