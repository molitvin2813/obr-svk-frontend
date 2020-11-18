import React, { Component } from 'react';
import { 
  Col,
  Container,
  Image,
  Row,
 } from 'react-bootstrap';
 
import {Typography,Paper, Link, Slide} from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VizSensor from 'react-visibility-sensor';

import './style.css';

class LeftPart extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid>
      <Row className="justify-content-center my-3 ">
        <Col lg={10} md={12}  >

          <Slide timeout={500} direction="right"  in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3 px-3 py-2" >
              <Typography align="center" variant="h5" component="h5" >
              Структура
              управления образования Администрации города Свердловска и 
              Свердловского района
              Луганской Народной Республики
              </Typography>
            </Paper>
          </Slide>

          <Slide direction="up" timeout={500} in={true} mountOnEnter unmountOnExit>

            <Paper elevation={10} className="my-3 " >

            
                <Image src="images/struktura.png" className="d-block mx-auto" thumbnail rounded/>
              

            </Paper>

          </Slide>

        </Col>
      </Row>

      </Container>
    );
  }
}
 
export default LeftPart;