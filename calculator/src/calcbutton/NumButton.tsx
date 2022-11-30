type BtnNum = {
  btnNum: number;
};
const NumButton: React.FC<BtnNum> = ({ btnNum }) => {
  return <button>{btnNum}</button>;
};

export default NumButton;
