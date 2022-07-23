import React, { useState, FC } from 'react';
import { validateNumber } from '../utils/validations';
import { NumberInput } from './numberInput';

type ComponentProps = {
  onFormSubmit: (numberOne: string, numberTwo: string) => any;
  numberOne: string;
  setNumberOne: React.Dispatch<React.SetStateAction<string>>;
  numberTwo: string;
  setNumberTwo: React.Dispatch<React.SetStateAction<string>>;
};

const Inputs = ({
  onFormSubmit,
  numberOne,
  setNumberOne,
  numberTwo,
  setNumberTwo,
}: ComponentProps) => {
  const [validateNumberOne, setValidateNumberOne] = useState(true);
  const [validateNumberTwo, setValidateNumberTwo] = useState(true);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidNumberOne = validateNumber(numberOne);
    const isValidNumberTwo = validateNumber(numberTwo);
    isValidNumberOne && isValidNumberTwo && onFormSubmit(numberOne, numberTwo);
    setValidateNumberOne(isValidNumberOne);
    setValidateNumberTwo(isValidNumberTwo);
  };

  return (
    <div className="flex py-iag-48 px-iag-32 bg-white w-full border-1 border-iag-bord-2 rounded-iag-2">
      <form id="inputs-form" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-32px">
          <div className="flex flex-row flex-wrap content-start gap-32px">
            <NumberInput
              label="First number"
              validateNumber={validateNumberOne}
              numberValue={numberOne}
              setNumber={setNumberOne}
            ></NumberInput>
            <NumberInput
              label="Second number"
              validateNumber={validateNumberTwo}
              numberValue={numberTwo}
              setNumber={setNumberTwo}
            ></NumberInput>
          </div>
          <button
            className="p-12-18 w-fit text-white bg-iag-blue rounded-6px flex flex-col "
            type="submit"
            form="inputs-form"
          >
            <div className="flex gap-8px">
              <img src="../../assets/images/Icon-Plus.svg" alt="Plus Icon" />
              Add them up
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
