import './Navbar.scss';
import logo from '../../img/LOGO.png';
import { NavLink} from 'react-router-dom';
function Navbar() {
    return(
        <div className="bar">
            <img src={logo} alt="imgbase"/>
            <div className='text_bar'> 
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </div>
        </div>
    );
}
export default Navbar;