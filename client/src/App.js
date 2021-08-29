import Header from './components/Header';
import StreamList from './components/StreamList';
import StreamCreate from './components/StreamCreate';
import StreamEdit from './components/StreamEdit';
import StreamDelete from './components/StreamDelete';
import StreamShow from './components/StreamShow';
import React from 'react';
import {connect} from 'react-redux';
                    
import {Route,BrowserRouter} from 'react-router-dom';
import { selectedUser } from './actions';
import './App.css';

function App({users}) {
  return (
   
    <BrowserRouter>
    <div className="App">
      {console.log(users)}
     <Header/>
     <Route path="/StreamList" component={StreamList} />
     <Route path="/StreamCreate" component={StreamCreate} />
     <Route path="/StreamEdit" component={StreamEdit} />
     <Route path="/StreamDelete" component={StreamDelete} />
     <Route path="/StreamShow" component={StreamShow} />
     <StreamList/>
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  
  return {users:state.users}; 
}
export default connect(mapStateToProps,{selectedUser})(App);
