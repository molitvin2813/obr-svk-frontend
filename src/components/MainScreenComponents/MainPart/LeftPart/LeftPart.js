import React, { Component } from 'react';
import { 
  Col,
  Container,
  Image,
  Row,
  
 } from 'react-bootstrap';
 import {Typography,Paper, CircularProgress } from '@material-ui/core';
 import Skeleton from '@material-ui/lab/Skeleton';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css';
import NewsCard from '../../../GlobalComponents/NewsCard';
import { connect} from "react-redux";
import {getNews} from '../../../../redux/Actions/MainScreenActions';


class LeftPart extends Component {
  constructor() {
    super();
    this.state = {  }
  }



  /**
   *  <div style={{ height: "50vh" }}>
              <Image className="img" src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg'  />
              <p className="legend">Котик 2</p>
            </div>
   */
  componentDidMount(){
    this.props.getNews();
  }

  render() { 
   
    return (
    <div>
      <Row className="justify-content-md-center my-lg-3 ">
        <Col lg={10} md={12} className='px-0'>
          {this.props.isLoad ?
           <Carousel autoPlay={true} showThumbs={false}>
              {
                this.props.newsList.map(element=>{
                  return(
                    <div style={{ height: "50vh" }}>
                      <Image className="img" src={element.main_image_url}   />
                      <p className="legend">{element.short_description}</p>
                    </div>
                  ); 
                })
                            
              }
            </Carousel>
            :
          
            <Skeleton variant="rect" animation="wave" style={{ height: "50vh" }}>
            </Skeleton>
          
          }
         
        </Col>
      </Row>

      <Row className="justify-content-md-center my-3">
        <Col lg={10} md={12}   style={{backgroundColor:'#4155b6'}}>
          <Typography style={{color:'#fff'}} variant="h6"  >
            Направления деятельности
          </Typography>
        </Col>
      </Row>

      <Row className="justify-content-md-center my-3">
        <Col lg={10} md={12} className="">
          <Row>
            <Col lg={3} md={3} sm={6}>
              <Image src="images/doshkolnoe_180.png" />
            </Col>
            <Col lg={3} md={3} sm={6}>
              <Image src="images/srednee_180.png" />
            </Col>
            <Col lg={3} md={3} sm={6}>
              <Image src="images/dopolnitelnoe_180.png" />
            </Col>
            <Col lg={3} md={3} sm={6}>
              <Image src="images/metodrabota_180.png" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center my-3">
        <Col lg={10} md={12} className=""> 
          {
          this.props.isLoad ? 
          this.props.newsList.map(element=>{

            return (
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
        </Col>
      </Row>
    </div>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    newsList: state.MainScreenReducer.newsList,
    isLoad: state.MainScreenReducer.isLoad
  };
};

export default connect(
  mapStateToProps, 
  {
    getNews
  }
)(LeftPart);