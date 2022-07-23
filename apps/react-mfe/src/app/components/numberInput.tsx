type ComponentProps = {
  label: string;
  validateNumber: boolean;
  numberValue: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
};

export const NumberInput = ({
  label,
  validateNumber,
  numberValue,
  setNumber,
}: ComponentProps) => {
  return (
    <div className="flex flex-col content-start gap-8px">
      <label htmlFor="numberOne" className="text-16px text-iag-label">
        {label}
      </label>
      <input
        className={`flex flex-col justify-center w-257px p-iag-12 border-1 rounded-iag ${
          validateNumber
            ? 'text-iag-label border-iag-bord-3'
            : 'text-iag-error-input border-iag-error-border'
        } `}
        type="text"
        id="numberOne"
        name="numberOne"
        value={numberValue}
        onChange={(e) => setNumber(e.target.value)}
      />
      {!validateNumber && (
        <div className="text-iag-error-text text-14px w-257px font-normal">
          Enter a number with digits up to 9 characters long
        </div>
      )}
    </div>
  );
};

export default NumberInput;
