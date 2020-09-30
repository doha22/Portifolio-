import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/pro2.jpg';
import Social from '../components/Social'

import Contact from '../components/contact'







class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Doha Essam ','I am a Full Stack web developer']} speed={100} eraseDelay={700}/>
           
{/* <a name="ch"></a>
            <div>
                <a href="#ch">about</a>
            </div> */}

<Contact />

<br></br>
<Social />
            </div>
            )
        }
    }
    
    export default Home