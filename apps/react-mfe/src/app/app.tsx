// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Inputs from './components/inputs';
import Output from './components/output';
import React, { useState } from 'react';
import { sendApiRequest } from './utils/requests';

export function App() {
  const [sum, setSum] = useState();
  const onFormSubmit = (numberOne: string, numberTwo: string) => {
    sendApiRequest(numberOne, numberTwo).then((data) => setSum(data.result));
  };

  return (
    <>
      <Inputs onFormSubmit={onFormSubmit} />
      <Output sum={sum} />
    </>
  );
}

export default App;
