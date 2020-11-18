import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_CATEGORYS,
  GET_CATEGORYS_SUCCESS,
  GET_NEWS_FROM_SOME_CATEGORY,
  GET_NEWS_FROM_SOME_CATEGORY_SUCCESS,
  GET_LAST_NEWS,
  GET_LAST_NEWS_SUCCESS
} from './type'
  /**
   * !!добавить возможность получения 
   * общего количества статей для 
   * пагинатора!!
   */
  export const _gettingLastNews = () =>({
    type:GET_LAST_NEWS
  });

  export const _getLastNews = (lastNewsList) => ({
    type:GET_LAST_NEWS_SUCCESS,
    lastNewsList:lastNewsList
  });

  export const _gettingNewsFromSomeCategory = () => ({
    type:GET_NEWS_FROM_SOME_CATEGORY
  });

  export const _getNewsFromSomeCategorySuccess = (newsList) => ({
    type:GET_NEWS_FROM_SOME_CATEGORY_SUCCESS,
    newsList:newsList
  });

  export const _getNewsSuccess = (newsList) => ({
    type: GET_NEWS_SUCCESS, 
    newsList: newsList
  });
  export const _gettingNews = () => ({type:GET_NEWS});

  export const _getCategorysSuccess = (categorysList) => ({
    type:GET_CATEGORYS_SUCCESS, 
    categorysList:categorysList
  });

  export const _gettingCategorys = () => ({
    type:GET_CATEGORYS
  });


  /**
   * Получаем список последних новостей
   * 
   */
  export const getLastNews = () => {
    return async (dispatch) =>{
      dispatch(_gettingLastNews());

      await fetch('http://localhost:3001/api/articles/last', {
        method:"GET"
      })
      .then(response => response.json())
      .then(data =>{
        dispatch(_getLastNews(data));
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  /**
   * Делаем запрос на сервер и 
   * получаем список новостей
   * 
   */
  export const getNewsPerPage = (pageNumber) => {

    
    return async (dispatch) =>{
      dispatch(_gettingNews());
     
      await fetch('http://localhost:3001/api/articles/page/'+pageNumber,{
        method:"GET",
      })
      .then(response => response.json())
      .then(data =>{
        dispatch(_getNewsSuccess(data));
      })
      .catch(err=>{
        console.log(err);
      })
     
    }
  }

  
  /**
   * Получаем категории статей
   * 
   */
  export const getCategorys = () =>{

    return async (dispatch) => {
      dispatch(_gettingCategorys);

      await fetch(
        'http://localhost:3001/api/article-categorys',
        {
          method:"GET"
        }
      )
      .then(response => response.json())
      .then(data =>{
        dispatch(_getCategorysSuccess(data));
      })
      .catch(err=>{
        console.log(err);
      });

    }
  }

  /**
   * Получаем список новостей, которые
   * относятся к определенной категории
   * 
   * @param {number} idCategory - id категории 
   */
  export const getNewsFromSomeCategory = (idCategory) => {

    return async (dispatch) => {
      dispatch(_gettingNewsFromSomeCategory());

      await fetch(
        'http://localhost:3001/api/articles/category/'+idCategory,
        {
          method:"GET"
        }
      )
      .then(response => response.json())
      .then(data =>{
        dispatch(_getNewsFromSomeCategorySuccess(data));
      })
      .catch(err=>{
        console.log(err);
      });
    }
  }