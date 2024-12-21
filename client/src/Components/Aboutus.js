import React from "react";  
import { Container, Row, Col } from "reactstrap";
import "./AboutUs.css";
import about1 from "../Images/about1.jpg";
import about2 from "../Images/about2.jpg";
import about3 from "../Images/about3.jpg";
import about4 from "../Images/about4.jpg";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row>
        {/* Left Column: Images */}
        <Col lg="6">
          <div className="image-grid">
            <img src={about1} alt="about1" className="img-fluid mb-3 rounded" />
            <img src={about2} alt="about2" className="img-fluid mb-3 rounded" />
            <img src={about3} alt="about3" className="img-fluid mb-3 rounded" />
            <img src={about4} alt="about4" className="img-fluid mb-3 rounded" />
          </div>
        </Col>

        {/* Right Column: Text Content */}
        <Col lg="6" className="text-right">
          <h1 className="section-title text-uppercase mb-2" >About Us</h1>
          
          <Col md="12" className="d-flex flex-column justify-content-center text-center">
            
            <p style={{ fontSize: "18", lineHeight: "1.8" }}>
              A successful restaurant experience starts with <strong>Restaurant Booking</strong>!
              <br /><br />
              <em>Restaurant Booking</em> is the most trusted restaurant booking platform that opens doors to the
              world’s best restaurants near you. Getting the most out of your restaurant experience has never been
              easier.<br /><br />
              Find a restaurant based on your preferences from a selection of restaurants with special offers along the
              way. Check real-time availability and book a table with just a few taps with instant confirmation 24/7.
              <br /><br />
              Let’s live to the fullest, go out more, enjoy real-life experiences, and make memories!
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
