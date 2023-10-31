import React, { useState, useRef } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillTrashFill, BsFileEarmarkArrowUpFill } from "react-icons/bs";
import swal from "sweetalert";

const URL_UPLOAD = "https://api-santo-subito.vercel.app/upload";

export const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [progres, setProgres] = useState(false);
  const fileInputRef = useRef(null);

  const TYPE_FILES_PERMITIDO = [
    "video/mp4",
    "application/pdf",
    "application/x-pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const MAX_SIZE_PERMITIDO = 20000;

  const handleClick = (event) => {
    fileInputRef.current.click();
  };

  const handleChangeNombre = (event) => {
    const nombre = event.target.value;
    setNombre(nombre);
  };

  const handleChangeApellido = (event) => {
    const apellido = event.target.value;
    setApellido(apellido);
  };

  const handleChangeDireccion = (event) => {
    const direccion = event.target.value;

    setDireccion(direccion);
  };

  const handleChangeTelefono = (event) => {
    const telefono = event.target.value;

    setTelefono(telefono);
  };

  const handleChange = (event) => {
    const fileUpload = event.target.files[0];
    //const url = URL.createObjectURL(fileUpload);
    if (!TYPE_FILES_PERMITIDO.includes(fileUpload?.type)) {
      swal("Formatos permitidos: (.doc y .docs) (.pdf) (.mp4)", " ", "warning");
      return;
    }

    if (fileUpload?.size / 1024 > MAX_SIZE_PERMITIDO) {
      swal("Tamaño máximo permitido es de  20Mb", " ", "warning");
      return;
    }

    setSelectedFile(fileUpload);
    //setUrlVideo(url);
  };

  const handleUpload = () => {
    if (selectedFile === null) {
      swal("Falta el testimonio!!", " ", "warning");
      return;
    } else if (nombre === "") {
      swal("El nombre es requerido", " ", "warning");
      return;
    } else if (apellido === "") {
      swal("El apellido es requerido", " ", "warning");
      return;
    } else if (direccion === "") {
      swal("El direccion es requerida", " ", "warning");
      return;
    } else {
      setProgres(true);
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("apellido", apellido);
      formData.append("direccion", direccion);
      formData.append("telefono", telefono);
      formData.append("archivos", selectedFile);

      axios
        .post(URL_UPLOAD, formData)
        .then((response) => {
          swal("Gracias por tu testimonio!", " ", "success");
          setTimeout(() => {
            setSelectedFile(null);
            setNombre("");
            setApellido("");
            setDireccion("");
            setTelefono("");
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          swal(
            "lo sentimos ocurrió un error, por favor inténtalo más tarde!",
            " ",
            "error"
          );
        })
        .finally(() => {
          setSelectedFile(null);
          setNombre("");
          setApellido("");
          setDireccion("");
          setTelefono("");
          setProgres(false);
        });
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <p className="h4">Formulario para testimonio</p>
          <h6>(*) campos requeridos...</h6>
          <input
            type="text"
            className="form-control mt-3 mb-3"
            name="nombre"
            placeholder="Nombre (*)"
            value={nombre}
            onChange={handleChangeNombre}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="apellido"
            placeholder="Apellido (*)"
            value={apellido}
            onChange={handleChangeApellido}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="direccion"
            placeholder="Dirección (*)"
            value={direccion}
            onChange={handleChangeDireccion}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={handleChangeTelefono}
          />

          {selectedFile === null && (
            <>
              <div className="mb-4 div-btn-ad">
                <button
                  className="btn-subir-icon"
                  title="Seleccionar testimonio"
                  onClick={selectedFile === null ? handleClick : handleUpload}>
                  <BsFileEarmarkArrowUpFill /> Adjuntar testimonio (*)
                </button>
                <input
                  type="file"
                  name="archivos"
                  ref={fileInputRef}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <small className="form-text text-muted">
                  {" "}
                  Formatos permitidos: (.doc y .docs) (.pdf) (.mp4)
                </small>
              </div>
            </>
          )}

          {selectedFile !== null && (
            <div className="div-previe-file">
              {/*<video className="img-thumbnail" src={urlVideo}></video>*/}
              {progres ? (
                ""
              ) : (
                <p>
                  {selectedFile.name}{" "}
                  <span
                    className="limpiar-file"
                    onClick={() => setSelectedFile(null)}>
                    <BsFillTrashFill />
                  </span>
                </p>
              )}
            </div>
          )}

          <BeatLoader size={15} loading={progres} color={"#753fcc"} />

          <Button
            variant="btn btn-sm lb-btn mb-2 "
            disabled={
              progres ||
              selectedFile === null ||
              nombre === "" ||
              apellido === "" ||
              direccion === ""
            }
            onClick={handleUpload}>
            Enviar Testimonio
          </Button>
        </Card.Body>
      </Card>
      <p className="text-center mt-2">
        Los testimonios serán evaluados por una comisión designada por el obispo
        de la Diócesis de Carúpano, con el propósito de verificar su
        autenticidad.
      </p>
    </>
  );
};
