type ButtonProps = {
  title: string;
  clssName?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

function Button({ title, clssName, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white gradient cursor-pointer ${clssName}`}
    >
      {title}
    </button>
  );
}

export default Button;
