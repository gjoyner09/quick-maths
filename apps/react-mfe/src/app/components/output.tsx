import React, { FC } from 'react';

type AppProps = {
  sum: number | undefined;
};

const Output = ({ sum }: AppProps) => {
  return <div>{sum}</div>;
};

export default Output;
