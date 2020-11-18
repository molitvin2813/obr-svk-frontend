import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainPart from '../../components/LoginScreenComponents/MainPart'
class LoginScreen extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
    
  }
  render(){
    return (
      <div>
        <MainPart />
      </div>
    );
  }
  
}

export default LoginScreen;
