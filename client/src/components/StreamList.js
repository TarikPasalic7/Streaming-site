import React,{useEffect} from "react";
import {connect} from 'react-redux';
import photo from '../camera.png';
import { useHistory,Link } from "react-router-dom";

import { requestStreams } from '../actions';

const StreamList =({userID,streams,onRequestStreams})=>{
    useEffect(() => {
        async function fetchMyAPI() {
          onRequestStreams() //calling function with dispatch
        }
      
        fetchMyAPI(); 
      
        }, [])
        const history = useHistory();

       
       
    return (<div className="container">
            <h1>Streams</h1>
           {console.log("sss",streams)}
            
         {streams.map(element=>{
               return( <div key ={element.id}  className="listcontainer">
               <div className="item">
                   <img className="pic" src={photo}/>
                   <div className="streamitems">
                   
                   <Link to={location => `/streams/${element.id}`} className="streamh">
                  
                     {element.title} </Link>      <div className="descriptiontag">{element.description}</div></div>  {userID===element.userID?<div><Link className="editbutton" to={location => `/streams/edit/${element.id}`}>EDIT</Link><Link to={location => `/streams/delete/${element.id}`} className="deletebutton">DELETE</Link></div> :null}    </div> 
              </div>)
         })
       } 
       
       {  userID===""?"":<Link className="createbutton" to={location => `/streams/new`}>Create Stream</Link>} 
    <br></br>
    </div>)


}
const mapStateToProps = state => {
  
    return {userID:state.user.userID,
        userName:state.user.userName,
      streams:state.requestStreams.streams,
      isPending:state.requestStreams.isPending,
      error:state.requestStreams 
    }; 
  }
  
  const mapDispatchToProps = (dispatch) => {
    
    return {
     
      onRequestStreams:()=>dispatch(requestStreams())
  
    }; 
  }

export default connect(mapStateToProps,mapDispatchToProps)(StreamList);