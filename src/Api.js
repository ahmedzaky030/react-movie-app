import axios from 'axios';

export const API_KEY = '8c504f371f79f873f527f460a2521f0e';
export const Lang =  'en-US';
const api = axios.create({
    baseURL:`https://api.themoviedb.org/3/`
})

export const config = {
    sort_by:'popularity.desc', 
    include_adult:false,
    include_video:false,
    with_watch_monetization_types:'flatrate',
    page:1,
}

export function getMovie(){
    let config = {
        params: {
            api_key: API_KEY,
            language: Lang,
        }
    }
    return api.get(`discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, config)
}

export function getGenres(){
    let config = {
        params: {
            api_key: API_KEY,
            language: Lang,
        }
    }
    return api.get(`genre/movie/list`, config)
}

export function getMovieSearch(queryString){
    let config = {
        params: {
            api_key: API_KEY,
            language: Lang,
            query: queryString,
            page:1,
            include_adult:false
        }
    }
    return api.get(`search/movie`, config)
}




export function buildParameters(obj){
    let queryParamsString = '';
    for(let item of Object.entries(obj)){
        console.log(item);  
        queryParamsString += `${item[0]}=${item[1]}&`
    }
    queryParamsString = queryParamsString.substring(0, queryParamsString.length - 1);
    console.log(queryParamsString);
}