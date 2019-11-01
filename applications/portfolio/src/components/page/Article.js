import React from "react";

const Article = props => {
  return <article className={props.articleClass}>{props.children}</article>;
};

export default Article;