import {
  GET_NEWS_MAIN,
  GET_NEWS_MAIN_SUCCESS
} from '../Actions/type';


const initialState = {
  newsList: [],
  isLoad: false,
};

const MainScreenReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_NEWS_MAIN:{
      return{
        ...state,
        isLoad:false
      }
    }
    case GET_NEWS_MAIN_SUCCESS:{
      return{
        ...state,
        newsList: action.newsList,
        isLoad:true
      }
    }
    default:{
      return state
    }
  }
}
export default MainScreenReducer;