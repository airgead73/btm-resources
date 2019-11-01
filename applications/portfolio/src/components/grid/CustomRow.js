import React from "react";

const CustomRow = props => {
  const { style, children } = props;
  return (
    <div className="row" style={style}>{children}</div>
  );
}


export default CustomRow;