import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h2>
                <Link to="/">Home</Link>
            </h2>
            <h2>
                <Link to="/shirts">Shirts</Link>
            </h2>
            <button>
                <Link to="/shirts/new">Add New Shirt</Link>
            </button>
        </nav>
    );
}
