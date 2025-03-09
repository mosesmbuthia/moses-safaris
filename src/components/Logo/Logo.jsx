import "./Logo.css";
import logoImg from '../../assets/Images/logo-main.png';
function Logo() {
  return (
    <div className="logo">
   <img src={logoImg} alt="our logo" />
   <h2>mbuthia safaris</h2>
    </div>
  )
}

export default Logo
