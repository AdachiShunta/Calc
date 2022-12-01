import { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import "./Button.css";

type btn = {
  buttonHandler: any;
};
const Button: React.FC<btn> = ({ buttonHandler }) => {
  // const [inputNum, setInputNum] = useState(0);
  return (
    <>
      <div className={"high"}>
        <ButtonPanel btn={7} buttonHandler={buttonHandler} />
        <ButtonPanel btn={8} buttonHandler={buttonHandler} />
        <ButtonPanel btn={9} buttonHandler={buttonHandler} />
        <ButtonPanel btn={"AC"} buttonHandler={buttonHandler} />
      </div>
      <div className="mid">
        <ButtonPanel btn={4} buttonHandler={buttonHandler} />
        <ButtonPanel btn={5} buttonHandler={buttonHandler} />
        <ButtonPanel btn={6} buttonHandler={buttonHandler} />
        <ButtonPanel btn={"-"} buttonHandler={buttonHandler} />
      </div>
      <div className="low">
        <ButtonPanel btn={7} buttonHandler={buttonHandler} />
        <ButtonPanel btn={8} buttonHandler={buttonHandler} />
        <ButtonPanel btn={9} buttonHandler={buttonHandler} />
        <ButtonPanel btn={"+"} buttonHandler={buttonHandler} />
      </div>
      <div className="zeroLine">
        <ButtonPanel btn={0} buttonHandler={buttonHandler} />
        <ButtonPanel btn={"."} buttonHandler={buttonHandler} />
        <ButtonPanel btn={"D"} buttonHandler={buttonHandler} />
        <ButtonPanel btn={"="} buttonHandler={buttonHandler} />
      </div>
    </>
  );
};
export default Button;
