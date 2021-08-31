import{
    REQUEST_STREAMS_PENDING,
    REQUEST_STREAMS_SUCCESS,
    REQUEST_STREAMS_FAILED
} from './constants'
import axios from 'axios';
export const selectedUser = (user) =>{
    return{
    
        type:'USER_SELECTED',
        payload:user
    }
    
         
    }

    export const requestStreams =()=>(dispatch)=>{


dispatch({type:REQUEST_STREAMS_PENDING});
axios.get('http://localhost:3001/streams')
.then(response=>response.data)
.then(data=>dispatch({type:REQUEST_STREAMS_SUCCESS,payload:data}))
.catch(error=>dispatch({type:REQUEST_STREAMS_FAILED,payload:error}))

    }