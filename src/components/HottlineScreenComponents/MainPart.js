import React, { Component } from 'react';
import { 
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';

import InputMask from 'react-input-mask'

import {
  Typography,
  Paper, 
  Link,
  Button, 
  Grow, 
  Slide,
  Input,
  TextField
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VizSensor from 'react-visibility-sensor';





class LeftPart extends Component {
  constructor() {
    super();
    this.state = {
      phone:null,
      email:null,
      message:null
    }
  }
  render() { 
    return (
    <div>
    <Container fluid>
      <Row className="justify-content-center my-3 ">
        <Col lg={10} md={12}  >

          <Slide timeout={500} direction="right"  in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3 px-3 py-2" >
              <Typography align="center" variant="h5" component="h5" >
                Получить разъяснения по интересующим вас вопросам вы можете, связавшись с нами по 
                телефону (06434) 2-21-33. График работы телефонной горячей линии: понедельник - пятница
                с 9-00 до 13-00, с 14-00 до 18-00. Текстовые обращения принимаются круглосуточно и 
                обрабатываются согласно вышеуказанному графику.
              </Typography>
            </Paper>
          </Slide>

          <Slide direction="up" timeout={500} in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3" >

              <Row className="justify-content-center my-3 ">
                <Col lg={10} md={12}  className="mx-3" >
                  <Typography align="center" variant="h5" component="h5">
                    Форма для письменных обращений
                  </Typography>

                  <Typography align="center" variant="h6" component="h6">
                    Все поля формы обязательны для заполнения
                  </Typography>

                  <form   noValidate autoComplete="off">
                    
                    <Row className="my-2">
                      <Col sm={12}>
                        <TextField  
                          fullWidth
                          className=" my-2"
                          id="theme" label="Тема обращения" 
                          variant="outlined"
                        />
                      </Col>
                    </Row>
                      
                    <Row className="my-2">
                      <Col md={10} className="my-2">
                        <TextField  
                          fullWidth
                          id="fio" label="ФИО" 
                          variant="outlined"
                          helperText="Указывать ФИО без сокращений"
                        />
                      </Col>
                      <Col md={2} className="my-2">
                        <TextField
                          fullWidth
                          type="number"
                          id="age" label="Возраст" 
                          variant="outlined"
                          defaultValue="0"
                        />
                      </Col>
                    </Row>
                    
                    <Row className="my-2">
                      <Col md={8} className="my-2">
                        <TextField  
                          fullWidth
                          id="adres" label="Адрес" 
                          variant="outlined"
                        />
                      </Col>

                      <Col md={4} className="my-2" >
                        <InputMask
                          mask="(999) 999 - 99 - 99"
                          value={this.state.phone}
                          onChange={(val)=>this.setState({phone:val.target.value})}
                        >
                          {() => <TextField
                            id="phone"
                            label="Номер телефона"
                            name="phone"
                            variant="outlined"
                            fullWidth
                          
                          />}
                        </InputMask>
                      </Col>
                    </Row>
                    
                    <Row className="my-2">
                      <Col md={12} className="my-2" >
                      
                        <TextField
                          id="email"
                          value={this.state.email}
                          onChange={(val)=>this.setState({email:val.target.value})}
                          label="Электронная почта"
                          name="email"
                          variant="outlined"
                          fullWidth
                          type="email" 
                          placeholder="email@example.com"
                        />
                        
                      </Col>
                    
                    </Row>

                    <Row className="my-2">
                      <Col md={12} className="my-2" >
                          <TextField
                            id="email"
                            value={this.state.message}
                            onChange={(val)=>this.setState({message:val.target.value})}
                            label="Ваше сообщение"
                            name="email"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={10}
                          />
                      
                      </Col>
                    </Row>
                    
                    <Row className="my-2 justify-content-center">
                      <Col md={6} className="my-2" >
                        
                          <Button 
                            style={{width:'100%'}}
                            variant="contained"
                            color="primary"
                            onClick={()=>alert("Соси")}
                          >
                            <Typography   align="center"  variant="subtitle1">
                            Хуй
                            </Typography>
                          
                          </Button>
                      
                      </Col>
                    </Row>
                  </form>
                
                </Col>
              </Row>

            </Paper>
          </Slide>

        </Col>
      </Row>

      </Container>
      

    </div>
    );
  }
}
 
export default LeftPart;