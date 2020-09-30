import React, { Component } from 'react';
 import {Card , Button} from "react-bootstrap"
 import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';
   
   const customTheme = {
    yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#262626',
   };

class Work extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            'data':[1,2,3,4]
        };
       
    }

    
render_data = ({ items }) => (  
// render_data({items}){
    <div className="data_line">
    <ul >
    {
      items.map(key => (
        <li key={key}> item {key}</li>
      ))
    }
  </ul>
  </div>
    )

    render() {



        return (
            <div className="condiv">
            <Card className="work">
 
  <Card.Body>
    
  <Timeline theme={customTheme} dateFormat='ll'>
    <Container>
     <YearContent startDate='2019/9' currentYear />
     <BodyContent>
      <Section title='APPLICATION DEVELOPER'>
       <Description variant='subtitle' text='MIVORS' />
       <Description text='' />
      <p>
      <dl>
      <dt> project Aljomah :</dt>
      <dd>customize front-end pages using angular</dd>
</dl>
<dl>
<dt>Project AHCL (honda in Saudi Arabia):</dt>
<dd>Customize pages in oracle rightnow portal using native
php , jquery .</dd>
<dd>Create new pages in oracle rightnow portal using
bootstrap , jquery , php , soap web-service . </dd>
</dl>
<dl>
    <dt>Project samou real state :</dt>
    <dd>Create and Customize invoices , proposal , contract in
oracle rightnow portal using bootstrap , php .</dd>
</dl>
<dl>
<dt>Project nahda :</dt>
<dd>customize invoices in oracle rightnow portal using html ,
css , php .</dd>
<dd>Create reports using oracle fusion</dd>
</dl>
<br></br>
<dl>
<dd>Create RTF reports </dd>
<dd>Create from scratch portal based on Drupal CMS using </dd>
<dd>custom php modules and integrated with zoho webservices.   </dd>  
</dl>
</p>

      </Section>

   
     </BodyContent>
    </Container>

    <Container>
     <YearContent startDate='2019' endDate="2019" />
     <BodyContent>
     
      <Section title='TRAINING EXPERINCE'>

      <p>
     <dl> 
       <dt>   Smart touch solutions  </dt>
<dd>for 3 months as php developer </dd>
</dl>

<dl> 
       <dt>   ICT CUBE  </dt>
<dd>Internship for 2 months software engineer </dd>
</dl>

      </p>
      </Section>
     </BodyContent>
    </Container>

   </Timeline>

  </Card.Body>
</Card>

<br></br>

{/* <render_data items={1,2,3,4} /> */}



          </div>
           
            )
        }
    }
    
export default Work