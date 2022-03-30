import './OnBoarding.scss';
import Nav from '../components/Navbar/Nav';
import { useState } from 'react';
import { IFormData } from '../interface/IFormData';

const OnBoarding = () => {
    const [formData, setFormData] = useState<IFormData>({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        genter_identity: 'man',
        gender_interest: 'woman',
        email: '',
        url: '',
        about: '',
        matches: [],
    })
    const handleSubmit = () => {

    }

    //FIXME: Define a type and fix unchaught TypeError.
    const handleChange = (event: any) => {
        const value = event.target.value;
        const name = event.taget.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav
                minimal
                setShowModal={() => { }}
            />
            <main id='onboarding' className="text-align-center">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            id='first_name'
                            name='first_name'
                            placeholder='First Name'
                            required
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                type="number"
                                id='dob_day'
                                name='dob_day'
                                placeholder='DD'
                                required
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                id='dob_month'
                                name='dob_month'
                                placeholder='MM'
                                required
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                id='dob_year'
                                name='dob_year'
                                placeholder='YYYY'
                                required
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                type="radio"
                                id='man-gender-identity'
                                name='gender_identity'
                                value="man"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                type="radio"
                                id='woman-gender-identity'
                                name='gender_identity'
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                type="radio"
                                id='more-gender-identity'
                                name='gender_identity'
                                value="more"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="more-gender-identity">More</label>
                        </div>
                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            type="checkbox"
                            id='show-gender'
                            name='show_gender'
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                type="radio"
                                id='man-gender-interest'
                                name='gender_interest'
                                value="man"
                                onChange={handleChange}
                                checked
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                type="radio"
                                id='woman-gender-interest'
                                name='gender_interest'
                                value="woman"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                type="radio"
                                id='more-gender-interest'
                                name='gender_interest'
                                value="everyone"
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>
                        <label htmlFor="about">About me</label>
                        <input
                            type="text"
                            id='about'
                            name='about'
                            value={formData.about}
                            required
                            placeholder="I'm a happy person."
                            onChange={handleChange}
                        />
                        <input type="submit" value='Submit' />
                    </section>

                    <section>
                        <label htmlFor="">Profile Photo</label>
                        <input
                            type="url"
                            name='url'
                            id='url'
                            onChange={handleChange}
                            required
                        />
                        <div className='photo-container'> <img src={formData.url} alt="Profile pic preview" /> </div>
                    </section>
                </form>
            </main>
        </>
    )
}

export default OnBoarding; 