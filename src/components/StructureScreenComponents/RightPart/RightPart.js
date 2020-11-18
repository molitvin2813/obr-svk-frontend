import React, { Component } from 'react';
import {
  Link,
  Paper,
  Typography, 
  Slide,
  Modal
} from '@material-ui/core';
import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';
import { FormatListNumberedOutlined } from '@material-ui/icons';
import ModalPdf from '../../GlobalComponents/ModalPdf/ModalPdf';
import StyledCard from './StyledCard'
class RightPart extends Component {
  constructor() {
    super();
  
  }



  render() { 
    return (
      <Slide direction="up" timeout={500} in={true} mountOnEnter unmountOnExit>
        <Paper className="pb-3" elevation={8} >
          <Container   fluid>
            <Row className="justify-content-center my-3 pt-3 ">
              <Typography style={{color:'#000', fontWeight:700}} variant="h6" component="h6"  >
                Положения
              </Typography>
            </Row>
            <StyledCard href="pdf/uo_ags.pdf" text="Положение об управлении образования Администрации города Свердловска и Свердловского района Луганской Народной республики"/>
            <StyledCard href="pdf/buhgalteria.pdf" text="Положение о централизованной бухгалтерии при управлении образования Администрации города Свердловска и Свердловского района Луганской Народной республики" />
            <StyledCard href="pdf/hozgruppa.pdf" text=" Положение о хозяйственной группе при управлении образования Администрации города Свердловска и Свердловского района Луганской Народной республики" />
            <StyledCard href="pdf/metod_kabinet.pdf" text="Положение о методическом кабинете при управлении образования Администрации города Свердловска и Свердловского района Луганской Народной республики" />
            <StyledCard href="pdf/gospolitika.pdf" text="Положение об отделе государственной политики в сфере общего среднего образования и методического сопровождения образовательного процесса управления образования Администрации города Свердловска и Свердловского района Луганской Народной республики" />
          </Container>
        </Paper>
      </Slide>
    );
  }
}
 
export default RightPart;