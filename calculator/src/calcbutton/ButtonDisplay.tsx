import { useState } from "react";
import NumButton from "./NumButton";


const ButtonDisplay = () => {
  // const low = [1, 2, 3];
  //配列を引き数に与えるためには？

  const [inputNum, setInputNum] = useState(0);
  return (
    <>
      <div className="low">
        <NumButton btnNum={1} />
        <NumButton btnNum={2} />
        <NumButton btnNum={3} />
      </div>
      <div className="mid">
        <NumButton btnNum={4} />
        <NumButton btnNum={5} />
        <NumButton btnNum={6} />
      </div>
      <div className="high">
        <NumButton btnNum={7} />
        <NumButton btnNum={8} />
        <NumButton btnNum={9} />
      </div>
      <div className="zero">
        <NumButton btnNum={0} />
      </div>
    </>
  );
};
export default ButtonDisplay;
