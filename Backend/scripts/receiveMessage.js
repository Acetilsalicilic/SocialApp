export default async function receiveMessage(data) {
    console.log("doing the parse");

    const json = await JSON.parse(data);

    if (json.type == "new-message") {
        console.log("new message");
        console.log(json.message);
    }
}
