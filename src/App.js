import React,{Component, Suspense} from 'react'
import logo from './logo.svg';
import './App.css';
import MainScreen from './screens/MainScreen/MainScreen';
import NewsScreen from './screens/NewsScreen/NewsScreen';
import HottlineScreen from './screens/HottlineScreen/HottlineScreen';
import ContactsScreen from './screens/ContactsScreen/ContactScreen';
import StructureScreen from './screens/StructureScreen/StructureScreen';
import NormativeBaseScreen from './screens/NormativeBaseScreen/NormativeBase';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import AdminPanelScreen from './screens/AdminPanelScreen/AdminPanelScreen';

import { Route, Switch, Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import history from './components/GlobalComponents/history'
const theme = createMuiTheme();


theme.typography.h5 = {
  fontSize: '1.5rem',
  lineHeight: 1.334,
  '@media (min-width:600px)': {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.6rem',
    lineHeight: 1.4,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.5rem',
    lineHeight: 1.8
  },
};
theme.typography.h6 = {
  fontSize: '1.25rem',
  lineHeight: 1.6,
  '@media (min-width:600px)': {
    fontSize: '1rem',
    lineHeight: 1.5
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
    lineHeight: 1.6
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.3rem',
    lineHeight: 1.6
  },
};

theme.typography.subtitle1 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.1rem',
  },
};

theme.typography.caption = {
  fontSize: '0.75rem',
  '@media (min-width:600px)': {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2rem',
  },
};

class App extends Component {

  render(){
    return (
      <div style={{backgroundColor: "#EEEEEE"}}>
      <ThemeProvider  theme={theme}>
        
          
            <Switch>
              <Router history={history}> 
                <Route path="/" exact component={MainScreen} />
                <Route path="/news" exact component={NewsScreen} />
                <Route path="/hottline" component={HottlineScreen}/>
                <Route path="/contacts" exact component={ContactsScreen}/>
                <Route path="/structure" exact component={StructureScreen} />
                <Route path="/normative_base" component={NormativeBaseScreen}/>
                <Route path="/admin" exact component={AdminPanelScreen} />
                <Route path="/login" exact component={LoginScreen} />
                
              
              </Router>
            </Switch>
          
        
      </ThemeProvider>
      </div>
    );
  }
  
}

export default App;
