import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function Form() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className=" form-content-main">

            <div className="form-content">
                <h3>Déjanos tu testimonio</h3>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Suelta los testimonio aquí...</p> :
                            <p>Arrastre y suelte su testimonio aquí o haga clic para seleccionar su testimonio</p>
                    }
                </div>
                <button>Enviar</button>
            </div>
        </div>
    )
}





