import NavBar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Account from './signup/Account';


/*
  1
  '
  Encountered difficulty while attempting to create a folder named 'signup' to organize account-related files.
  '
  Example import statement in navbar.js:
  '
  import Account from './signup/Account';
  '
  Assistance in resolving this issue is appreciated.
  '
  llllllllllllllll
*/

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />        
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create exact />
            </Route>
            <Route path="/Account">
              <Account exact />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
