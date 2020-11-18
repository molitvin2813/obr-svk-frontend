import React, { Component } from 'react';
import {
  Link,
  Paper
} from '@material-ui/core';
import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';


class Banners extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid>
        <Row className="justify-content-center my-3">
          <Link href="#">
            <Paper elevation={3} >
              <Image src="images/banner.png" rounded />
            </Paper>
          </Link>
        </Row>
        <Row className="justify-content-center my-3">
          <Link href="#">
            <Paper elevation={3} >
              <Image src="images/banner.png" rounded />
            </Paper>
          </Link>
        </Row>
        <Row className="justify-content-center my-3">
          <Link href="#">
            <Paper elevation={3} >
              <Image src="images/banner.png" rounded />
            </Paper>
          </Link>
        </Row>
        <Row className="justify-content-center my-3">
          <Link href="#">
            <Paper elevation={3} >
              <Image src="images/banner.png" rounded />
            </Paper>
          </Link>
        </Row>
      </Container>

    );
  }
}
 
export default Banners;