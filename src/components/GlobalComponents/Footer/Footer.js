import React, { Component } from 'react';
import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';
import './style.css';
import {Typography } from '@material-ui/core';

class Footer extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return (
      <Container className="mt-lg-5" style={{backgroundColor:'#4155b6'}} fluid>
        <Row className="justify-content-md-center">
          <Col  lg={8}  className=" my-3  text_header">
            <Typography className="text-wrap " align="center" variant="caption"  >
             
              <div> Все права на статьи, иллюстрации, другие материалы принадлежат
              </div>
              <div> Управлению образования администрации города Свердловска и Свердловского района 
                Луганской Народной Республики</div>
              <div className="mt-3">Адрес юридического лица:</div>
              <div>94809, Луганская Народная Республика, г. Свердловск, ул. Барбюса, 7а</div>
              <div>Телефон: +3 (806434) 2-21-33</div>
              <div>Email: obr@svk-portal.su</div>
              <div>г. Свердловск 2020 год.</div>
             
            </Typography>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Footer;