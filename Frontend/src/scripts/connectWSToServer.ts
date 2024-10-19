export default function connectWSToServer() {
    const socket = new WebSocket("ws://localhost:3000");

    socket.addEventListener("open", () => {
        console.log("someone connected");
    });

    socket.addEventListener("message", (evt) => {
        console.log("Message from server ", evt.data);
    });

    return socket;
}
