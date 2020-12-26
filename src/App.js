import {Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import Comments from './components/Comments/comments'
import Posts from './components/Posts/posts'

function App() {
  return (
    <div className="App">
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/posts'>Posts</NavLink>
     <NavLink to='/comments'>Comments</NavLink>

     <Switch>
       <Route path='/' exact/>
       <Route path='/posts' component={Posts}  exact/>
       <Route path='/comments/:id' component={Comments} exact/>
     </Switch>
    </div>
  );
}

export default App;

