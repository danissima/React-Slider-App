import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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

function Home() {
  return (
      <div>
        <h2>Приветствую на главной странице</h2>
        <Link to="/slider">Перейти на слайдер</Link>
      </div>
         );
}

function Slider() {
  return (
      <div>
        <h2>Слайдер</h2>
        <Link to="/home">Назад</Link>
      </div>
  );
}