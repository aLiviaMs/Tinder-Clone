import Button from "../components/DynamicButton/Button";
import Nav from "../components/Navbar/Nav";
import './Home.scss';

const Home = () => {
    const authToken: boolean = false;

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <div className="overlay">
            <Nav className="text-align-center" authToken={authToken} />
            <main id="home" className="text-align-center">
                <h1>Swipe Right</h1>
                <Button buttonStyle="primary" onClick={handleClick}>{authToken ? 'Signout' : 'Create Account'}</Button>
            </main>
        </div>
    )
}

export default Home;