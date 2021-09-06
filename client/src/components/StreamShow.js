import axios from "axios";
import Form  from "./Form";
import React,{useEffect,useState} from "react";
import { useLocation,useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
import flvjs from 'flv.js'
const StreamShow=()=>{
    const userId=useSelector(state=>state.user.userID);
    const [stream,setStream]=useState([]);
    const location = useLocation();
    const history = useHistory()
    useEffect(() => {
        async function fetchMyAPI() {
            axios.get(`http://localhost:3001${location.pathname}`)
            .then(function (response) {
             setStream(response.data);
            //************************* */
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

            })



           
            .catch(function (error) {
              console.log(error);
            });
          }
        
          fetchMyAPI(); 

       
    }, [])
 
    return (<div>

      <video id="videoElement"></video>

        <h1>   {stream.title} </h1>
        <h3>{stream.description}</h3>
      
       
    </div>)


}

export default StreamShow;