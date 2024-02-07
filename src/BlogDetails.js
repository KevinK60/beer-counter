import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const { id: paramId } = useParams(); // Assuming the parameter name is 'id'
  const { data: blogs, isPending, error, updateData } = useFetch('http://localhost:3002/api/all-blogs'); // Update the URL
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (blogs) {
      const foundBlog = blogs.find(blog => blog._id === paramId);
      setSelectedBlog(foundBlog);
    }
  }, [paramId, blogs]);

  const history = useHistory();

  const handleAdd = () => {
    if (!selectedBlog) return;
    const updatedBlog = { ...selectedBlog, beers: selectedBlog.beers + 1 };
    fetch(`http://localhost:3002/api/all-blogs/${selectedBlog._id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog)
    })
    .then(response => response.json())
    .then(updatedBlogData => {
      setSelectedBlog(updatedBlogData); // Update the selectedBlog state with the new data
    })
    .catch(error => {
      console.error('Error updating blog:', error);
    });
  }
  
  const handleDelete = () => {
    if (!selectedBlog) return;
    fetch(`http://localhost:3002/api/all-blogs/${selectedBlog._id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading ...</div>}
      { error && <div>{error}</div>}
      { selectedBlog && (
        <article>
          <h2>{selectedBlog.title}</h2>
          <div>{selectedBlog.title} has currently drank <b>{selectedBlog.beers}</b> beers</div>
          <br />
          Add beers
          <button onClick={handleAdd}>+1</button>
          <br />
          <div>
            <p>Please enter your password</p>
            <input type="password" />
            <button>Submit</button>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
