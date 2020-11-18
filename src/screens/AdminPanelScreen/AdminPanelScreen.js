import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import MainPart from '../../components/AdminPanelScreeenComponents/MainPart';
import AdminPanelHedaer from '../../components/AdminPanelScreeenComponents/AdminPanelHedaer';


class NewsScreen extends Component {

  constructor(){
    super();
    this.state={
    }
  }

  render(){
    return (
      <div 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat', 
       
      }}
      >
        <AdminPanelHedaer />
        <MainPart />
      </div>
    );
  }
  
}

export default NewsScreen;
