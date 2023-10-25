import React, { useState, useRef } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillTrashFill, BsFileEarmarkArrowUpFill } from "react-icons/bs";

const URL_UPLOAD = "http://192.168.0.101:5000/upload";

export const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progres, setProgres] = useState(false);
  const [urlVideo, setUrlVideo] = useState(null);
  const fileInputRef = useRef(null);
  const [isErrorType, setIsErrorType] = useState(false);
  const [isErrorSize, setIsErrorSize] = useState(false);
  const [errorMsgType, setErrorMsgType] = useState("");
  const [errorMsgSize, setErrorMsgSize] = useState("");
  const TYPE_VIDEO_PERMITIDO = ["video/mp4"];
  const MAX_SIZE_PERMITIDO = 20000;



  const handleClick = event => {
    fileInputRef.current.click();
  }


  const handleChange = (event) => {
    const fileUpload = event.target.files[0];
    const url = URL.createObjectURL(fileUpload);
    if (!TYPE_VIDEO_PERMITIDO.includes(fileUpload?.type)) {
      setIsErrorType(true);
      setErrorMsgType("Solo se permite formato de video en mp4.");
      return;
    }

    if ((fileUpload?.size / 1024) > MAX_SIZE_PERMITIDO) {
      setIsErrorSize(true);
      setErrorMsgSize("Tamaño máximo permitido es de  20Mb.");
      return;
    }

    setSelectedFile(fileUpload);
    setUrlVideo(url);
  };

  const handleUpload = () => {
    if (selectedFile === null) {
      alert("Falta el testimonio!!");
      return;
    } else {
      setProgres(true);
      const formData = new FormData();
      formData.append("archivos", selectedFile);
      axios
        .post(URL_UPLOAD, formData)
        .then((response) => {
          alert("Gracias por tu testimonio!")
          setTimeout(() => {
            setSelectedFile(null);
          }, 1000)
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          setSelectedFile(null);
          setProgres(false)
        });
    }
  };

  return (

    <Card className="text-center">
      {isErrorType && (<span className="text-danger mt-2">{errorMsgType}</span>)}
      {isErrorSize && (<span className="text-danger mt-2">{errorMsgSize}</span>)}
      <Card.Body>

        {(selectedFile === null) && (
          <div className="mb-4">
            <button className="btn-subir-icon" title="Seleccionar testimonio"
              onClick={(selectedFile === null) ? handleClick : handleUpload}>
              <BsFileEarmarkArrowUpFill />
            </button>
            <input
              type="file"
              name="archivos"
              ref={fileInputRef}
              onChange={handleChange}
              style={{ display: 'none' }}
            />
          </div>
        )
        }

        {(selectedFile !== null) &&
          <div className="div-previe-file">
            <video className="img-thumbnail" src={urlVideo}></video>
            <p>{selectedFile.name} <span className="limpiar-file" onClick={() => setSelectedFile(null)}><BsFillTrashFill /></span></p>
          </div>
        }

        <BeatLoader size={15} loading={progres} color={'#753fcc'} />

        <Button variant="btn btn-sm lb-btn mb-2" disabled={(progres) || (selectedFile === null)}
          onClick={handleUpload}>Enviar Testimonio</Button>

      </Card.Body>
      <Card.Footer >
        <p>Solo vídeo en formato (Mp4) y tamaño máximo (20Mb) permitido.</p>
      </Card.Footer>
    </Card>

  );
};




