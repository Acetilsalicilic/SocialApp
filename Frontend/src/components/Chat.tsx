import { useEffect, useState } from "react";
import ChatMessage from "./chatComponents/ChatMessage";
import MessageObject from "../interfaces/MessageObject";
import sendMessage from "../scripts/sendMessage";
import receiveMessage from "../scripts/receiveMessage";

interface Props {
    socket: WebSocket;
    chatWithProp: string | undefined;
    isAssignedProp: boolean;
    username: string;
}

export default function Chat({
    socket,
    chatWithProp,
    isAssignedProp,
    username,
}: Props) {
    const [isAssigned, setIsAssigned] = useState(false); // To know if there are messages to show
    if (isAssignedProp != isAssigned) setIsAssigned(isAssignedProp); // If different, change the state

    const [chatWith, setChatWith] = useState("no one");
    if (chatWith != chatWithProp)
        setChatWith(chatWithProp ? chatWithProp : "no one"); // Change the subject of the chat if different

    const [messageWritten, setMessageWritten] = useState(""); // Keep track of the text

    const [messageList, setMessageList] = useState<MessageObject[]>([]);

    useEffect(() => {
        // Set the connection to listen to incoming messages
        receiveMessage(socket, (message: MessageObject) => {
            console.log("setting the new message list");

            const newMessageList = messageList.concat([message]);
            setMessageList(newMessageList);
        });
    });

    // If there are messages, map each to a ChatMessage component
    const chatMessageComponents = [<></>];
    if (isAssigned && messageList != null) {
        messageList.forEach((message) => {
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
                            <input
                                type="text"
                                name="message"
                                id="message-input"
                                onChange={(event) => {
                                    // Handle the change in the written message
                                    setMessageWritten(event.target.value);
                                }}
                            />
                        </div>
                        <div className="write-box-send-button">
                            <button
                                type="button"
                                onClick={() => {
                                    // Send the message
                                    console.log(
                                        "message to be sent: ",
                                        messageWritten
                                    );

                                    sendMessage(socket, {
                                        message: messageWritten,
                                        from: username,
                                        isLocal: true,
                                        to: chatWith,
                                    });
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
