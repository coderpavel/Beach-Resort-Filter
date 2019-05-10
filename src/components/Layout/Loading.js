import React from "react";
import loadingGIF from "../../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>data is loading...</h4>
      <img src={loadingGIF} alt="" />
    </div>
  );
};

export default Loading;
