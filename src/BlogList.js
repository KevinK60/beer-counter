import { Link } from "react-router-dom"
import pic from "./images/robbie.jpg"

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <img src={pic} width="300" height="200"  alt="Logo" />;
              <p>has drank <b>{blog.beers}</b> beers</p>

            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default BlogList;