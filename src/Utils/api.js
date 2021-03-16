import axios from "axios"



export const apiGET = (url = '', params = '') => axios.get(`${url}${params}`).then(
    value => new Promise(resolve => {
        setTimeout(() => {
            resolve(value.data);
        }, 10000);
    })).catch((err) => console.log(err));
