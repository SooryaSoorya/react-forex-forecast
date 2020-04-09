import React from 'react';
import './loader.scss';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div className="loader" >
      <Spinner animation="border" />
    </div>
  )
}

export default Loader;
