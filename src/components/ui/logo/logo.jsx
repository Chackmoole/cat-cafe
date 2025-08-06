import logo from "../../../assests/svg/logo.svg";
import './logo-style.css';

export const Logo = () => { 
    return <a className="logo" href="public\index.html">
        <img src={logo} alt="Котокафе" />
        <span>Котокафе</span>
    </a>
}