import React, { Component } from 'react';
import { 
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import {
  Typography,
  Paper,  
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from '@material-ui/core';


class LeftPart extends Component {
  constructor() {
    super();
    this.state = {
      rows :[
        {
          name:'Начальник управления образования',
          fio:'Черных Лариса Вячеславовна', 
          time:'Вторник – 14.00 – 18.00Четверг – 14.00 – 18.00',
          telephone:'2-21-33'
        },
        {
          name:'Заместитель начальника управления образования – начальник отдела государственной политики в сфере общего образования и методического сопровождения образовательного процесса',
          fio:'Чеботникова Светлана Анатольевна', 
          time:'Среда – 09.00 – 13.00 Пятница – 14-00-18-00',
          telephone:'2-25-62'
        },
        {
          name:'Начальник отдела методологии и экономики образования, организации бюджетного процесса',
          fio:'Краснянская Ирина Александровна', 
          time:'Среда – 09.00 – 13.00Пятница – 14-00-18-00',
          telephone:'2-20-03'
        },
        {
          name:'Главный бухгалтер централизованной бухгалтерии при управлении образования',
          fio:'Куницина Вера Николаевна', 
          time:'Вторник – 09.00 – 13.00 Пятница – 14-00-18-00',
          telephone:'2-51-79'
        },
        {
          name:'Начальник хозяйственной группы при управлении образования',
          fio:'Слесарева Наталья Васильевна', 
          time:'Вторник – 09.00 – 13.00 Пятница – 14-00-18-00',
          telephone:'2-23-26'
        },
      ]
    }
  }
  render() { 
    return (
    <div>
    <Container fluid>
      <Row className="justify-content-center my-3 ">
        <Col lg={10} md={12}  >

          <Slide timeout={500} direction="right"  in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3 px-3 py-2" >
              <Typography align="center" variant="h5" component="h5" >
                Контакты
              </Typography>
            </Paper>
          </Slide>

          <Slide direction="up" timeout={500} in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} className="my-3" >

            <TableContainer component={Paper}>
              <Table  aria-label="simple table">

                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography align="center" variant="subtitle1">
                        Должность
                      </Typography> 
                    </TableCell>

                    <TableCell>
                      <Typography align="center" variant="subtitle1">
                        ФИО
                      </Typography> 
                    </TableCell>

                    <TableCell>
                      <Typography align="center" variant="subtitle1">
                        Время приема граждан
                      </Typography> 
                    </TableCell>

                    <TableCell>
                      <Typography align="center" variant="subtitle1">
                        Контактный телефон
                      </Typography> 
                    </TableCell>
               
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.state.rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" style={{width:'40%'}}>
                        <Typography align="justify" variant="subtitle1"> 
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell  style={{width:'20%'}}>
                        <Typography align="justify" variant="subtitle1"> 
                          {row.fio}
                        </Typography>
                      </TableCell>
                      <TableCell  style={{width:'20%'}}>
                        <Typography align="center" variant="subtitle1"> 
                          {row.time}
                        </Typography>
                      </TableCell>
                      <TableCell style={{width:'20%'}}>
                        <Typography align="justify" variant="subtitle1"> 
                          {row.telephone}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>


            </Paper>
          </Slide>

        </Col>
      </Row>

      </Container>
      

    </div>
    );
  }
}
 
export default LeftPart;