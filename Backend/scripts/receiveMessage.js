import database from "./database.js";
import forwardToUser from "./forwardToUser.js";

export default async function receiveMessage(data, socketList) {
    const json = await JSON.parse(data);

    if (json.type == "new-message") {
        console.log("new message");

        const message = json.message; // extract the message from the incoming data

        // Store the message in the database
        if (message.from && message.to) {
            database.push(message);
        }

        console.log(database);

        forwardToUser(message, message.to);
    }
}
