import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author};

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      history.push('/');
    })

  }

  return (
    <div className="create">
      <h2>Add a New Person</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter person name</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
        
        
        
        {!isPending && <button>Add Person</button>}
        {isPending && <button disabled>Add Blog</button>}
      </form>
    </div>
  );
}

export default Create;