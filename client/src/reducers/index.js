import { combineReducers } from "redux";
const userReducer =() =>{

    return [
       {title:'yesteday',duration:'3:03'},
       {title:'Hey July',duration:'2:03'},
       {title:'Greeay',duration:'3:43'}

    ]
};

const selectedUserReducer = (selectedSong= null,action) =>{

if(action.type ==='SONG_SELECTED') 
return action.payload;
return selectedSong;

}


export default combineReducers({
    users:userReducer,
    selectedUser:selectedUserReducer
})