import React from "react";

const ClickArea = ({ left, top, width, height, jumpId }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        left,
        top,
        width,
        height,
      }}
      onClick={() => {
        const el = document.getElementById(jumpId);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.pageYOffset - 200,
            behavior: "smooth",
          });
          el.style.background = "rgba(255, 27, 107, 0.3)";
          setTimeout(() => {
            el.style.background = "transparent";
          }, 500);
        }
      }}
    />
  );
};

export default ClickArea;
