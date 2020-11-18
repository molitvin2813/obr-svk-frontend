import React, { Component } from 'react';
import {
  Divider,
  Link,
  Paper,
  Typography
} from '@material-ui/core';

class StyledCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      elevation:10
     }
  }
  render() { 
    return (
      <Paper elevation={this.state.elevation} 
        onMouseEnter={()=>this.setState({elevation:5})}
        onMouseLeave={()=>this.setState({elevation:10})}
      >
        <div className="justify-content-center my-3 mx-2">
          <Link href={this.props.href} className="py-2 px-2" target="_blank" style={{color:'#000', textDecoration:'none'}}>
            <Typography className="py-1" align="justify" variant="subtitle1" component="p"  >
              {this.props.text}
            </Typography>
          </Link>
        </div>
      </Paper>
    );
  }
}
 
export default StyledCard;