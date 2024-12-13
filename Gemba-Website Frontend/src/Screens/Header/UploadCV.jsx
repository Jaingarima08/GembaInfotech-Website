import React, { useState } from "react";

const UploadCV = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (onFileSelect) onFileSelect(file); // Pass the file to the parent component
  };

  return (
    <div className="mt-4">
      {/* Hidden file input */}
      <input
        type="file"
        name="fileName"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        id="cvUpload"
        className="hidden"
      />
      {/* Trigger for file input */}
      <label
        htmlFor="cvUpload"
        className="mt-2 cursor-pointer hover:underline text-gray-600"
      >
        <span role="img" aria-label="Upload CV">📂</span>
        Upload your CV
      </label>
      {/* Display selected file name */}
      {selectedFile && (
        <p className="mt-2 text-gray-600">
          Selected file: <span>{selectedFile.name}</span>
        </p>
      )}
    </div>
  );
};

export default UploadCV;
