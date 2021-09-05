import axios from "axios";
import Form  from "./Form";
import React,{useEffect,useState} from "react";
import { useLocation,useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
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
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        
          fetchMyAPI(); 

       
    }, [])
 
    return (<div>

        <h1>   {stream.title} </h1>
        <h3>{stream.description}</h3>
      
       
    </div>)


}

export default StreamShow;