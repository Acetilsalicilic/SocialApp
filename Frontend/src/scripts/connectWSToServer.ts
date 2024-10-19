export default function connectWSToServer() {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
        console.log("connected");
    };
}
