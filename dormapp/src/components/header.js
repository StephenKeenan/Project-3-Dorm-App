import {Link} from "react-router-dom";

function Header() {
return (
    //<!--Navbar-->
    <div className="header">
        <h1>College Swap</h1>
        <div class="header-right">
            <Link to="/">Dashboard</Link>
            <Link to="/searches">Saved Searches</Link>
            <Link to="/colleges">Search Colleges</Link>
            <Link to="/login">Login/Signup</Link>
        </div>
    </div>
    )
};

export default Header;