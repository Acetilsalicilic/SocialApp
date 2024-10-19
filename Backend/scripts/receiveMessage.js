export default async function receiveMessage(data, socket) {
    console.log("doing the parse");

    const json = await JSON.parse(data);

    if (json.type == "new-message") {
        console.log("new message");
        console.log(json.message);

        console.log("sending");

        socket.send(
            JSON.stringify({
                type: "incoming-message",
                message: json.message,
            })
        );
    }
}
