import React from "react";
import { Link } from "react-router-dom";
import pic from "./images/robbie.jpg"; // Import the image

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <img src={pic} width="300" height="200" alt="Logo" /> {/* Use the imported image */}
            <p>has drank <b>{blog.beers}</b> beers</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
