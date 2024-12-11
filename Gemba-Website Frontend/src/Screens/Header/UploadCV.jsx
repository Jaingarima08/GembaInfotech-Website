import React, { useState } from 'react';

const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    alert(`Selected file: ${event.target.files[0].name}`);
  };

  return (
    <div className="mt-4">
      {/* Hidden file input */}
      <input
        type="file"
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
          Selected file: <span className=" ">{selectedFile.name}</span>
        </p>
      )}
    </div>
  );
};

export default UploadCV;
