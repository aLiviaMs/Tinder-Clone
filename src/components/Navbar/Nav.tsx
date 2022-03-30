import './Nav.scss';
import colorLogo from '../../images/color-tinder-logo.png';
import logo from '../../images/white-color-logo-tinder.png';
import Button from '../DynamicButton/Button';

interface INavProps {
    className?: string;
    minimal?: boolean;
    authToken: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<INavProps> = ({ className, minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    }

    return (
        <nav className={className}>
            <div className="logo-container"><img className='logo' src={minimal ? colorLogo : logo} alt="Tinder logo" /></div>

            {!authToken && !minimal && <Button buttonStyle='nav' onClick={handleClick} disabled={showModal} className="btn-login">Log in </Button>}
        </nav>
    )
}

export default Nav;