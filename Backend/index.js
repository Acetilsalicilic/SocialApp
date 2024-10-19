import { log } from "console";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import receiveMessage from "./scripts/receiveMessage.js";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

let socket;

wss.on("connection", (newSocket) => {
    console.log("Someone connected");
    socket = newSocket;

    socket.on("message", (data) => {
        console.log("received message");

        receiveMessage(data.toString(), socket);
    });
});

app.get("/ping", (req, res) => {
    res.json({ status: "ok" });
});

server.listen(3000, () => {
    console.log("server running on port 3000");
});
