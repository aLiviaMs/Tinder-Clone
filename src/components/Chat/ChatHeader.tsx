import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

/*Styles imports */
import './ChatHeader.scss';

const ChatHeader = () => {
    return (
        <div className="chat-header">
            <div className="profile">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                <h3>UserName</h3>
            </div>
            <i className='profile'> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> </i>
        </div>
    )
}

export default ChatHeader; 