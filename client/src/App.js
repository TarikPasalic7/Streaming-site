import Header from './components/Header';
import StreamList from './components/StreamList';
import StreamCreate from './components/StreamCreate';
import StreamEdit from './components/StreamEdit';
import StreamDelete from './components/StreamDelete';
import StreamShow from './components/StreamShow';
import React,{useEffect} from 'react';
import {connect} from 'react-redux';

                    
import {Route,BrowserRouter} from 'react-router-dom';
import { requestStreams, selectedUser } from './actions';
import './App.css';


function App({users,streams,isPending,error,onRequestStreams}) {

 useEffect(() => {
  async function fetchMyAPI() {
    onRequestStreams() //calling function with dispatch
  }

  fetchMyAPI(); 

  }, [])

  return (
   
    <BrowserRouter>
    <div className="App">
     {console.log(streams)}
    
   
     <Header/>
     <Route path="/" component={StreamList} />
     <Route path="/StreamCreate" component={StreamCreate} />
     <Route path="/StreamEdit" component={StreamEdit} />
     <Route path="/StreamDelete" component={StreamDelete} />
     <Route path="/StreamShow" component={StreamShow} />
    
    </div>
      <StreamCreate   />
    </BrowserRouter>
  );
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
export default connect(mapStateToProps,mapDispatchToProps)(App);
