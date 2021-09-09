import React,{useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {connect,useDispatch,useSelector} from 'react-redux';
import { user } from '../actions';
const clientId = "529021270692-dkbtlhpg4ljq7r873jhrm9v24sth1eki.apps.googleusercontent.com";

const Header =()=>{

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    
    
    const userName=useSelector(state=>state.user.userName);
    const serId=useSelector(state=>state.user.userID);
    const dispatch=useDispatch();
    const onLoginSuccess = (res) => {
     
     
        setShowloginButton(false);
        setShowlogoutButton(true);
        const temp={
            userID:res.profileObj.googleId,
            userName:res.profileObj.name
        }
         dispatch(user(temp));
         
    
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className="header">
            <div className="streamer">{userName}</div>
         
           
            { showloginButton ?
                <GoogleLogin
                className="googlebtn"
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );

}


export default  Header;