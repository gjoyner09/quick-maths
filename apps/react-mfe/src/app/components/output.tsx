import React, { useEffect } from 'react';

type ComponentProps = {
  sum: number | undefined;
  displayNumberOne: string;
  displayNumberTwo: string;
};

const Output = ({
  sum,
  displayNumberOne,
  displayNumberTwo,
}: ComponentProps) => {
  return (
    <div
      className={`${
        sum ? 'bg-iag-blue' : 'bg-iag-blue/50'
      } flex flex-col justify-center w-full h-160px text-center text-28px text-white border-t-3 border-t-iag-bord`}
    >
      <div>
        <span className="font-light">
          {sum && `${displayNumberOne} + ${displayNumberTwo} = `}
        </span>
        <span className="font-semibold">{sum && `${sum}`}</span>
      </div>
    </div>
  );
};

export default Output;
