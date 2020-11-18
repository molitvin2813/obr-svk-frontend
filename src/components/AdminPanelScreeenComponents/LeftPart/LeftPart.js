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
  Divider
} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

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
        <Paper elevation={10} className="my-3">
          <List component="nav" aria-label="main mailbox folders">

            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Статья" />
            </ListItem>

            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Категория статьи" />
            </ListItem>

            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Нормативная база" />
            </ListItem>

            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Категория нормативной базы" />
            </ListItem>

            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={(event) => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Контакты" />
            </ListItem>
          </List>

          <Divider />
          
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItem
              button
              selected={this.state.selectedIndex === 2}
              onClick={(event) => this.handleListItemClick(event, 2)}
            >
              <ListItemText primary="Выйти" />
            </ListItem>
            
          
          </List>
        </Paper>
      </Container>
    );
  }
}

export default LeftPart;