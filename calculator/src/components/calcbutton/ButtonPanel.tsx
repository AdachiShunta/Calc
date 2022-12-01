// const handleClick = (e: any) => {
//   console.log(e.target.value);
// };
const ButtonPanel = (props: { btn: string, buttonHandler:React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <>
      <button value={props.btn} onClick={props.buttonHandler}>
        {props.btn}
      </button>
    </>
  );
};

export default ButtonPanel;
