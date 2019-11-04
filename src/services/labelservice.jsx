import axios from 'axios'

const baseURL=process.env.REACT_APP_baseURL;
const config={
 headers : {
    'Content-Type': 'application/json'
}}

export  function getLables(token) {
    console.log('user123' ,localStorage.getItem('token'));
    return axios.get(baseURL+'/label/get_labels',{headers: {'token' :  token}}
    )
}
export function login1(){
    return ;
}