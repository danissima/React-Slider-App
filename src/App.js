import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HomePage from './HomePage.js';
import SliderPage from './SliderPage.js';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/slider-page">Слайдер</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/slider-page">
            <SliderPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

