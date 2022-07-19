import React from "react";
import Markdown from "react-markdown";

const List = ({ ordered, items, idPrefix }) => {
  const children = items.map((item, idx) => (
    <li
      key={idPrefix ? `${idPrefix}-${idx}` : idx}
      style={{ transition: "background 1s" }}
      id={idPrefix ? `${idPrefix}-${idx}` : undefined}
    >
      <Markdown>{item}</Markdown>
    </li>
  ));
  return ordered ? <ol>{children}</ol> : <ul>{children}</ul>;
};

export default List;
