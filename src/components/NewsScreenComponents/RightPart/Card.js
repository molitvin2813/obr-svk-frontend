import React, { Component } from 'react';
import {
  Link,
  Paper,
  Typography, 
  Fade, Slide, Collapse, Zoom
} from '@material-ui/core';
import {
  Image
} from 'react-bootstrap';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation:false
    }
  }
  render() { 
    return (
      <Paper  
        style={{backgroundColor:'#4155b6'}} 
        
        elevation={10} 
        onMouseEnter={()=>this.setState({elevation:true})}
        onMouseLeave={()=>this.setState({elevation:false})}
      >
        <div className="justify-content-center my-3 mx-2">
          <Link  href={this.props.link} style={{textDecoration:"none"}}>
            <div>
            <Image className="mx-auto d-block py-2 px-0 mt-2" src={this.props.img} rounded  thumbnail/>
            </div>
            <Collapse  timeout={400} in={this.state.elevation}>
              <Fade  timeout={600} in={this.state.elevation}> 
                <Typography className="py-1" style={{color:'#fff'}} align="center" variant="h6" component="h6"  >
                  {this.props.articleTitle}
                </Typography>
              </Fade>
            </Collapse >
          </Link>
        </div>
      </Paper>
    );
  }
}
 
export default Card;