import express from "express";

const server = express();

server.get("/api/ping", (req, res) => {
    res.json({ message: "ok" });
});

server.listen(3000, () => {
    console.log("server listening ong 3000");
});
