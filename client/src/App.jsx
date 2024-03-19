import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Search from './pages/Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;