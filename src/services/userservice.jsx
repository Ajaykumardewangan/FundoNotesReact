import axios from 'axios';

const baseUrl = process.env.REACT_APP_baseURL;
console.log("BASEURL ",baseUrl)

export function login(data) {
    console.log(data)
    return axios.post(baseUrl + '/login', data,
        {
            headers: { 'Content-Type': 'application/json'
            }
        })
}

export function registration(data) {
    console.log(data)
    return axios.post(baseUrl + '/registration', data,
        {
            headers: { 'Content-Type': 'application/json'
            }
        })
}

export function forgetPassword(data) {
    console.log(data)
    return axios.post(baseUrl + '/forget_password', data,
        {
            headers: { 'Content-Type': 'application/json'
            }
        })
}

export function resetPassword(data,token) {
    console.log(data)
    console.log(token);
    return axios.post(baseUrl + '/reset_password', data,
        {
            headers: { 'token': token.token
               // Authorization: localStorage.getItem('token')
            }
        })
}