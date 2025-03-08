import "./Logo.css";
import logoImg from '../../assets/logo-main.png';
function Logo() {
  return (
    <div className="logo">
   <img src={logoImg} alt="our logo" />
   <h2>moses safaris</h2>
    </div>
  )
}

export default Logo
