import React from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ picture, setPicture }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      //   console.log(acceptedFiles);
      setPicture(acceptedFiles[0]);
      // const files = acceptedFiles.map((file) => (
      //   <span key={file.path}>{file.path}</span>
      // ));
      // //   console.log(files);
    },
    [setPicture]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section className="dropzone-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <button type="button" className="dropzone-button">
          Dépose ton image ici, ou clique pour sélectionner une image
        </button>
        <div>
          {picture && (
            <div>
              <span>Ton image : </span>
              <span>{picture.name}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dropzone;
