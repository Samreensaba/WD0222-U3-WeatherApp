import {FormControl, Button, Form, Container, Row, Col} from "react-bootstrap"
import { useState, useEffect } from "react";


const Homepage = ()=>{
  //const [cityname, setCityname]=useState('london')
  //cosnt [result, setResult]=useState([])

  /* useEffect(() => {
    searchQuery();
  }, [cityname]);

  const newCity=(event)=>{
    setCityname(event.target.value)
  } */

  const searchQuery = async (cityname) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}}&appid=1c883548f975ddcaa3c1ba05a78d91b3`
      );

      const data = await response.json();
      const forecast =(data.main);
    } catch (error) {
      console.log(error);
    }
  };
    return(
      <Container>
        
      <Form inline className="mt-2">
        <FormControl type="text" placeholder="Search"  style={{width:"50%", marginLeft:"25%"}} />
        <Button variant="outline-success" className="ml-1">Search</Button>
      </Form>
      
      

      {/* <Row className="mt-2">
        <Col md={6}>
        <h2 className="text-center">Weather Forecast for ${cityname}</h2>
        <p>{forecast.temp}</p>
      
      </Col>
      </Row> */}
      
      
    </Container>    
    )
}
export default Homepage