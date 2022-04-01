import React, { ReactElement } from 'react'
import ReactModal from 'react-modal'
import { paddedContainerCss } from '../../styles/gameStyles'
import { Button } from '../common'

const Modal: React.FC<Props> = ({ body, isOpen, setIsOpen }) => {
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyles}
        ariaHideApp={false}
      >
        {body}
        <div className={paddedContainerCss.toString()}>
          <Button title="Close" action={() => setIsOpen(false)} />
        </div>
      </ReactModal>
    </>
  )
}

interface Props {
  body: ReactElement
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default Modal
