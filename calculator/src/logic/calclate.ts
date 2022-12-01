//計算関数

export type State = {
  //現在の表示内容
  current: string;
  //計算に使う数値
  operand: number;
  //どの計算をしたい？
  operator: string | null;
  isClear: boolean;
};

export const calclate = (pushButton: string, state: State): State => {
  //数値？
  if (isNumberButton(pushButton)) {
    return handleNumberButton(pushButton, state);
  }

  //"+"or"-"か？
  if (isOperatorButton(pushButton)) {
    return handleOperatorButton(pushButton, state);
  }

  //"."か？
  if (isDotButton(pushButton)) {
    return handleDotButton(state);
  }

  //"D"か？
  if (isDeleteButton(pushButton)) {
    return handleDeleteButton(state);
  }

  //"AC"か？
  if (isAllClearButton(pushButton)) {
    return handleAllClearButton();
  }

  //"="か？
  if (isEqualButton(pushButton)) {
    return handleEqualButton(state);
  }

  return state;
};

const isNumberButton = (pushButton: string) => {
  return parseInt(pushButton) ? true : false;
};

const isOperatorButton = (pushButton: string) => {
  return pushButton === "+" || pushButton === "-";
};

const isDotButton = (pushButton: string) => {
  return pushButton === ".";
};

const isDeleteButton = (pushButton: string) => {
  return pushButton === "D";
};

const isAllClearButton = (pushButton: string) => {
  return pushButton === "AC";
};

const isEqualButton = (pushButton: string) => {
  return pushButton === "=";
};

//ボタンが数字だった場合の処理
const handleNumberButton = (pushButton: string, state: State): State => {
  if (state.isClear) {
    return {
      current: pushButton,
      operand: state.operand,
      operator: state.operator,
      isClear: false,
    };
  }
  //現在の値が0ならば
  if (state.current === "0") {
    return {
      current: pushButton,
      operand: state.operand,
      operator: state.operator,
      isClear: false,
    };
  }
  //0以外の数字ならば
  return {
    //後ろに入力されたボタンの数値を足す(1→12→123)
    current: state.current + pushButton,
    operand: state.operand,
    operator: state.operator,
    isClear: false,
  };
};

//ボタンが+か-の時の処理
const handleOperatorButton = (pushButton: string, state: State): State => {
  console.log("state=" + state.current, state.operand, state.operator, state.isClear);
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: pushButton,
      isClear: true,
    };
  }
  console.log("handleOperator=" + state.operator);
  //値を計算
  const calclateValue = operate(state);
  return {
    current: String(calclateValue),
    operand: calclateValue,
    operator: pushButton,
    isClear: false,
  };
};

const operate = (state: State): number => {
  const currentNumber = parseFloat(state.current);
  //足し算の場合
  if (state.operator === "+") {
    return state.operand + currentNumber;
  } else if (state.operator === "-") {
    return state.operand - currentNumber;
  }
  return 1000000;
};

//ボタンがドットだった場合の処理
const handleDotButton = (state: State): State => {
  //現在ドットが存在している場合
  if (state.current.indexOf(".") !== -1) {
    return state;
  }
  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isClear: false,
  };
};

const handleDeleteButton = (state: State): State => {
  //現在1文字のみの場合
  if (state.current.length === 1) {
    return {
      current: "0",
      operand: state.operand,
      operator: state.operator,
      isClear: false,
    };
  }
  return {
    //最後の一文字を削除
    current: state.current.slice(0, -1),
    operand: state.operand,
    operator: state.operator,
    isClear: false,
  };
};

const handleAllClearButton = (): State => {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isClear: false,
  };
};

const handleEqualButton = (state: State): State => {
  const calclateValue = operate(state);
  return {
    current: String(calclateValue),
    operand: 0,
    operator: null,
    isClear: true,
  };
};
