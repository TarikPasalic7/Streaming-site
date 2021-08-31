import { combineReducers } from "redux";

import { reducer as formReducer } from 'redux-form'
import{
    REQUEST_STREAMS_PENDING,
    REQUEST_STREAMS_SUCCESS,
    REQUEST_STREAMS_FAILED
} from '../actions/constants'
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
    users:userReducer,
    selectedUser:selectedUserReducer,
    requestStreams:requestStreams,
    form:formReducer
})