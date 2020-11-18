import {

  LOGIN_ADMIN_SUCCESS, 
  LOGIN_ADMIN_WRONG_DATA
} from './type';


export const _loginAmdinWrongData = () => ({
  type:LOGIN_ADMIN_WRONG_DATA
});

export const _loginAmdinSuccess = (token) => ({
  type:LOGIN_ADMIN_SUCCESS,
  token:token
});


export const loginAdmin = (login, password) => {
 

  return async (dispatch) =>{
   

    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: login, password: password })
    };
   
    await fetch('http://localhost:3001/api/users/login',requestOptions)
    .then(response => response.json())
    .then(data =>{
      alert( JSON.stringify( data));

      if(data.statusCode == 401)
        dispatch(_loginAmdinWrongData());
      else
        dispatch(_loginAmdinSuccess(data.token));
    })
  }
}