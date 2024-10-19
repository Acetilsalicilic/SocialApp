export default function trySendMessage(socket: WebSocket | undefined) {
    if (socket == undefined) return;

    function sendIt() {
        socket.send(
            JSON.stringify({
                type: "new-message",
                message: { message: "hello from ws", from: "the client" },
            })
        );
    }
    return sendIt;
}
