import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
// import GuessForm from './guess-form';

export default function Game (props) {
    
    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
            
            
        </div>
    );   
}
// <GuessSection feedback={props.feedback}
//                 onGuess={(guess) => props.guess(guess)} />
//             {/*<GuessCount count={props.guesses.length} />*/}
//             <GuessList guesses={props.guesses} />

// <GuessList />