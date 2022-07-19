import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Image = ({ src, children, style }) => {
  return (
    <div style={{ position: "relative", ...style }}>
      <img src={useBaseUrl(src)} />
      {children}
    </div>
  );
};

export default Image;
