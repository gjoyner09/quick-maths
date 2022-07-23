export const validateNumber = (numberInput: string) => {
  if (numberInput.trim() === '') {
    return false;
  }
  numberInput = numberInput.replace('-', '').replace('.', '');
  return !Number.isNaN(Number(numberInput)) && numberInput.length <= 9;
};

export default validateNumber;
