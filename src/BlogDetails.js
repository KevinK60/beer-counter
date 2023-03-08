import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error, updateData } = useFetch('http://localhost:8000/blogs/' + id)
  const [beers, setBeers] = useState(blog ? blog.beers : 0);

  const history = useHistory();
  const handleAdd = () => {
    const updatedBlog = { ...blog, beers: blog.beers + 1 }
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog)
    }).then(() => {
      updateData(updatedBlog)
    })
  
 }
 

  const handleDelete = (e) => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    })
    
  }
  return (
    <div className="blog-details">
      { isPending && <div>Loading ...</div>}
      { error && <div>{error}</div>}
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          
          <div>{blog.title} has currently drank<b> {blog.beers}</b> beers</div>
          
          <br></br>
                  Add beers
                 <button onClick={handleAdd}>+1</button>
                 <br></br>

                 <div> 
            
                  <p>Please enter your password</p>
                 <input type="text" password="password" />
                  <button>Submit</button>
                 </div>
                 <button onClick={handleDelete}>Delete</button>
        </article>
      )}

    </div>
  );
}

export default BlogDetails;