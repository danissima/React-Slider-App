import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Home.js';
import Slider from './Slider.js';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/slider">Слайдер</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/slider">
            <Slider />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

