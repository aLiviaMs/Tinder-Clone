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
    const authToken: boolean = false;

    const handleClick = () => {
        setShowModal(true);
    }

    return (
        <div className="overlay">
            <Nav className="text-align-center" authToken={authToken} />
            <main id="home" className="text-align-center">
                <h1>Swipe Right®</h1>
                <Button buttonStyle="primary" onClick={handleClick}>{authToken ? 'Signout' : 'Create Account'}</Button>
                {showModal && (
                    <AuthModal setShowModal={setShowModal} />
                )}
            </main>
        </div>
    )
}

export default Home;