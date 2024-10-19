export default function connectToServer(): WebSocket {
    return new WebSocket("ws://localhost:3000");
}
