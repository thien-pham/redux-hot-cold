import './reset.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
import store from './store';
import {newGame, newGuess, toggleInfoModal} from './actions/index';
import './reset.css';
import './index.css';

store.dispatch(newGame());
store.dispatch(newGuess(20));
store.dispatch(toggleInfoModal());
console.log(store.getState());


// import Game from './components/game';

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );
