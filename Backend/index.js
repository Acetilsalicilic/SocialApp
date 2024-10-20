import { log } from "console";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import receiveMessage from "./scripts/receiveMessage.js";
import { URL } from "url";
import socketList from "./scripts/socketList.js";

const clientPort = 5173;

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (socket, req) => {
    console.log("Someone connected");

    // Extract the parameters of the url
    const parsedUrl = URL.parse(`ws://localhost:${clientPort}${req.url}`);
    const username = parsedUrl.searchParams.get("username");
    console.log(username);

    socketList.push({
        username,
        socket,
    }); // Add the socket to the list

    socket.on("message", (data) => {
        // Event receive message on server
        console.log("received message");

        receiveMessage(data.toString(), socketList);
    });
});

app.get("/ping", (req, res) => {
    res.json({ status: "ok" });
});

server.listen(3000, () => {
    console.log("server running on port 3000");
});
