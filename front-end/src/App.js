import React, {Component} from 'react';
import './App.css';
import ListHeroes from './component/listHeroes/listHeroes'
import {BrowserRouter, Route} from 'react-router-dom';
import CreateHeroModal from './component/createHeroModal/createHeroModal'
import JavaScriptTest from './component/aboutHero/aboutHero'  

class App extends Component {

  render(){
    return (
      <BrowserRouter> 
        <div className="conteiner">
          <div className="main">
            <Route exact path="/" component={CreateHeroModal} />
            <Route exact path="/" component={ListHeroes} />
            <Route path='/Ares/:id' component={JavaScriptTest}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
