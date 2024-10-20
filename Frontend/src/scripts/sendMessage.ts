import MessageObject from "../interfaces/MessageObject";

export default function (socket: WebSocket, message: MessageObject) {
    const data = {
        type: "new-message",
        message: {
            from: message.from,
            to: message.to,
            message: message.message,
        },
    };
    socket.send(JSON.stringify(data));
}
