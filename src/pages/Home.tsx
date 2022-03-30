/*React imports */
import { useEffect, useState } from "react";

/*Components imports */
import Button from "../components/DynamicButton/Button";
import Nav from "../components/Navbar/Nav";
import AuthModal from "../components/AuthModal/AuthModal";

/*Styles imports */
import './Home.scss';

const Home = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const authToken: boolean = false;

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                className="text-align-center"
                authToken={authToken}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <main id="home" className="text-align-center">
                <h1 className="primary-title">Swipe Right®</h1>
                <Button buttonStyle="primary" onClick={handleClick}>{authToken ? 'Signout' : 'Create Account'}</Button>
                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}
            </main>
        </div>
    )
}

export default Home;