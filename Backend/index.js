import { log } from "console";
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (con, req) => {
    console.log("Someone connected");
});

app.get("/ping", (req, res) => {
    res.json({ status: "ok" });
});

server.listen(3000, () => {
    console.log("server running on port 3000");
});
