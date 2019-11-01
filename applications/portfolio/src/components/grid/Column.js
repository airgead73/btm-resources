import React from "react";

const Column = props => {
  const { size, children } = props;
  const computeSize = size => {
    let currentSize;
    if (size === "one-third" || size === "two-thirds" || size === "one-half") {
      currentSize = `${size} column`;
      return currentSize;
    } else {
      currentSize = `${size} columns`;
    }
    return currentSize;
  };
  return <section className={computeSize(size)}>{children}</section>;
};

export default Column;