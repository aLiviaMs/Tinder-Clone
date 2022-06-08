//React imports
import { useState } from 'react';

/*Styles imports */
import './ChatInput.scss';

//Components imports
import Button from '../DynamicButton/Button';

const ChatInput = () => {
    const [textArea, setTextArea] = useState<string | number | readonly string[] | undefined>(undefined);

    return (
        <div className='chat-input'>
            <textarea value={textArea} onChange={(event) => setTextArea(event.target.value)}></textarea>
            <Button type="submit" buttonStyle='secondary'>SUBMIT</Button>
        </div>
    )
}

export default ChatInput; 