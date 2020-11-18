import {
  LOGIN_ADMIN,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_WRONG_DATA
} from '../Actions/type';


const initialState = {
  token: '',
  error:false
};

const LoginScreenReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_ADMIN_WRONG_DATA:{
      return {
        ...state,
        error:true,
        token:'sosi bibu'
      }
    }
   
    case LOGIN_ADMIN_SUCCESS:{
      return{
        ...state,
        token: action.token,
        error: false
      }
    }
    default:{
      return state
    }
  }
}
export default LoginScreenReducer;
