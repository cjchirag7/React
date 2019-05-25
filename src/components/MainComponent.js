import React,{Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import {DISHES} from '../shared/dishes.js';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: DISHES
    };
  }

  render() {
    
    const HomePage=()=>{
        return (
            <Home/>
        )
    }
    return (
      <div className="App">
      <Header></Header>
      <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/> }/>
          <Redirect to="/home" />
      </Switch>
      <Footer></Footer>
      </div>
    );
  }
}
export default Main;
