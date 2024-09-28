import React, { useState } from "react";

function Upload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        alert(data.response);
    };

    return (
        <div>
            <h2>Upload Document</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
}

export default Upload;
