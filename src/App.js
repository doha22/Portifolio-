import React from 'react';
import{BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./contents/home"
import About from "./contents/About"


import Skills from './contents/skills';
import Work from './contents/work'
import Projects from './contents/projects'

 import Test from  './contents/test'

function App() {
 

  return (
    <Router>
    
    <div className="App">
    
    {/* <Route exact path="/nav" >
       <Test
        />
       </Route> */}
       <Test
        />
      
    {/* <Navbar /> */}
    <Route exact path="/" > <Home /></Route>
    <Route path="/about"><About /></Route>

    <Route path="/Skills"><Skills /></Route>

    <Route path="/work"><Work /></Route>

    <Route path="/projects"><Projects /></Route>

    </div>
  
    </Router>
  );
}

export default App;
