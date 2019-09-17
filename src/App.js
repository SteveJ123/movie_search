import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import NotFound from './elements/NotFound/NotFound';
import Movie from './elements/Movie/Movie';
// import SearchBar from './elements/SearchBar/SearchBar';




function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
    <Header/>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/:movieId" component={Movie} exact/>
      <Route  component={NotFound} exact/>    
    </Switch>
    
      </React.Fragment>   
    
     </BrowserRouter>
  );
}

export default App;
