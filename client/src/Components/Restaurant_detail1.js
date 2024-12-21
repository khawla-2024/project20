import { Button, Container, Row, Col } from "reactstrap";
import res1 from "../Images/res1.png";
import loc1 from "../Images/loc1.png";
import res2 from "../Images/res2.png";
import loc2 from "../Images/loc2.png";
import res3 from "../Images/res3.png";
import loc3 from "../Images/loc3.png";
import res4 from "../Images/res4.png";
import loc4 from "../Images/loc4.png";
import res5 from "../Images/res5.png";
import loc5 from "../Images/loc5.png";
import men1 from "../Images/men1.png";
import men2 from "../Images/men2.png";
import men3 from "../Images/men3.png";
import men4 from "../Images/men4.png";
import men5 from "../Images/men5.png";

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Restaurant_detail1=()=>{
    // Access the restaurant id from the URL
    const { id } = useParams();
    // Example for switching content based on id
  // You can fetch data for a specific restaurant based on the 'id' value from a server or use static data.
  const restaurantInfo = {
    1: {
      name: 'Aldhahli Restaurant',
      image: res1,
      location:loc1,
      menu:men1,
      description:'It is not a real restaurant but a kiosk with outdoor tables, it has a very local atmosphere and is cheap. The owners and the food are Indian with some exceptions like the hummus and French fries which are unmatched. The chicken and peas were delicious',
      hours: 'Work Hours from 7AM - 11PM.',
    },

    2: {
      name: 'Nizwa Al Khair Restaurant',
      image: res2,
      location:loc2,
      menu:men2,
      description:'A restaurant that serves Omani cuisine for breakfast, lunch and dinner but unfortunately there is no space inside the restaurant for young people because the place is small and there is not much space for families. The owner of the restaurant runs the restaurant and his wives do the cooking. It is located in the Nizwa Souq and the food is amazing, like home-cooked food and it is crowded on holidays.',
      hours: 'Work Hours from 7AM - 11PM.',
    },

    3: {
      name: 'Liwan Nizwa Restaurant',
      image: res3, 
      location:loc3, 
      menu:men3,
      description:'Are you looking for an authentic Omani dining experience? Do you want to dive into the world of ancient Arabic flavours? If so, Liwan Nizwa Restaurant is your ideal destination. Located in the heart of the historic city of Nizwa, this distinctive restaurant offers its visitors a cultural journey through time through its rich menu and warm atmosphere.',
      hours: 'Work Hours from 7AM - 11PM.',
    },

    4: {
      name: 'AlMaisan Restaurant',
      image: res4, 
      location:loc4, 
      menu:men4,
      description:'Move to the "Rising Star" for an unlimited dining experience. An elegant dining room extends to an outdoor terrace overlooking the stunning valley views. Taste breakfast buffets featuring the most delicious international favorites. Discover the famous culinary styles of Southeast Asia and India alongside Arabic dishes at our Omani restaurant.',
      hours: 'Work Hours from 7AM - 11PM.',
    },

    5: {
      name: 'Al-Masharef Restaurant Nizwa',
      image: res5, 
      location:loc5, 
      menu:men5,
      description:'It is a restaurant that serves fresh and delicious Turkish cuisine, a very quiet place with excellent service and very reasonable prices. Among the distinctive options it offers are appetizers and salads of all kinds such as hummus, mutabal, tabbouleh, Turkish salad, fattoush, French fries, manakish, pastries, pizza, falafel and the main course, which is the very distinctive mixed grill in the place with a variety of soft drinks and juices.',
      hours: 'Work Hours from 7AM - 11PM.',
    },
    
    // Add other restaurant details as needed
  };
  const restaurant = restaurantInfo[id] || {};  // Fallback to empty object if id doesn't match
  
  //to connect the page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/food');
  };

  return(
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="text-center">
                <Row>
                  <h3>{restaurant.name || 'Aldhahli Restaurant'}</h3>
                </Row>

                <Row className="d-flex justify-content-center">
                  <Col md={6}> 
                  <h3>Restaurant facade</h3>
                    <img src={restaurant.image || res1} alt='' style={{ height: '500px', objectFit: 'cover',width:900 }} />
                  </Col>
                  <Col md={6}>
                    <h3>Location</h3>
                    <img src={restaurant.location || loc1} alt='' style={{ height: '500px', objectFit: 'cover',width:900 }}/>
                  </Col>
                </Row>
                
                <Row className="mb-4 d-flex justify-content-center">
                    <h3>Description</h3>
                    <p>{restaurant.description || 'It is not a real restaurant but a kiosk with outdoor tables, it has a very local atmosphere and is cheap. The owners and the food are Indian with some exceptions like the hummus and French fries which are unmatched. The chicken and peas were delicious.'}</p>
                    <p>{restaurant.hours || 'Work Hours from 7AM - 11PM.'}</p>
                </Row>

                <Row className="d-flex justify-content-center">
                <Col md={6}>
                <h3>Menu</h3>
                <img src={restaurant.menu || men1} alt='' style={{ height: '500px', objectFit: 'cover',width:500 }} />
                </Col>
                <Col md={6}>
                <Button onClick={handleClick}>Checked Out</Button>
                </Col>
                </Row>
            </div>
        </Container>
    )
}
export default Restaurant_detail1;