import React from "react";
import Chat from "./Chat";
import Upload from "./Upload";

function App() {
    return (
        <div className="App">
            <h1>Document-based Chatbot</h1>
            <Upload />
            <Chat />
        </div>
    );
}

export default App;
