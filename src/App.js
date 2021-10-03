import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './components/Meals/Meals';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
