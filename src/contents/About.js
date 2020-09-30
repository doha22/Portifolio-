import React, { Component } from 'react';
 import {Card , Button} from "react-bootstrap"


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <Card className="about">
            
            <Card.Body>
              <Card.Title className="subtopic">About Me</Card.Title>
              <Card.Text>
             
           
             <h4> Doha Essam</h4>
             <h3> Web <u>Developer</u></h3>
          

             <p> I graduated from helwan university at 2018, having Bachelor's degree in Computer Engineering <br />

               looking for job as full stack developer |  backend developer
             I was working as an application developer for one year
            </p>
            <br></br> 
            <p>
              Graduation Project : 
               with degree  excellent <br></br>
is about :smart assistant maker chatbot (SAM)
which is a platform that can replaces call center or
secretory for example. using NLP , RNN , NLU ,data analysis ,

              </p>  
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
            // <br></br>
            // <div className="condiv">
              
            // <h1 className="subtopic">About Me</h1>
            // <h4>Hey there,</h4>
            // <h1>I'm Abdul Wahid Naafi</h1>
            // <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
            // <br></br>
            // <p>I started my journey in the world of computers from an young age,
            // now I’m 20 years old, Pursuing my Software Engineering Degree in
            // VIT University Vellore.  Web development is my center of interest, i always
            // love the idea of cross-platform development, 1-n one code base deploy into almost
            // any platform, which web technology like Javascript enables me to do. I also like
            // creating Interactive UI components for better UX  and share those desgin and codes
            // to the world through Github, Codepen and Instagram.
            // </p>
            
            // </div>
            )
        }
    }
    
export default About