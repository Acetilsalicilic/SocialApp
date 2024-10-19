import MessageObject from "../interfaces/MessageObject";

export default function receiveMessage(
    socket: WebSocket,
    callback: (message: MessageObject) => void
) {
    socket.addEventListener("message", (event) => {
        console.log("Received message");

        const json = JSON.parse(event.data);
        console.log(json);

        if (json.type == "incoming-message") {
            callback(json.message);
        }
    });
}
