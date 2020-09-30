import React, { Component } from 'react';
import {Card } from "react-bootstrap"

import { AiOutlineMail , FiPhone} from "react-icons/all"

class Contact extends Component {
    
    render() {
        return (

    // <Card className="contact-card">
    <div className="contact">
    {/* <Card.Body>
      
      <Card.Text> */}
          <div className="container">
   <div className="row">  

    <div className="col-md-12"> <AiOutlineMail /> Dohaessam22@gmail.com </div>
      </div>
      <br></br>
         
 <div className="row"> <div className="col-md-12">    <FiPhone />  01007053107 </div> </div>

   </div>
          {/* </Card.Text>
          </Card.Body> */}
          </div>
          //  </Card>

        )
    }
}

export default Contact