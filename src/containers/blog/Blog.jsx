import React from "react";
import { Article } from "../../components";
import articleParams from "./articleParams";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article
            imgUrl={articleParams[0].imgUrl}
            date={articleParams[0].date}
            title={articleParams[0].title}
          />
        </div>
        <div className="gpt__blog-container_groupB">
          {articleParams.slice(1).map((articleParam, index) => {
            const { imgUrl, date, title } = articleParam;
            return (
              <Article key={index} imgUrl={imgUrl} date={date} title={title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
