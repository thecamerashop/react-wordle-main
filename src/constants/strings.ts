export const GAME_TITLE = process.env.REACT_APP_GAME_NAME! 

export const WIN_MESSAGES = ['Aster', 'Aster', 'Aster...']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'BAD TOUCH'
export const WORD_NOT_FOUND_MESSAGE = 'BAD TOUCH'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Just Aster.'
export const GUESS_DISTRIBUTION_TEXT = 'Just Aster.'
export const NEW_WORD_TEXT = 'Just Aster.'
export const SHARE_TEXT = 'Just Aster.'
export const TOTAL_TRIES_TEXT = 'Just Aster.'
export const SUCCESS_RATE_TEXT = 'Just Aster.'
export const CURRENT_STREAK_TEXT = 'Just Aster.'
export const BEST_STREAK_TEXT = 'Just Aster.'
