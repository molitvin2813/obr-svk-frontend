import React, { Component } from 'react';

import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';
import './style.css';
import {Typography } from '@material-ui/core';

class LogoHeader extends Component {
    constructor() {
      super();
      this.state = {  }
    }
    render() { 
      return ( 
        <Container style={{backgroundColor:'#4155b6'}} fluid>
          <Row className="justify-content-md-center">

            <Col lg={4} className="d-none d-lg-block"><Image className="d-block ml-auto" src="images/logotip_120.png" rounded /></Col>
            <Col lg={4}  className=" my-auto d-none d-lg-block text_header">
              <Typography className="text-wrap brand"  variant="h5"  >
                Управление образования Администрации города Свердловска и Свердловского района ЛНР
              </Typography>
            </Col>
            <Col lg={4} className="d-none d-lg-block" ><Image src="images/gerb_lnr_120.png" rounded /></Col>
          </Row>
        </Container>
      );
    }
}
 
export default LogoHeader;