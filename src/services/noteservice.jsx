import axios from 'axios'

const baseURL=process.env.REACT_APP_baseURL;
const config={
 headers : {
    'Content-Type': 'application/json'
}}
export  function getNotes(token) {
    console.log('user123' ,localStorage.getItem('token'));
    return axios.get(baseURL+'/notes/get_notes',{headers: {'token' :  token}}
    )
}

export  function createNotes(token,data) {
    console.log('user123' ,localStorage.getItem('token'));
    return axios.post(baseURL+'/notes/create_note',data,{headers: {'token' :  token}}
    )
}
export  function deleteNote(token,noteId) {
    console.log('user123' ,localStorage.getItem('token'));
    console.log('deleteNOte ',noteId);
    
    return axios.delete(baseURL+'/notes/delete_note?noteId='+noteId,{headers: {'token' :  token}}
    )
}