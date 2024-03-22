import './Footer.scss';
import logo from '../../img/LOGO.png';

function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt='logo'/>
            <p>2020 Kasa. All rights reserved</p>
        </div>
    );
}
export default Footer;