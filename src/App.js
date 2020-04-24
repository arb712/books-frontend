import React from 'react';
import './App.css';
import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './pages/Books/index';
import Home from './pages/Home/Home';
import Show from './pages/Show_Books/index';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
<>
<Router>
<NavBar/>
<Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route exact path="/add">
    <Add/>
  </Route>
  <Route exact path="/books">
    <Show/>
  </Route>
</Switch>
<Footer/>
</Router>
</>
  );
}

export default App;
