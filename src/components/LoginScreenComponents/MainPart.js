import React, { Component } from 'react';
import { 
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';


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

import { loginAdmin }  from '../../redux/Actions/LoginScreenActions';
import { connect} from "react-redux";

class MainPart extends Component {
  constructor() {
    super();
    this.state = {
      
      login:null,
      password:null
    }
  }

  
  render() { 
    return (

    <Container fluid 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      }}
    >
      <Row 
        className="justify-content-center align-items-center"
        style={{height:'100vh', overflow:'hidden'}}
      >
        <Col lg={4} md={12} >

          <Slide direction="down" timeout={1000} in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3 py-2" >
                <Typography align="center" variant="h5" component="h5" >
                  Вход в панель администратора
                </Typography>
            </Paper>
          </Slide>

          <Slide direction="up" timeout={1500} in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3" >

              <Row className="justify-content-center my-3 ">
                <Col lg={10} md={12}  className="mx-3" >

                  <form   noValidate autoComplete="off">

                    <Row className="my-2">
                      <Col md={12} className="my-2" >
                        <TextField
                          id="login"
                          value={this.state.login}
                          onChange={(val)=>this.setState({login:val.target.value})}
                          label="Логин"
                          name="login"
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
                          id="password"
                          value={this.state.password}
                          onChange={(val)=>this.setState({password:val.target.value})}
                          label="Пароль"
                          name="password"
                          variant="outlined"
                          fullWidth
                          type="password" 
                        />
                      </Col>
                    </Row>
                    
                    <Row className="my-2 justify-content-center">
                      <Col md={6} className="my-2" >
                          <Button 
                            style={{width:'100%'}}
                            variant="contained"
                            color="primary"
                            onClick={ ()=>{
                               this.props.loginAdmin(this.state.login, this.state.password)
                               alert(this.props.error);
                            }}
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

    );
  }
}
 

const mapStateToProps = state => {
  return {
    token: state.LoginScreenreducer.token,
    error: state.LoginScreenreducer.error,
  };
};

export default connect(
  mapStateToProps, 
  {
    loginAdmin,
  }
)(MainPart);