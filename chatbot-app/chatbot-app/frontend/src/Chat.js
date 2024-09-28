import React, { useState } from "react";

function Chat() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSendMessage = async () => {
        // Send message to backend (not implemented yet)
        setResponse("Backend response to: " + message);
    };

    return (
        <div>
            <h2>Chat Interface</h2>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={handleSendMessage}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
}

export default Chat;
