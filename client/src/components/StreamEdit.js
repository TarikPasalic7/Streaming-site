import axios from "axios";
import Form  from "./Form";
import { useLocation } from "react-router-dom";

const StreamEdit=()=>{
    const location = useLocation();
    const submit =(val)=>{
        axios.put(`http://localhost:3001${location.pathname}`, val)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(val);
      }
    return (<div>
        <h1>Streams edi </h1>
      
         <Form  onSubmit={submit}/>
    </div>)


}

export default StreamEdit;