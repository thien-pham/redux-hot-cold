export const NEW_GAME = 'NEW_GAME';
export const newGame = (guesses, feedback, correctAnswer) => ({
    type: NEW_GAME,
    guesses,
    feedback,
    correctAnswer
});

export const GUESS = 'GUESS';
export const guess = guess => ({
    type: GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = showInfoModal => ({
    type: TOGGLE_INFO_MODAL,
    showInfoModal
});

