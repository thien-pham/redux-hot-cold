import {NEW_GAME, NEW_GUESS, TOGGLE_INFO_MODAL} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100)
};

export const 