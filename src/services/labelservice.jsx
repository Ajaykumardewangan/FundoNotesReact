import axios from 'axios'

const baseURL=process.env.REACT_APP_baseURL;

export  function getLables(token) {
    console.log('user123' ,localStorage.getItem('token'));
    return axios.get(baseURL+'/label/get_labels',{headers: {'token' :  token}}
    )
}
export function login1(){
    return ;
}
// apun ka
export  function deleteLables(labelId) {
    console.log('Label : ',labelId);
    return axios.delete(baseURL+'/label/delete_label?labelId='+labelId,{headers: {'token' :  localStorage.getItem('token')}}
    )
}
export  function editLables(labelId,data) {
    console.log('Label id : ',labelId);
    console.log('Label data : ',data);
    return axios.put(baseURL+'/label/update_label?labelId='+labelId,data,{headers: {'token' :  localStorage.getItem('token')}}
    )
}
export  function createLables(data) {
    console.log('LAbel : ',data);
    
    return axios.post(baseURL+'/label/create_label',data,{headers: {'token' :  localStorage.getItem('token')}}
    )
}