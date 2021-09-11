import{
    REQUEST_STREAMS_PENDING,
    REQUEST_STREAMS_SUCCESS,
    REQUEST_STREAMS_FAILED,
    REQUEST_STREAM_PENDING,
    REQUEST_STREAM_SUCCESS,
    REQUEST_STREAM_FAILED
    

} from './constants'
import axios from 'axios';


    
 export const user =(user)=>{
    
    return{

      type:"LOGGED_USER",
      payload:user

    }

 }

    export const requestStreams =()=>(dispatch)=>{


dispatch({type:REQUEST_STREAMS_PENDING});
axios.get(`http://localhost:3001/streams`)
.then(response=>response.data)
.then(data=>dispatch({type:REQUEST_STREAMS_SUCCESS,payload:data}))
.catch(error=>dispatch({type:REQUEST_STREAMS_FAILED,payload:error}))

    }

    export const requestStreamId=(id)=>(dispatch)=>{
 console.log("ss",id)

      
        dispatch(  {type:REQUEST_STREAM_PENDING,id});
        axios.get(`http://localhost:3001${id}`)
        .then(response=>response.data)
        .then(data=>dispatch({type:REQUEST_STREAM_SUCCESS,payload:data}))
        .catch(error=>dispatch({type:REQUEST_STREAM_FAILED,payload:error}))

            
        }