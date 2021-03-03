import React from "react";
import Item from "./Item";
const Content = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return (
    <>
      {parts.map((part, index) => (
        <Item name={part.name} exercises={part.exercises} key={index} />
      ))}

      <b>total of {total} exercises</b>
    </>
  );
};

export default Content;
