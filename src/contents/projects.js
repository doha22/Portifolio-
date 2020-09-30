import React, { Component } from 'react';
 import {Card , Button} from "react-bootstrap"
 import {
    Link
} from "react-router-dom";

class Projects extends Component {
    render() {
        return (
           
            <div className="condiv ">
             <div className="container projects">
            <h2 >Projects :</h2>
            <hr className="col-md-2"></hr>

<br></br>
<p>See my projects on &nbsp;


<Link to="https://github.com/doha22" >github</Link>

</p>
<br></br>
<p>as this page under construction</p>
            </div>
          </div>
          
            )
        }
    }
    
export default Projects