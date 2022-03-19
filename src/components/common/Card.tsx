import React, { Fragment, ReactElement } from 'react'

const Card: React.FC<Props> = ({ title, body, action }) => {
  return (
    <Fragment>
      <div className="centeredContainer">
        <div className="col s12 m6">
          <div className="card blue-grey">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              {body}

              <div className="centeredContainer">
                <div>{action ?? null}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

interface Props {
  title: string
  body: ReactElement
  action?: ReactElement | null
}

export default Card
