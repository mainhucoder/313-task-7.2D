import React, { useState, useRef } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
//import './image.css'; 

function UploadImage() {
  const [imageUpload, setImageUpload] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const uploadImage = () => {
    if (imageUpload === null) return;

    const FileName = `${uuidv4()}_${imageUpload.name}`;
    const imageRef = ref(storage, `images/${FileName}`);
    
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image stored");
    });
  };

  const browseButton = () => {
   
    fileInputRef.current.click();
  };

  return (
    <div className="image-container"> 
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <div>
        <button onClick={browseButton}>Browse</button>
        <div className="span">
        {imageUpload && <span>{imageUpload.name}</span>}
        </div>
      </div>
      <button onClick={uploadImage}>Upload image</button>
     
     
    </div>
  );
}

export default UploadImage;