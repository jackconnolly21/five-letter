/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions, selectors } from '../../features/guess'

const Guess: React.FC = () => {
	const guessNumber = useSelector(selectors.getNumberGuesses)
	const mysteryWord = useSelector(selectors.getMysteryWord)
	const dispatch = useDispatch()

	const [guess, setGuess] = useState('')
	const [result, setResult] = useState<number | null>(null)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGuess(e.target.value)
	}

	const handleGuess = (word: string) => {
		const lettersInGuess = new Set(word.split(''))
		const lettersInMystery = new Set(mysteryWord.split(''))
		const countInCommon = new Set(Array.from(lettersInGuess)
			.filter(c => lettersInMystery.has(c)))
			.size
		setResult(countInCommon)
		return countInCommon
	}

	return (
		<Fragment>
			<div className="row">
				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
							<span className="card-title">Guess Word</span>
							<h4>
								Guess #{guessNumber}: <strong>RAISE</strong>
							</h4>
							<input
								type="text"
								value={guess}
								name="guess"
								onChange={handleChange}
							/>
							{result != null && <p>Last Guess: <strong>{result}</strong> letters in common.</p>}
						</div>
						<div className="card-action">
							<div className="group">
								<button
									className="waves-effect waves-teal btn-flat blue"
									type="button"
									data-qa="guess-word-counter"
									onClick={() => {
										dispatch({ type: actions.GUESS_WORD })
										handleGuess(guess)
										setGuess("")
									}}>
									Guess
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Guess
