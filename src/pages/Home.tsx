import React, { Fragment } from 'react'
import { GuessInput, GuessesTable } from '../components/guess'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Five Letter Word</h1>
      <p>Hello and welcome! :) This app is called Five Letter Word Game</p>
      <GuessInput />
      <GuessesTable />
    </Fragment>
  )
}
