export const NEW_GAME = 'NEW_GAME';
export const newGame = (correctAnswer) => ({
    type: NEW_GAME,
    correctAnswer
});

export const NEW_GUESS = 'GUESS';
export const newGuess = guess => ({
    type: NEW_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = showInfoModal => ({
    type: TOGGLE_INFO_MODAL,
    showInfoModal
});

