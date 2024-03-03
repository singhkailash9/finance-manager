import { Link } from "react-router-dom";
import "../style/menu.css"

const Menu = ()=> {
    return <div className="menu-container">
        <ul id="menu-list">
            <li className="menu-items"><Link to="/profile">Profile</Link></li>
            <li className="menu-items"><Link to="/data-manager">Data Manager</Link></li>
            <li className="menu-items"><Link to="/visualise">Visualise</Link></li>
            <li className="menu-items" id="logout"><Link to="/login">Log Out</Link></li>
        </ul>
    </div>
}

export default Menu;