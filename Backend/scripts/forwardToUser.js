import socketList from "./socketList.js";

export default function forwardToUser(message, user) {
    const userSocket = socketList.find((el) => el.username === user);

    if (userSocket == undefined) {
        console.error("No user found! ", user);
        return;
    }

    const socket = userSocket.socket;

    socket.send(
        JSON.stringify({
            type: "incoming-message",
            message,
        })
    );

    console.log("Message forwarded to ", user);
}
