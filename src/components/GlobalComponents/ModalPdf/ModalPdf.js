import React, { Component } from 'react';
import {
  Paper
} from '@material-ui/core';
import { Document, Page } from "react-pdf";

class ModalPdf extends Component {
    constructor() {
      super();
    }
   
    render() { 
      return (
        <Paper className="my-3" elevation={8} 
          style={{
            width:'80%',
            display:'block',
            margin:'auto'
          }} 
        >
          <h2 id="simple-modal-title">Просмотр документа PDF</h2>
          <p id="simple-modal-description">
            {this.props.docName}
          </p>
          
        xx
        </Paper>
      );
    }
}
 
export default ModalPdf;