import connectWSToServer from "./connectWSToServer";

export default function pingToServer() {
    fetch("/api/ping")
        .then((response) => response.text())
        .then((txt) => {
            console.log(`The response: ${txt}`);
            connectWSToServer();
        })
        .catch((err) => {
            console.error("Something went wrong");
            console.error(err);
        });
}
