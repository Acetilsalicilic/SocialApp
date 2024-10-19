import { useMemo } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
    const socket = useMemo(() => {
        return new WebSocket("ws://localhost:3000");
    }, []);
    /* From Uiverse.io by gharsh11032000 */
    return (
        <>
            <div className="appContainer">
                <div className="navbar-container">
                    <Navbar />
                </div>
                <div className="app-container">
                    <Feed />
                    <Chat
                        socket={socket}
                        chatWithProp="client"
                        isAssignedProp={true}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
