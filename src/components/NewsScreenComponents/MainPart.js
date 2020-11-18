import React, { Component } from 'react';
import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';

import RightPart from './RightPart/RightPart';
import LeftPart from './LeftPart/LeftPart';
class MainPart extends Component {

  constructor() {
    super();
    this.state = {  }
  }

  render() { 
    return (
      <Container fluid>
        <Row>
          <Col lg={9} sm={12}  >
            <LeftPart/>
          </Col>
          <Col lg={3} sm={0} className="d-none d-lg-block">
            <RightPart />
          </Col>
        </Row>
    </Container>     
    );
  }
}
 
export default MainPart;