/*React imports */
import { useState } from 'react';

/*Components imports */
import Button from '../DynamicButton/Button';

/*Styles imports */
import './AuthModal.scss';

interface IAuthModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    isSignUp: boolean;
}

const AuthModal: React.FC<IAuthModalProps> = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCloseClick = () => {
        setShowModal(false);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (isSignUp && password !== confirmPassword) {
                setError('Passwords need to match!')
            }
            console.log('make a post request to our database.');
        } catch (error) {
            setError('Ops! Something went wrong')
            console.log(error)
        }
    }

    return (
        <div className='auth-modal'>
            <button aria-hidden="false" aria-label="Close" className='close-btn' onClick={handleCloseClick}><svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true" role="presentation" className='close-icon'><path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"></path></svg></button>

            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p className='policy-knowledge'>By clicking Log In, you agree to our terms. Learn how we process your data in out Privacy Policy and Cookie Policy</p>

            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Email'
                    required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Password'
                    required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
                {isSignUp && (
                    <input
                        type="password"
                        id='password-check'
                        name='password-check'
                        placeholder='Confirm password'
                        required
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
                    />
                )}
                <Button type="submit" buttonStyle='secondary' className='btn-submit'>SUBMIT</Button>
                <p>{error}</p>
            </form>
            <hr />
            <h2>GET THE APP</h2>
        </div>
    )
}

export default AuthModal; 