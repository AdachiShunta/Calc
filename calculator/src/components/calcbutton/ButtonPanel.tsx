const ButtonPanel = (props: { btn: string; buttonHandler: any }) => {
  return (
    <>
      <button value={props.btn} onClick={props.buttonHandler}>
        {props.btn}
      </button>
    </>
  );
};

export default ButtonPanel;
