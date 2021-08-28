import Header from './components/Header';
import StreamList from './components/StreamList';
import StreamCreate from './components/StreamCreate';
import StreamEdit from './components/StreamEdit';
import StreamDelete from './components/StreamDelete';
import StreamShow from './components/StreamShow';
                    
import {Route,BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
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

export default App;
