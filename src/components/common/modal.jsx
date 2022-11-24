import React from 'react'
import PropTypes from 'prop-types'
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

const BasicModal = ({ children, title, visible, setVisible, footer, ...props }) => {
  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)} {...props}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody className="p-0">{children}</CModalBody>
        {footer && <CModalFooter>{footer}</CModalFooter>}
      </CModal>
    </>
  )
}

// BasicModal.propTypes = {
//   children: PropTypes.node,
//   title: PropTypes.string,
//   visible: PropTypes.bool,
//   setVisible: PropTypes.func,
//   footer: PropTypes.any,
// }

export default BasicModal
