type btn = {
  btn: string | number;
  buttonHandler: any;
};

// const handleClick = (e: any) => {
//   console.log(e.target.value);
// };
const ButtonPalel: React.FC<btn> = ({ btn, buttonHandler }) => {
  return (
    <>
      <button value={btn} onClick={buttonHandler}>
        {btn}
      </button>
    </>
  );
};

export default ButtonPalel;
