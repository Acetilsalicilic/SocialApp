import "./App.css";
import Chat from "./components/Chat";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
    /* From Uiverse.io by gharsh11032000 */
    return (
        <>
            <div className="appContainer">
                <div className="navbar-container">
                    <Navbar />
                </div>
                <div className="app-container">
                    <Feed />
                    <Chat />
                </div>
            </div>
        </>
    );
}

export default App;
