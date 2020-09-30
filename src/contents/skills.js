import React, { Component } from 'react'
import  { useState, useEffect } from "react";
import {Card , Button , ProgressBar } from "react-bootstrap"
import nodejs from '../images/nodejs.png';
import html from '../images/html.png'
import css from '../images/css.png'
import php from '../images/php.png'
import reactjs from '../images/react.png'
import jquery from '../images/jquery.png'
import bootstrap from '../images/bootstrap.png'
import laravel from '../images/laravel.png'
import nestjs from '../images/nestjs.png'
import mysql from '../images/mysql.png'
import python from '../images/python.png'
import mongodb from '../images/mongodb.png'
import postgres from '../images/postgress.png'

import ProgressSkills from '../components/progress_bar'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        // this.state={
        //     'myskills':['HTML','CSS','JS','PHP','REACT JS','FIREBASE','MIT APP']
        // };
        // this.state = {hovered: false};
        this.state={
        'web_r' : [
            { bgcolor: "#6a1b9a", completed: 80 ,name:"express"},
            { bgcolor: "#00695c", completed: 90  , name:"css" },
            { bgcolor: "#ef6c00", completed: 90,name:"html" } ,
            { bgcolor: "#6a1b9a", completed: 70 ,name:"jquery"}, 
            { bgcolor: "#6a1b9a", completed: 70 ,name:"reactjs"},
      ]
       ,
       'web_l' : [
   
        { bgcolor: "#00695c", completed: 40  , name:"Typescript" },
        { bgcolor: "#ef6c00", completed: 53,name:"laravel" } ,
        { bgcolor: "#6a1b9a", completed: 80 ,name:"express"}, 
        { bgcolor: "#6a1b9a", completed: 40 ,name:"nestjs"},
        { bgcolor: "#00695c", completed: 40  , name:"flask" },
  ],
      'Language_programming' : [
        { bgcolor: "#ef6c00", completed: 93,name:"nodejs" } ,
        { bgcolor: "#6a1b9a", completed: 70 ,name:"python"},
        { bgcolor: "#00695c", completed: 90  , name:"js" },
        { bgcolor: "#ef6c00", completed: 93,name:"php" } ,
        { bgcolor: "#6a1b9a", completed: 60 ,name:"java"},
      ] ,
      'database' : [
        { bgcolor: "#6a1b9a", completed: 80 ,name:"Oracle"},
        { bgcolor: "#00695c", completed: 60  , name:"Mysql" },
        { bgcolor: "#ef6c00", completed: 50,name:"Postgress" } ,
        { bgcolor: "#6a1b9a", completed: 80 ,name:"Mongodb"}, 
    
  ]
    }

    }
 
  
  

    render() {
        return (
            <div className="condiv skills">
                <div className="container">
            <h1 className="subtopic">Skills</h1>
            <h5 className="skills_header"> Web Development : </h5>  <hr></hr>



<div className="row">
<div className="col-md-6">
{this.state.web_r.map((item, idx) => (
     <ProgressSkills key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name}
    />
     
     ))}

</div>

<div className="col-md-6">
{this.state.web_l.map((item, idx) => (
     <ProgressSkills key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name}
    />
     
     ))}

</div>

</div>

<br></br>
<h5 className="skills_header">Programming Languages : </h5> <hr></hr>
<div className="row">
    <div className="col-md-6">
{this.state.Language_programming.map((item, idx) => (
     <ProgressSkills key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name}
    />
     
     ))}
</div>
</div>
<br></br>
<h5 className="skills_header">DataBase : </h5> <hr></hr>
<div className="row">
    <div className="col-md-6">
    {this.state.database.map((item, idx) => (
     <ProgressSkills key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name}
    />
     
     ))}

    </div>

    </div>
            </div>
            </div>
            
          
            )
        }
    }
    
    export default Skills