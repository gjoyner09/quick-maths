export const sendApiRequest = async (numberOne: string, numberTwo: string) => {
  const data = buildRequestBody(numberOne, numberTwo);
  const url = 'http://localhost:3333/api/maths/add';
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const buildRequestBody = (numberOne: string, numberTwo: string) => {
  return { numberOne: Number(numberOne), numberTwo: Number(numberTwo) };
};

export default sendApiRequest;
