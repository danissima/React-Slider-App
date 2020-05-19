import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return (
      <div>
        <h2>Приветствую на главной странице</h2>
        <Link to="/slider">Перейти на слайдер</Link>
      </div>
  );
}