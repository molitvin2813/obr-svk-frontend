import React, { Component } from 'react';
import {
  Link,
  Paper,
  Typography, 
  Slide,
  CircularProgress
} from '@material-ui/core';
import {
  Container, 
  Row,
  Col,
  Image
} from 'react-bootstrap';
import Card from './Card';
import { getLastNews } from '../../../redux/Actions/NewsScreenAction';
import { connect} from "react-redux";

class RightPart extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  componentDidMount(){
    this.props.getLastNews();
  }
  
  render() { 
    return (
      <Slide direction="up" timeout={500} in={true} mountOnEnter unmountOnExit>
        <Paper className="pb-3" elevation={8} >
          <Container   fluid>

           
            <Row className="justify-content-center my-3 pt-3 ">
              <Typography style={{color:'#000', fontWeight:700}} variant="h6" component="h6"  >
                Последние новости
              </Typography>
            </Row>
            {
              this.props.isLoadLastNews ?
                this.props.lastNewsList.map(element => {
                  return(
                    <Card 
                      img={element.main_image_url}
                      articleTitle={element.header}
                      link="#"
                    />
                  );
                })
              :
                <CircularProgress 
                  className="d-block mx-auto my-3" 
                  style={{width:64, height:64}}
                />
            }
           
          </Container>
        </Paper>
      </Slide>
    );
  }
}
 


const mapStateToProps = state => {
  return {
    lastNewsList: state.NewsScreenReducer.lastNewsList,
    isLoadLastNews:state.NewsScreenReducer.isLoadLastNews,
  };
};

export default connect(
  mapStateToProps, 
  {
    getLastNews,
  }
)(RightPart);