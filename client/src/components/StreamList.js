import React,{useEffect} from "react";
import {connect} from 'react-redux';
import photo from '../camera.png';
import { useHistory } from "react-router-dom";

import { requestStreams, selectedUser } from '../actions';

const StreamList =({users,streams,isPending,error,onRequestStreams})=>{
    useEffect(() => {
        async function fetchMyAPI() {
          onRequestStreams() //calling function with dispatch
        }
      
        fetchMyAPI(); 
      
        }, [])
        const history = useHistory();

        function handleClick() {
          history.push("/StreamCreate");
        }
        function handleClickEdit(id) {
            history.push( `/streams/edit/${id}`);
            
          }
    return (<div className="container">
            <h1>Streams</h1>
         {streams.map(element=>{
               return( <div key ={element.id}  className="listcontainer">
               <div className="item">
                   <img className="pic" src={photo}/>
                   <div className="streamitems">
                   <h3 className="streamh">
                     {element.title} </h3>      <div className="descriptiontag">{element.description}</div></div>   <button className="editbutton" onClick={ ()=>handleClickEdit(element.id)}>EDIT</button><button className="deletebutton">DELETE</button>    </div> 
              </div>)
         })
       } 
        <button className="createbutton" onClick={handleClick}>Create Stream</button>
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