import ChatMessage from "./chatComponents/ChatMessage";

export default function Chat() {
    return (
        <>
            <div className="chat-body">
                <div className="chat-title">
                    <h2 className="chat-title-text">Chat</h2>
                </div>
                <div className="chat-textbox">
                    <div className="chat-message-container">
                        <ChatMessage
                            message="first message"
                            from="Me"
                            isLocal={true}
                        />
                    </div>
                    <div className="chat-write-box">
                        <div className="write-box-textfield"></div>
                        <div className="write-box-send-button">
                            <input type="text" name="message" id="message" />
                            <button type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
