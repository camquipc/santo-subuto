import React, { useState } from "react";
import axios from "axios";

export const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);

    handleUpload();
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("/api/upload", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <label className="btn btn-lg lb-btn" htmlFor="file">
        Subir Testimonio
      </label>
      <input
        type="file"
        multiple
        name="archivos"
        id="file"
        onChange={handleFileUpload}
      />
    </>
  );
};
