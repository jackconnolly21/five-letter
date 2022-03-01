import React, { Fragment } from 'react'
import Guess from '../components/guess'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <p>Hello and welcome! :) This app is called Five Letter Word Game</p>
      <Guess />
    </Fragment>
  )
}
