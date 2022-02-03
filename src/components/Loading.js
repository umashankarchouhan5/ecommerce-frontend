import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only ms-5">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
