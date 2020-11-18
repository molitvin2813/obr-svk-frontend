import React, { Component } from 'react';
import { 
  Col,
  Container,
  Image,
  Row,
 } from 'react-bootstrap';
 
import {Typography,Paper, Link, Button, Grow, Slide} from '@material-ui/core';

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evalation:10,
   
    }
  }
 

  render() { 
    return (
       
      <Paper 
        elevation={this.state.evalation} 
        className="my-3" 
        onMouseEnter={()=>this.setState({evalation:5})}
        onMouseLeave={()=>this.setState({evalation:10})}
      >
              
        <Row className="pb-lg-3 px-3" >
          <Paper className="ml-lg-n3 mt-lg-2 mr-lg-5" style={{backgroundColor:'#4155b6', width:'100%'}} elevation={10} >
            <Col sm={12}  className="py-3 ">
              <Typography style={{color:'#fff', fontWeight:700 , textAlign:'left'}} variant="h5" component="h5"  >
                {this.props.nameArticle}
              </Typography>
            </Col>
          </Paper>

          <Col sm={12}   >
            <Row className="justify-content-center">

              <Col lg={4} sm={10} className="mb-sm-2  my-3" >
                <Image style={{alignSelf:'center'}} src={this.props.img} thumbnail rounded/>
              </Col>
            
              <Col lg={8} className="justify-content-center"  >
              
                <Row  className="justify-content-lg-end justify-content-sm-start my-3 mx-auto">
                
                  <Col sm={4} >
                    <Typography align="center" variant="caption">
                      <Paper  style={{backgroundColor:'orange'}} elevation={8} >
                        {this.props.categoryArticle}
                      </Paper>
                    </Typography>
                  </Col>

                  <Col sm={4}  >
                    <Typography align="center" variant="caption" >
                    <Paper  elevation={8} >
                      {this.props.date}
                    </Paper>
                    </Typography>
                  </Col>
                </Row>

                <Paper  elevation={10} >
                <Row   className="pb-3 mb-2 mx-auto px-2 py-2">
                  <Typography align="justify"  variant="subtitle1" component="p"  >
                    {this.props.shotrDescription}
                  </Typography>
                </Row>
                </Paper>
              </Col>  
            </Row>
          </Col>
        </Row>
      </Paper>
   
    );
  }
}
 
export default NewsCard;