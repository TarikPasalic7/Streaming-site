import axios from "axios";
import Form  from "./Form";
import { useLocation,useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';
const StreamEdit=()=>{
    const userId=useSelector(state=>state.user.userID);
    const location = useLocation();
    const history = useHistory()
    const submit =(val)=>{
        const temp={
            title:val.title,
            description:val.description,
            userID:userId
        }
        axios.put(`http://localhost:3001${location.pathname}`, temp)
          .then(function (response) {
            console.log(response);
            history.push("/");
          })
          .catch(function (error) {
            console.log(error);
          });
       
      }
    return (<div>
        <h1>Streams edi </h1>
      
         <Form  onSubmit={submit}/>
    </div>)


}

export default StreamEdit;