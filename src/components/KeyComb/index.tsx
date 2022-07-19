import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const KeyComb = ({ keys }: { keys: string[] }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        columnGap: 8,
      }}
    >
      {keys.slice(0, -1).map((key) => (
        <>
          <img style={{ height: "100%" }} src={useBaseUrl(`/img/${key}.png`)} />
          <img style={{ height: "100%" }} src={useBaseUrl("/img/plus.png")} />
        </>
      ))}
      <img
        style={{ height: "100%" }}
        src={useBaseUrl(`/img/${keys.at(-1)}.png`)}
      />
    </div>
  );
};

export default KeyComb;
