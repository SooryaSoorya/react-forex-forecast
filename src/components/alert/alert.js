import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

import './alert.scss';

function Alert(props) {
  const [show, setShow] = useState(props.showAlert);
  const [message, setMessage] = useState(props.showAlertMessage);

  useEffect(() => {
    props.showAlert && setShow(props.showAlert);
    props.showAlertMessage && setMessage(props.showAlertMessage);
  }, [props.showAlert, props.showAlertMessage])

  const onAlertClose = () => {
    setShow(false);
  }

  return (
    <div className="alertcontainer">
      <Toast className="toastcontainer"
        onClose={onAlertClose}
        show={show}
        delay={10000}
        autohide>
        <Toast.Header>
          <strong className="mr-auto">Message</strong>
        </Toast.Header>
        <Toast.Body>{message && message['error'] ?
          message['error'] :
          message}</Toast.Body>
      </Toast>
    </div>
  );
}
export default Alert;
