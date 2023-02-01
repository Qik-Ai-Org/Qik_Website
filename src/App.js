import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Academy from './components/Academy.js';
import Navigation from './components/Navigation.js';
import Business from './components/Business.js';
class App extends Component {
	render() {
	  return (      
     <HashRouter>
     <div> <div  style={{display: 'none'}}>  <Navigation /></div>
   <Switch>
             <Route path="/" component={Home} exact/> 
             <Route path="/Academy" component={Academy}/>
             <Route path="/Business" component={Business}/> 
           </Switch> 
  </div>
  </HashRouter>
    );
}
}



export default App;
 
