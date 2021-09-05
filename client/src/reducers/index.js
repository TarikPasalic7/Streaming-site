import { combineReducers } from "redux";

import { reducer as formReducer } from 'redux-form'
import{
    REQUEST_STREAMS_PENDING,
    REQUEST_STREAMS_SUCCESS,
    REQUEST_STREAMS_FAILED
} from '../actions/constants'

const userState={
    userID:"",
    userName:"Streamer"
}
const userReducer =(state=userState,action) =>{

    if(action.type ==='LOGGED_USER') 
return Object.assign({},state,{userID:action.payload.userID,userName:action.payload.userName})
return state;
};

const selectedUserReducer = (selectedSong= null,action) =>{

if(action.type ==='SONG_SELECTED') 
return  "Object.assign({},state,{streams:action.payload,isPending:false})"
return selectedSong;

}
const initialState ={
isPending:false,
streams:[],
error:''

}

const requestStreams =(state=initialState,action={})=>{
switch(action.type){
    case REQUEST_STREAMS_PENDING:
        return Object.assign({},state,{isPending:true})
        case REQUEST_STREAMS_SUCCESS:
            return Object.assign({},state,{streams:action.payload,isPending:false})
    case REQUEST_STREAMS_FAILED:
        return Object.assign({},state,{error:action.payload,isPending:false})

    default:
        return state;



}


}

export default combineReducers({
    user:userReducer,
    selectedUser:selectedUserReducer,
    requestStreams:requestStreams,
    form:formReducer
})