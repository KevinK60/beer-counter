import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The beer counter</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Person</Link>
                <Link to="/Account">New Account</Link>
                <Link to="/Account">Login</Link>
            </div>
        </div>
     );
}
 
export default Navbar;