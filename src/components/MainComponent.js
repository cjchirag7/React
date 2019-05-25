import React,{Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent.js';
import Contact from './ContactComponent.js'
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import {DISHES} from '../shared/dishes.js';
import {COMMENTS} from '../shared/comments.js';
import {LEADERS} from '../shared/leaders.js';
import {PROMOTIONS} from '../shared/promotions.js';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    
    const HomePage=()=>{
        return (
            <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                  promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                  leader={this.state.leaders.filter((leader)=>leader.featured)[0]}/>
        )
    }
    return (
      <div className="App">
      <Header></Header>
      <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/> }/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
      </Switch>
      <Footer></Footer>
      </div>
    );
  }
}
export default Main;