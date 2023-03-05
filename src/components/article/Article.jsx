import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt__article">
      <div className="gpt__article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>read full article</p>
      </div>
    </div>
  );
};

export default Article;
