import React,{useEffect} from "react";
import {connect} from 'react-redux';

import { requestStreams, selectedUser } from '../actions';

const StreamList =({users,streams,isPending,error,onRequestStreams})=>{
    useEffect(() => {
        async function fetchMyAPI() {
          onRequestStreams() //calling function with dispatch
        }
      
        fetchMyAPI(); 
      
        }, [])
  
    return (<div className="container">
            <h1>Streams</h1>
         {streams.map(element=>{
               return( <div key ={element.id}  className="listcontainer">
               <div className="item">
                   <img className="pic"></img>
                   <h3 className="streamh">
                     {element.title} </h3>      <span>{element.description}</span>   <button className="editbutton">EDIT</button><button className="deletebutton">DELETE</button>    </div> 
              </div>)
         })
       } 
        <button>Create Stream</button>
    </div>)


}
const mapStateToProps = state => {
  
    return {users:state.users,
      streams:state.requestStreams.streams,
      isPending:state.requestStreams.isPending,
      error:state.requestStreams 
    }; 
  }
  
  const mapDispatchToProps = (dispatch) => {
    
    return {
      selectedUser,
      onRequestStreams:()=>dispatch(requestStreams())
  
    }; 
  }

export default connect(mapStateToProps,mapDispatchToProps)(StreamList);