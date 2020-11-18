import {
  GET_NEWS_MAIN,
  GET_NEWS_MAIN_SUCCESS
} from './type'

export const _getNewsSuccess = (newsList) =>({type: GET_NEWS_MAIN_SUCCESS, newsList: newsList});
export const _getingNews = () => ({type:GET_NEWS_MAIN});

/**
 * Делаем запрос на сервер и 
 * получаем список последних новостей
 * для последующего вывода на главную
 * страницу
 * 
 * @method    getNews
 */
export const getNews = () => {

  return async (dispatch) =>{
    dispatch(_getingNews());
   
    await fetch('http://localhost:3001/api/articles/last', {
      method:"GET"
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