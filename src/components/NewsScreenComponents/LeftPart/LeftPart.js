import React, { Component } from 'react';
import { 
  Col,
  Container,
  Image,
  Row,
 } from 'react-bootstrap';
 
import {Typography,Paper, Link, Button, CircularProgress, Slide} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VizSensor from 'react-visibility-sensor';
import Skeleton from '@material-ui/lab/Skeleton';
import NewsCard from '../../GlobalComponents/NewsCard';
import { getCategorys, getNewsPerPage, getNewsFromSomeCategory } from '../../../redux/Actions/NewsScreenAction';
import { connect} from "react-redux";
import './style.css';

class LeftPart extends Component {
  constructor() {
    super();
    this.state = { 
      page:1
    }
  }

  componentDidMount(){
    this.props.getCategorys();
    this.props.getNewsPerPage(0);
  }

  
  render() { 
    return (
    <div>
   
      <Row className="justify-content-sm-center my-3 ">
        <Col lg={10} md={12}  >

          <Slide timeout={500}  direction="right" in={true} mountOnEnter unmountOnExit>
            {this.props.isLoadCategorys ?
              <Row className=" justify-content-md-center">
                {this.props.categorysList.map(element => {
                  return (
                    <Col lg={3} md={4} sm={6} className="my-1" >
                      <Button 
                        onClick={()=>{
                          this.props.getNewsFromSomeCategory(element.id);
                        }}

                        style={{
                          backgroundColor:'red', 
                          width:'100%', 
                          color:'#fff', 
                          fontWeight:700
                        }} 
                        elevation={8} 
                      >
                        <Typography   align="center"  variant="subtitle1" >
                          {element.category}
                        </Typography>
                      </Button>
                    </Col>
                  );
                })}

              </Row>
              :
              <Skeleton variant="rect" animation="wave" style={{ height: "10vh" }} />
            }
          </Slide>
        
          <Slide timeout={500}  direction="up" in={true} mountOnEnter unmountOnExit>
            <div>
              {
                this.props.isLoadNews ? 
                  this.props.newsList.map(element => {
                    return(
                      <NewsCard 
                        key={element.id}
                        nameArticle={element.header}
                        categoryArticle={element.category.category} 
                        date={element.date}
                        img={element.main_image_url}
                        shotrDescription={element.short_description}
                      />
                    );
                  })
                :
                  <CircularProgress 
                    className="d-block mx-auto my-3" 
                    style={{width:64, height:64}}
                  />
              }
             
              
            </div>
          </Slide>
         
          <Typography   align="center"  variant="h5" >
            <Pagination 
              onChange={(event, value)=>{
                this.props.getNewsPerPage(value-1)
              }}  
              className="mt-5"
              count={10} 
              color="primary" 
              showFirstButton 
              showLastButton
              size="large"
            />
        </Typography>

        </Col>
      </Row>

    </div>
    );
  }
}
 

const mapStateToProps = state => {
  return {
    newsList: state.NewsScreenReducer.newsList,
    isLoadNews: state.NewsScreenReducer.isLoadNews,

    categorysList: state.NewsScreenReducer.categorysList,
    isLoadCategorys: state.NewsScreenReducer.isLoadCategorys,

   
  };
};

export default connect(
  mapStateToProps, 
  {
    getNewsPerPage,
    getCategorys,
    getNewsFromSomeCategory
  }
)(LeftPart);