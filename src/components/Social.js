import React, { Component } from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin-circled.png'

class Social extends Component {
    render() {
        return (
            <div class="social">
                
            
            <a href="https://github.com/doha22" target="_blank">
            <img src={github} className="social_logos"></img>
            </a>
            {/* <a href="https://www.facebook.com/abdul.w.naafi" target="_blank"><i class="fab fa-facebook-f"></i></a> */}
            <a href="https://www.linkedin.com/in/doha-essam-11893111a/" target="_blank">
            <img src={linkedin} className="social_logos"></img>
            </a>
            </div>
            )
        }
    }
    
export default Social