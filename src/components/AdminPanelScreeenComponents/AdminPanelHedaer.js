import React, { Component } from 'react';
import {
  Container, 
  Row,
  Col
} from 'react-bootstrap';
import {
  Typography, 
  Paper
} from '@material-ui/core';
class AdminPanelHeader extends Component {
  
  render () {
    return(
      <Container 
        fluid
        style={{
          backgroundColor:'rgba(65,85,182,0.7)',
           height:'10vh', 
           paddingTop:'2.5vh',
           borderBottomLeftRadius:100,
           borderBottomRightRadius:100
        }}
      >
        <Typography align="center" style={{color:'#fff'}} variant="h5" >
          Админка-хуинка
        </Typography>
      </Container>
    );
  }
}

export default AdminPanelHeader;