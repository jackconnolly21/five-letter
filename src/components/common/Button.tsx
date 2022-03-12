/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Fragment } from 'react'

const Button: React.FC<Props> = ({ title, action, color, isDisabled }) => {
  const buttonColor = color ?? 'blue'
  return (
    <Fragment>
      <button
        className={`waves-effect waves-teal btn-flat ${buttonColor}`}
        type="button"
        onClick={action}
        disabled={isDisabled}
      >
        {title}
      </button>
    </Fragment>
  )
}

interface Props {
  title: string
  action?: () => void | null
  color?: string
  isDisabled?: boolean
}

export default Button
