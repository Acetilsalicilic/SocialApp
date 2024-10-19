import { log } from "console";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import receiveMessage from "./scripts/receiveMessage.js";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    console.log("Someone connected");

    socket.on("message", (data) => {
        console.log("received message");

        receiveMessage(data.toString());
    });
});

app.get("/ping", (req, res) => {
    res.json({ status: "ok" });
});

server.listen(3000, () => {
    console.log("server running on port 3000");
});
