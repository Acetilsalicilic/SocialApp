import MessageObject from "../interfaces/MessageObject";

export default function (socket: WebSocket, message: MessageObject) {
    const data = {
        type: "new-message",
        message,
    };
    socket.send(JSON.stringify(data));
}
