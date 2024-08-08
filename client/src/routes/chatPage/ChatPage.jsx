import NewPrompt from '../../components/newPrompt/NewPrompt';
import './chatPage.scss'
import { useEffect, useRef } from "react";





const ChatPage = () => {

    const endRef = useRef(null)
    useEffect(()=> {
        endRef.current.scrollIntoView({behavior:"smooth"})
    }, [] )
    return (
        <div className="chatpPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur sequi aliquid, vitae provident accusamus qui!</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <NewPrompt />
                    <div ref={endRef} />
                </div>
            </div>
        </div>
    )
}

export default ChatPage