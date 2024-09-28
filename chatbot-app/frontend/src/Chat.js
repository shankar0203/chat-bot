import React, { useState } from "react";

function Chat() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSendMessage = async () => {
        const res = await fetch("http://localhost:5000/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();
        setResponse(data.response);
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
