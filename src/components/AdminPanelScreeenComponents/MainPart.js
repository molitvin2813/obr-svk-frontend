import React, { Component } from 'react';
import {
  Container, 
  Row,
  Col
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
      <Container 
        fluid
        style={{
          height:'90vh'
        }}
      >
        <Row>
          <Col lg={3} sm={12}>
            <LeftPart/>
          </Col>
          <Col lg={9} sm={0}>
            <RightPart />
          </Col>
        </Row>
    </Container>     
    );
  }
}
 
export default MainPart;