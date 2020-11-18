import React, { Component } from 'react';

import './style.css'
import {
  Navbar, 
  NavDropdown, 
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import {Typography } from '@material-ui/core';

class Header extends Component {
    constructor() {
      super();

      this.state = { 
        newsCategory:[
          {key:0, name:"Актуально"},
          {key:1, name:"Дошкольное образование"},
          {key:2, name:"Среднее образование"},
          {key:3, name:"Дополнительное образование"},
          {key:4, name:"Воспитательная работа"},
          {key:5, name:"Методическая работа"},
          {key:6, name:"Социальная работа"},
          {key:7, name:"Патриотическое воспитание"},
          {key:8, name:"Интеллектуальные и творческие конкурсы"},
          {key:9, name:"Духовно-нравственное воспитание"},
          {key:10, name:"Международное сотрудничество"},
          {key:11, name:"Новое в законодательстве"},
          {key:12, name:"Поздравления"},
          {key:13, name:"Видео"},
        ], 
        
      }

    }


    render() { 
      return (
        <Navbar  style={{backgroundColor:'#4155b6'}}    expand="lg">
        
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Brand className="d-block d-lg-none">
          <Typography className="text-wrap brand" variant="h5"   >
            Управление образования Администрации города Свердловска и Свердловского района ЛНР
          </Typography>
        </Navbar.Brand>

        <Navbar.Collapse >
          
          <Nav className=" mx-auto" >

            <Nav.Item>
              <Nav.Link href="/">
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Главная
                </Typography>
              </Nav.Link> 
            </Nav.Item>
         
            <Nav.Item>
              <Nav.Link style={{color:"#fff"}} href="/structure">
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Структура
                </Typography>
              </Nav.Link>
            </Nav.Item>
            

            <Nav.Item>
              <Nav.Link style={{color:"#fff"}} href="/news">
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Новости
                </Typography>
              </Nav.Link>
            </Nav.Item>

            
            
            <NavDropdown   
          
              title={
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Нормативная база
                </Typography>
              }
            >
              <NavDropdown 
                drop="right"
                title={
                  <span >Нормативные акты вышестоящих органов</span>
                }
              >
                <NavDropdown.Item href="#action/3.2">
                  <Typography style={{color:'#000'}} variant="subtitle1"  >
                    Народный совет ЛНР
                  </Typography>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Typography style={{color:'#000'}} variant="subtitle1"  >
                    Глава и правительство ЛНР
                  </Typography>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Typography style={{color:'#000'}} variant="subtitle1"  >
                    МОН ЛНР
                  </Typography>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Typography style={{color:'#000'}} variant="subtitle1"  >
                    Глава АГС и СР ЛНР
                  </Typography>
                </NavDropdown.Item>
              </NavDropdown>
              
              
              <NavDropdown.Item  href="#action/3.2">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Приказы по УО АГС и СР ЛНР
                </Typography>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Планирование работы
                </Typography>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Методический кабинет
                </Typography>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  ПМПК
                </Typography>
              </NavDropdown.Item>
            </NavDropdown>
          
            <NavDropdown
              
              title={
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Госзакупки
                </Typography>
              }
            >
              <NavDropdown.Item href="#action/3.1">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Управление образования
                </Typography>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.1">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Дошкольное образование
                </Typography>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Среднее образование
                </Typography>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                <Typography style={{color:'#000'}} variant="subtitle1"  >
                  Дополнительное образование
                </Typography>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Item>
              <Nav.Link className="navBar__text_link" href="/hottline">
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Горячая линия
                </Typography>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="navBar__text_link" href="/contacts">
                <Typography style={{color:'#fff'}} variant="h6" display="inline" >
                  Контакты
                </Typography>
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
}
 
export default Header;