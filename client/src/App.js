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


function App() {



  return (
   
    <BrowserRouter>
    <div className="App">
    
    
   
     <Header/>
     <Route exact path="/" component={StreamList} />
     <Route path="/StreamCreate" component={StreamCreate} />
     <Route path="/streams/edit/:id" component={StreamEdit} />
     <Route path="/streams/delete/:id" component={StreamDelete} />
     <Route path="/StreamShow" component={StreamShow} />
    
    </div>
   
    </BrowserRouter>
  );
}

export default App;
