import React from "react";
import {Link} from "react-router-dom";

export default function HomePage() {
  return (
      <div>
        <h2>Приветствую на главной странице</h2>
        <Link to="/slider-page">Перейти на слайдер</Link>
      </div>
  );
}