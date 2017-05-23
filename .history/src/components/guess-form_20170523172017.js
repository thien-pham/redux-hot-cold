import React from 'react';
import './guess-form.css';
import {connect} from 'react-redux';
import {newGuess} from '../actions';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(newGuess(value));
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={'Enter a number'} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback
})

export default connect(mapStateToProps)(GuessForm);