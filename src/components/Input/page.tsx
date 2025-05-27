export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value }) => {
  const className =
    "bg-primary/25 text-white px-4 py-2 rounded-xl  focus:outline-none focus:ring-1 focus:ring-primary";
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
      />
    </>
  );
};

export default Input;
