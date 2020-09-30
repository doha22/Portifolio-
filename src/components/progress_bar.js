
import * as React from 'react';


const ProgressSkills = (props) => {

    const { bgcolor, completed , name } = props;

    const containerStyles = {
      height: 20,
      width: '200px',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
   margin: 20
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold' 
    }
    
   const skillStyle ={
    fontWeight: 'bold' ,
    color:'#0b0d10b0' ,
    float:'left',
   }

//  const img= images.concat(img_skills)

// console.log(img)
    return (
        // <div className="row">
            
            // <div className="col-md-6">
                <div className="skills_h" >
         <ul>
         <li className="col-md-2">
        <span style={skillStyle}> {name} </span> </li>
  <li  className="col-md-10">  <div style={containerStyles}>
        <div style={fillerStyles}>
         <span style={labelStyles}>{`${completed}%`}</span>
          
        </div>
      </div> 
      </li>
      </ul>
    
      </div>
     
     
    );
  };
  
  export default ProgressSkills;