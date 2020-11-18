import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/GlobalComponents/Header/Header';
import LogoHedaer from '../../components/GlobalComponents/LogoHedaer/LogoHedaer';
import MainPart from '../../components/HottlineScreenComponents/MainPart';
import Footer from '../../components/GlobalComponents/Footer/Footer';


class NewsScreen extends Component {

  constructor(){
    super();
    this.state={
    }
  }


  componentDidMount(){
    
  }
  render(){
    return (
      <div>
        <LogoHedaer />
        <Header />
        <MainPart />
        <Footer />
      </div>
    );
  }
  
}

export default NewsScreen;
