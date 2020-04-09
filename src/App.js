import React, { useState } from 'react';
import './App.scss';

import {
  SUPPORTING_CURRENCIES
} from './config';
import Converter from "./components/converter";
import Loader from "./components/loader";
import Alert from "./components/alert";

function App() {
  const [fromCurrency] = useState('USD');
  const [toCurrency] = useState('EUR');
  const [showSpinner, setShowSpinner] = useState(true);
  const [showAlertValue, setShowAlert] = useState(false);
  const [showAlertMessageValue, setAlertMessageValue] = useState();

  const handleSpinnerValue = (showSpinner) => {
    setShowSpinner(showSpinner);
  }
  const handleAlert = (showAlertValue) => {
    setShowAlert(showAlertValue);
  }
  const handleAlertMessage = (showAlertMessageValue) => {
    setAlertMessageValue(showAlertMessageValue);
  }

  return (
    <div>
      {showAlertValue && <Alert showAlert={showAlertValue}
        showAlertMessage={showAlertMessageValue} />}

      {showSpinner && <Loader animation="border" />}

      <Converter
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        listOption={SUPPORTING_CURRENCIES}
        showLoading={handleSpinnerValue}
        showAlert={handleAlert}
        showAlertMessage={handleAlertMessage} />
    </div>
  );
}

export default App;
