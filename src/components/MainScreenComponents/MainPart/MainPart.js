import React, { Component } from 'react';
import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';

import Banners from './Banners/Banners';
import LeftPart from './LeftPart/LeftPart';
class MainPart extends Component {

  constructor() {
    super();
    this.state = {  }
  }

  /**
   *  className="d-none d-lg-block text_header"
   */

  render() { 
    return (
      <Container style={{backgroundColor:'#EEEEEE'}} fluid>
        <Row>
          <Col lg={9} sm={12}  >
            <LeftPart/>
          </Col>
          <Col lg={3} sm={0} className="d-none d-lg-block">
            <Banners />
          </Col>
        </Row>
    </Container>     
    );
  }
}
 
export default MainPart;