/*Styles imports */
import './ChatDisplay.scss';

/*Components imports */
import Chat from './Chat';
import ChatInput from './ChatInput';

const ChatDisplay = () => {
    return (
        <>
            <Chat />
            <ChatInput />
        </>
    )
}

export default ChatDisplay; 