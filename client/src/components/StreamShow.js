
import React,{useEffect} from "react";
import { useLocation} from "react-router-dom";
import {connect} from 'react-redux';
import { requestStreamId } from '../actions';
import flvjs from 'flv.js'
import {useSelector} from 'react-redux';
const StreamShow=({onRequestStream,data})=>{
   // const list=useSelector(state=>state.requestStreams.streams); Another way to get state
    const location = useLocation();
   
    useEffect(() => {
      


          async function fetchMyAPI() {
           
          onRequestStream(location.pathname) //calling function with dispatch
            if (flvjs.isSupported()) {
                var videoElement = document.getElementById('videoElement');
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: 'http://localhost:8000/live/stream.flv'
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }

          }
        
          fetchMyAPI(); 

       
    }, [])
 
    return (<div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  
      <video width="620" height="440" id="videoElement" controls></video>

        <h1>   {data.title} </h1>
        <h3>{data.description}</h3>
      
       
    </div>)


}

const mapStateToProps = state => {
  
    return {
     data:state.requestStream.stream
    }; 
  }
  
 const mapDispatchToProps = (dispatch) => {
    
    return {
     
      onRequestStream:(id)=>dispatch(requestStreamId(id))
  
    }; 
  }  

export default  connect(mapStateToProps,mapDispatchToProps)(StreamShow);