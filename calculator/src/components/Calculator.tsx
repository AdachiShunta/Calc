import { useState } from "react";
import Display from "./Display";
import Button from "./calcbutton/Button";
import { calclate, State } from "../logic/calclate";

const Calclator = () => {
  // const [pushButton, setPushButton] = useState("");
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isClear: false,
  });
  //eの型？？
  const buttonHandler = (e: { target: { value: string }; }) => {
  // const buttonHandler = (e: any) => {
    console.log("calclator=" + e.target.value);
    //calclateを呼び出し、stateにセット
    setState(calclate(e.target.value, state));
  };
  return (
    <>
      <Display current={state.current} />
      <Button buttonHandler={buttonHandler} />
    </>
  );
};

export default Calclator;
