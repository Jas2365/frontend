import React, { useRef, useState } from "react";

const CameraUpload = ({ onImageSelect }) => {
  const [previewSrc, setPreviewSrc] = useState("");
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
    if (file) {
      onImageSelect(file);
    }
  };
  return (
    <div>
      <label htmlFor="profileImage">ProfileImage</label>
      <input
        type="file"
        name="profileImage"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        style={{ display: "none" }}
        required
        onChange={handleFileChange}
      />
      {/* preview */}
      <div className="photo-preview" onClick={handleIconClick}>
        {previewSrc ? (
          <img src={previewSrc} alt="preview" className="preview" />
        ) : // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width="48"
        //   height="48"
        //   viewBox="0 0 24 24"
        //   fill="none"
        //   stroke="#888"
        //   strokeWidth="2"
        //   strokeLinecap="round"
        //   strokeLinejoin="round"
        // >
        //   <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h312 3h3a2 2 0 0 1 2 2z" />
        //   <circle cx="12" cy="13" r="4" />
        // </svg>
        null}
      </div>
    </div>
  );
};

export default CameraUpload;
