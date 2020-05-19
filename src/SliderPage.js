import React, {Component} from "react";
import {Link} from "react-router-dom";
import Carousel from 'react-elastic-carousel';


export default class SliderPage extends Component {
    state = {
        items: [
          {id: 1, src: 'images/img1.jpg'},
          {id: 2, src: 'images/img2.jpg'},
          {id: 3, src: 'images/img3.jpg'},
          {id: 4, src: 'images/img4.jpg'},
          {id: 5, src: 'images/img5.jpg'}
        ]
    }
    render() {
      const { items } = this.state;
      return (
          <div>
            <h2>Слайдер</h2>
            <Link to="/">Назад</Link>
            <Carousel className='slider'>
                 {items.map(item => <div key={item.id}><img className='img' src={item.src} /></div>)}
            </Carousel>
          </div>
        );
    }
}