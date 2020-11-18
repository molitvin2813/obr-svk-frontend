import React, { Component } from 'react';
import {
  Container, 
  Row,
  Col
} from 'react-bootstrap';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  IconButton,
  ListItemSecondaryAction,
  
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { 
  AddOutlined, 
  DeleteOutlined,
  AddCircleOutlineOutlined
} from '@material-ui/icons';

class LeftPart extends Component{

  constructor(){
    super();

    this.state={
      selectedIndex:-1
    }
  }

  handleListItemClick(event, id){

  }
  render(){
    return(
      <Container fluid>
        

        <Paper elevation={10}  className="px-3 my-3">
          <Typography variant="h5" align="left">
            Название категории для редактирования
          </Typography>
        </Paper> 

        <Paper elevation={2} className="mt-3 "
          style={{width:"15vh"}}
        >
          <IconButton color='primary' size="medium" className="mx-auto d-block" edge="end" aria-label="delete">
            <AddCircleOutlineOutlined fontSize="large" style={{color:'green'}} />
          </IconButton>
        </Paper>
        <Paper elevation={10} className="my-3">
          
          <List>
            <ListItem button>
              <ListItemText
                primary="Название записи"
              />
              
            
        
              <IconButton color='secondary' className="mx-2" aria-label="delete">
                <DeleteOutlined fontSize="medium"   />
              </IconButton>
            </ListItem>

            <ListItem button>
              <ListItemText
                primary="Название записи"
              />
              
            
              <IconButton color='secondary' className="mx-2" edge="end" aria-label="delete">
                <DeleteOutlined fontSize="medium"   />
              </IconButton>
              
            </ListItem>

            <ListItem button>
              <ListItemText
                primary="Название записи"
              />
              
            
              <IconButton color='secondary' className="mx-2" edge="end" aria-label="delete">
                <DeleteOutlined fontSize="medium"   />
              </IconButton>
              
            </ListItem>

            <ListItem button>
              <ListItemText
                primary="Название записи"
              />
              
             
              <IconButton color='secondary' className="mx-2" edge="end" aria-label="delete">
                <DeleteOutlined fontSize="medium"   />
              </IconButton>
              
            </ListItem>

            <ListItem button>
              <ListItemText
                primary="Название записи"
              />
              
            
              <IconButton color='secondary' className="mx-2" edge="end" aria-label="delete">
                <DeleteOutlined fontSize="medium"   />
              </IconButton>
              
            </ListItem>

          

          </List>
          
        </Paper>

        <Paper elevation={10}  className=" my-3">
        
              <Pagination 
                onChange={(event, value)=>{
                  alert('this.props.getNewsPerPage(value-1)');
                }}  
                className="py-2 d-block mx-auto"
                count={10} 
                color="primary" 
                showFirstButton 
                showLastButton
                size="large"
              />
         
        </Paper>
      </Container>
    );
  }
}

export default LeftPart;