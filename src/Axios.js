import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});
// export const instance2 = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/account/20399833/' 
// });