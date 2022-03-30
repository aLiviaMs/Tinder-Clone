import './Nav.scss';
import colorLogo from '../../images/color-tinder-logo.png';
import logo from '../../images/white-color-logo-tinder.png';
import Button from '../DynamicButton/Button';

interface NavProps {
    className?: string;
    minimal?: boolean;
    authToken: boolean;
}

const Nav: React.FC<NavProps> = ({ className, minimal, authToken }) => {
    return (
        <nav className={className}>
            <div className="logo-container"><img className='logo' src={minimal ? colorLogo : logo} alt="Tinder logo" /></div>

            {!authToken && <Button buttonStyle='nav'>Log in </Button>}
        </nav>
    )
}

export default Nav;