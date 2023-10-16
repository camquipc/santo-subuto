import React, { useState } from "react";
import axios from "axios";


export const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progres, setProgres] = useState(50);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    handleUpload();
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("/api/upload", formData, {
        onUploadProgress: e => {
          setProgres(Math.round(100 * e.loaded) / e.total)
        }
      })
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

      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: progres + '%' }}
          aria-valuenow={progres} aria-valuemin={progres} aria-valuemax="100">{progres}%</div>
      </div >
    </>
  );
};
