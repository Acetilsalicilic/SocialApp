export default async function receiveMessage(data, socketList) {
    console.log("doing the parse");

    const json = await JSON.parse(data);

    if (json.type == "new-message") {
        console.log("new message");
        console.log(json.message);

        console.log("sending to all");

        socketList.forEach(({ username, socket }) => {
            socket.send(
                JSON.stringify({
                    type: "incoming-message",
                    message: json.message,
                })
            );
        });
    }
}
