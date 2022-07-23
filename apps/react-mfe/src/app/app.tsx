// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Inputs from './components/inputs';
import Output from './components/output';
import React, { useEffect, useState } from 'react';
import { sendApiRequest } from './utils/requests';

export function App() {
  const [numberOne, setNumberOne] = useState('');
  const [displayNumberOne, setDisplayNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [displayNumberTwo, setDisplayNumberTwo] = useState('');
  const [sum, setSum] = useState();
  const onFormSubmit = (numberOne: string, numberTwo: string) => {
    sendApiRequest(numberOne, numberTwo).then((data) => setSum(data.result));
  };

  useEffect(() => {
    setDisplayNumberOne(numberOne);
    setDisplayNumberTwo(numberTwo);
  }, [sum]);

  return (
    <div className="flex flex-col items-center border-3 border-iag-bord rounded-iag w-full lg:w-900px">
      <Inputs
        onFormSubmit={onFormSubmit}
        numberOne={numberOne}
        setNumberOne={setNumberOne}
        numberTwo={numberTwo}
        setNumberTwo={setNumberTwo}
      />
      <Output
        sum={sum}
        displayNumberOne={displayNumberOne}
        displayNumberTwo={displayNumberTwo}
      />
    </div>
  );
}

export default App;
