import React, { useState, FC } from 'react';

const Inputs: FC<{
  onFormSubmit: (numberOne: string, numberTwo: string) => any;
}> = ({ onFormSubmit }) => {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // e.stopPropagation();
    onFormSubmit(numberOne, numberTwo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numberOne">First number</label>
      <br />
      <input
        className="border-2"
        type="text"
        id="numberOne"
        name="numberOne"
        value={numberOne}
        onChange={(e) => setNumberOne(e.target.value)}
      />
      <br />
      <label htmlFor="numberTwo">Second number</label>
      <br />
      <input
        className="border-2"
        type="text"
        id="numberTwo"
        name="numberTwo"
        value={numberTwo}
        onChange={(e) => setNumberTwo(e.target.value)}
      />
      <br />
      <br />
      <input className="border-2" type="submit" value="Submit"></input>
    </form>
  );
};

export default Inputs;
