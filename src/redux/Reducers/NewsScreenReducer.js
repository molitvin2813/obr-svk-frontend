import {
  GET_CATEGORYS,
  GET_CATEGORYS_SUCCESS,
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FROM_SOME_CATEGORY,
  GET_NEWS_FROM_SOME_CATEGORY_SUCCESS,
  GET_LAST_NEWS,
  GET_LAST_NEWS_SUCCESS
} from '../Actions/type';
  
  
  const initialState = {
    newsList: [],
    isLoadNews: false,

    categorysList: [],
    isLoadCategorys:false,

    lastNewsList:[],
    isLoadLastNews:false,
  };
  
  const NewsScreenReducer = (state = initialState, action) => {
    switch(action.type){

      case GET_LAST_NEWS:{
        return {
          ...state,
          isLoadLastNews:false
        }
      }
      case GET_LAST_NEWS_SUCCESS:{
        return {
          ...state,
          isLoadLastNews:true,
          lastNewsList: action.lastNewsList
        }
      }
      case GET_NEWS:{
        return{
          ...state,
          isLoadNews:false
        }
      }
      case GET_NEWS_SUCCESS:{
        return{
          ...state,
          newsList: action.newsList,
          isLoadNews:true
        }
      }
      case GET_CATEGORYS:{
        return{
          ...state,
          isLoadCategorys:false
        }
      }
      case GET_CATEGORYS_SUCCESS:{
        return{
          ...state,
          categorysList: action.categorysList,
          isLoadCategorys:true
        }
      }
      case GET_NEWS_FROM_SOME_CATEGORY:{
        return{
          ...state,
          isLoadNews:false
        }
      }
      case GET_NEWS_FROM_SOME_CATEGORY_SUCCESS:{
        return {
          ...state,
          isLoadNews:true,
          newsList: action.newsList
        }
      }
      default:{
        return state
      }
    }
  }
  export default NewsScreenReducer;