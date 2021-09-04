import React,{useEffect} from "react";
import {connect} from 'react-redux';
import photo from '../camera.png';
import { useHistory,Link } from "react-router-dom";

import { requestStreams, selectedUser } from '../actions';

const StreamList =({users,streams,isPending,error,onRequestStreams})=>{
    useEffect(() => {
        async function fetchMyAPI() {
          onRequestStreams() //calling function with dispatch
        }
      
        fetchMyAPI(); 
      
        }, [])
        const history = useHistory();

       
       
    return (<div className="container">
            <h1>Streams</h1>
         {streams.map(element=>{
               return( <div key ={element.id}  className="listcontainer">
               <div className="item">
                   <img className="pic" src={photo}/>
                   <div className="streamitems">
                   <h3 className="streamh">
                     {element.title} </h3>      <div className="descriptiontag">{element.description}</div></div>   <Link className="editbutton" to={location => `/streams/edit/${element.id}`}>EDIT</Link><Link to={location => `/streams/delete/${element.id}`} className="deletebutton">DELETE</Link>    </div> 
              </div>)
         })
       } 
        <Link className="createbutton" to={location => `/streams/new`}>Create Stream</Link>
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