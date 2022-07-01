import { useEffect } from "react"
import { ListGroup } from "react-bootstrap";

const Homepage = ()=>{

    useEffect(() => {
        searchQuery();
      }, []);
    
      const searchQuery = async () => {
        try {
          const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=london&appid=1c883548f975ddcaa3c1ba05a78d91b3"
          );
    
          const data = await response.json();
          const forecast =(data.main);
        } catch (error) {
          console.log(error);
        }
      };
    return(
    
        <ListGroup>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
    )
}
export default Homepage