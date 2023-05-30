import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [beers, setBeers] = useState(0);
    const [isPending, setIsPending] = useState(false);
  
    const history = useHistory();
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsPending(true);
      const blog = { name, password, beers };
  
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
      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
          
          
          <label>Password</label>
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          
          <label>Any Beers So Far?</label>
          <input
            type="text"
            required
            value={beers}
            onChange={(e) => setBeers(e.target.value)}
            
          />
          
          
          
          {!isPending && <button>Add Person</button>}
          {isPending && <button disabled>Add Blog</button>}
        </form>
      </div>
    );
  }
  

export default Signup;