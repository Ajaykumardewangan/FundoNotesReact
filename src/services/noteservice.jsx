import axios from 'axios'

const baseURL=process.env.REACT_APP_baseURL;
const config={
 headers : {
    'Content-Type': 'application/json'
}}
export  function getNotes(token,fetchedNoteName) {
    // console.log('user123' ,localStorage.getItem('token'));
    console.log('fetched note title name : ',fetchedNoteName);
    return axios.get(baseURL+'/notes/'+fetchedNoteName,{headers: {'token' :  token}}
    )
}

export  function createNotes(token,data) {
    // console.log('user123' ,localStorage.getItem('token'));
    return axios.post(baseURL+'/notes/create_note',data,{headers: {'token' :  token}}
    )
}
export  function deleteNote(noteId) {
    return axios.delete(baseURL+'/notes/delete_note?noteId='+noteId,{headers: {'token' :localStorage.getItem('token')  }}
    )
}

export  function trashNotes(token,noteId) {
    return axios.put(baseURL+'/notes/trash?noteId='+noteId,null,{headers: {'token' :  token}}
    )
}

export  function archiveNote(token,noteId) {
    return axios.put(baseURL+'/notes/archive?noteId='+noteId,null,{headers: {'token' :  token}}
    )
}

export  function getNotesOnLabel(labelId) {
    return axios.get(baseURL+'/notes/getNotesOnLabel?labelId='+labelId,{headers: {'token' : localStorage.getItem('token')}}
    )
}

export  function changeColor(color,token,noteId) {
    return axios.put(baseURL+'/notes/change-color/'+color+'?noteId='+noteId,null,{headers: {'token' :  token}}
    )
}

    export  function addReminder(noteId,date) {
        console.log('remainder user' ,localStorage.getItem('token'));
        console.log(' reminder noteid :  ',noteId);
        console.log('remainder date: ',date);
        var date = new Date(date.reminder);
        let datetime=date.toISOString();
        console.log('date time :',datetime);
return axios.put(baseURL+'/notes/reminder?noteId='+noteId+'&reminderDate='+datetime,null,{headers: {'token' :  localStorage.getItem('token')}}
        )
}
export function removeCollabNotes(noteId,email){
    return axios.delete(baseURL+'/notes/removecollaborator?noteId='+noteId+'&email='+email,{headers: {'token' :  localStorage.getItem('token')}})
}
export function addCollaboratorNotes(noteId,email){
    console.log('inside service  add cola :',noteId);
    console.log('email : ' ,email);
    return axios.post(baseURL+'/notes/addcollaborator?email='+email+'&noteId='+noteId,null,{headers: {'token' :  localStorage.getItem('token')}});
}
export function getUserEmails(){
    return;
}
export function getAllNotes(){

}
export function searchUserList(){
    
}

export function getCollaboratedUser(noteId) {
    return axios.get(baseURL+'/notes/getCollaboratedUser?noteId='+noteId,{headers: {'token' :  localStorage.getItem('token')}});
}
export function updateNotes(noteId,data) {
    console.log('under update noteId ',noteId);
    console.log('under update noteData ',data);
    return axios.put(baseURL+'/notes/updatenotereact?id='+noteId,data,{headers: {'token' :  localStorage.getItem('token')}});
    }


