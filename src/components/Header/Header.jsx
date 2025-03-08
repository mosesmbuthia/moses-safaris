import "./Header.css";
import Logo from "../Logo/Logo";
export default function Header() {
    return(
        <header className="header">
            <HeaderNav/>
        </header>
    )
}

function HeaderNav() {
    return(
        <div className="navbar">
            <Logo/>
            <nav className="header-navigation">
            <ol className="header-navigation-list">
                <li><a href="">Home</a></li>
                <li><a href="">Destinations</a></li>
                <li><a href="">Trips</a></li>
                <li><a href="">Contacts</a></li>
            </ol>
            </nav>
            <a href="#" className="header-cta-btn">book now</a>
           
        </div>
    )
}