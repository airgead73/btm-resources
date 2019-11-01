import React from "react";

const Aside = props => {
  return <article className={props.asideClass}>{props.children}</article>;
};

export default Aside;