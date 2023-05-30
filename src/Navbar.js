import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The beer counter</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                
            </div>
        </div>
     );
}
 
export default Navbar;