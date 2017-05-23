import React from 'react';
import { connect } from 'react-redux';
import './guess-count.css';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

const mapToStateProps = state => ({

});
export default connect(mapToStateProps)(GuessCount);