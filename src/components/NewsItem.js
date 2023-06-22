import React from "react";

const NewsItem = (props) => {
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{props.source}</span>
        </div>
        <img
          src={
            !props.imageUrl
              ? "https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg"
              : props.imageUrl
          }
          width="400"
          height="300"
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body bg-${props.theme}`}>
          <h5
            className={`card-title text-${
              props.theme === "light" ? "black" : "white"
            }`}
          >
            {props.title}...
          </h5>
          {/* <p className="card-text">{description}...</p> */}
          <p className="card-text">
            <small
              className={`text-${props.theme === "light" ? "black" : "white"}`}
            >
              By {!props.author ? "Unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <button
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm btn-${
              props.theme === "light" ? "dark" : "light"
            }`}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
