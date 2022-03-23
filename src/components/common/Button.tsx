import React from 'react'

const Button: React.FC<Props> = ({ title, action, color, isDisabled }) => {
  const buttonColor = color ?? 'blue'
  return (
    <>
      <button
        className={`waves-effect waves-teal btn-flat ${buttonColor}`}
        type="button"
        onClick={action}
        disabled={isDisabled}
      >
        {title}
      </button>
    </>
  )
}

interface Props {
  title: string
  action?: () => void | null
  color?: string
  isDisabled?: boolean
}

export default Button
