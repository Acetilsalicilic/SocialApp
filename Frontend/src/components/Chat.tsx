import { useState } from "react";
import ChatMessage from "./chatComponents/ChatMessage";
import pingToServer from "../scripts/pingToServer";
interface messageObject {
    message: string;
    from: string;
    isLocal: boolean;
}
interface Props {
    messages: messageObject[] | null;
}

export default function Chat({ messages }: Props) {
    const [isAssigned, setIsAssigned] = useState(false); // To know if there are messages to show
    const [chatWith, setChatWith] = useState("no one");

    // Determine, by the given list of messages, if there are something yo show
    const areMessages = messages == null ? false : messages.length > 0;

    // Change the state only if it's needed, to prevent an infinite loop!
    if (areMessages != isAssigned) setIsAssigned(areMessages);

    // If there are messages, map each to a ChatMessage component
    const chatMessageComponents = [<></>];
    if (isAssigned && messages != null) {
        messages.forEach((message) => {
            chatMessageComponents.push(
                <ChatMessage
                    message={message.message}
                    from={message.from}
                    isLocal={message.isLocal}
                />
            );
        });
    }

    const messageContainer = isAssigned ? ( // If there are messages
        <div className="chat-message-container">{chatMessageComponents}</div>
    ) : (
        // If there are no messages to show
        <div className="chat-message-container no-message">
            <p>No hay mensajes aun!</p>
        </div>
    );

    return (
        <>
            <div className="chat-body">
                <div className="chat-title">
                    <h2 className="chat-title-text">Chat with {chatWith}</h2>
                </div>
                <div className="chat-textbox">
                    <div className="chat-message-space">{messageContainer}</div>
                    <div className="chat-write-box">
                        <div className="write-box-textfield">
                            <input type="text" name="message" id="message" />
                        </div>
                        <div className="write-box-send-button">
                            <button type="button" onClick={pingToServer}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
