import React, {Component} from "react";
import {Link} from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import { createStore } from 'redux';


let xhr = new XMLHttpRequest(), files = [];
const store = createStore(filesReducer, files);
xhr.open('GET', 'http://testimages.osora.ru:86', true);
xhr.send();
xhr.onload = function() {
    files = xhr.responseText;
    files = files.split('').filter(s => s !== '"');
    files.splice(0, 1);
    files.splice(files.length - 1, 1);
    files = files.join('').split(',');
    
    for (let i = 0; i < files.length; i++) {
        store.dispatch({
            type: 'ADD_FILE',
            id: i + 1,
            src: files[i]
        })
    }
}
function filesReducer(state, action) {
    switch (action.type) {
        case 'ADD_FILE':
            return [
                ...state,
                {
                    id: action.id,
                    src: action.src
                }
            ]
        default:
            return state
    }
}

export default class SliderPage extends Component {
    state = {
        items: [
          {id: 1, src: 'images/img1.jpg'},
          {id: 2, src: 'images/img2.jpg'},
          {id: 3, src: 'images/img3.jpg'},
          {id: 4, src: 'images/img4.jpg'},
          {id: 5, src: 'images/img5.jpg'}
        ]
    };

    render() {
      let { items } = this.state;
      return (
          <div>
            <h2>Слайдер</h2>
            <Link to="/">Назад</Link>
            <button>Change</button>
            <Carousel className='slider'>
                 {items.map(item => <div key={item.id} className="slider_item"><img className='img' src={item.src} /></div>)}
            </Carousel>
          </div>
        );
    }
}
