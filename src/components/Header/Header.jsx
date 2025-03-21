import "./Header.css";
import Logo from "../Logo/Logo";
// import Logo from "/src/assets/Images/logo-main.png"; 
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <HeaderNav />
        </header>
    )
}

function HeaderNav() {
    return (
        <div className="navbar">
            <Logo /> {/* <img src={Logo} alt="Company Logo" className="logo" /> */}
            <nav className="header-navigation">
                <ol className="header-navigation-list">
                    <NavigationLink to="/" label="home" />
                    <NavigationLink to="/destinations" label="destinations" />
                    <NavigationLink to="/trips" label="trips" />
                    <NavigationLink to="/contacts" label="contacts" />
                </ol>
            </nav>
            <a href="#" className="header-cta-btn">book now</a>

        </div>
    )
}
function NavigationLink({ to, label }) {
    return (
        <li>
            <NavLink to={to}
            className={({isActive }) => isActive ? "active" : ""}
            >
                {label}
                </NavLink>
        </li>
    )
}