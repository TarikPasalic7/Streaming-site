import axios from "axios";
import React,{useEffect,useState} from "react";
import { useLocation,useHistory} from "react-router-dom";
import Modal from "./Modal";


const StreamDelete=()=>{
    const [title,setTitle]=useState("")
    useEffect(() => {
      
        async function fetchMyAPI() {
            const temp= await axios.get(`http://localhost:3001${location.pathname}`);
            setTitle(temp.data.title);
          

          }
          fetchMyAPI();
          
    }, [])
    const history = useHistory();
    const close=()=>{
        
       history.push("/");
    }
    const location = useLocation();
    const remove =(val)=>{
       
        axios.delete(`http://localhost:3001${location.pathname}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          history.push("/");
      }
    return (<div>
        <h1>Streams edi </h1>
     <Modal onClose={close} remove={remove} title={title}>
        
     </Modal>
 
    </div>)


}

export default StreamDelete;