import React, { useCallback, memo, useState } from "react";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { store } from "./store";
import { actions as homeActions } from "./store/home";

type GState = import("./store").GState;

type ContentProps = {
  increment: () => void;
  decrement: () => void;
};

const Content = (props: ContentProps) => {
  const { increment, decrement } = props;
  console.log("render Content");
  return (
    <>
      <button onClick={decrement}>decrement {Date.now()}</button>
      <button onClick={increment}>increment {Date.now()}</button>
    </>
  );
};

const ContentContainer = memo(Content);

const homeActionIncrement = bindActionCreators(
  homeActions.increment,
  store.dispatch
);

const homeActionDecrement = bindActionCreators(
  homeActions.decrement,
  store.dispatch
);

function App() {
  /* Этот код толька для отладки демонстраций */
  const [value, setValue] = useState(1);
  const changeValue = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      let value = +evt.target.value;
      if (isNaN(value)) value = 0;
      setValue(value);
    },
    [setValue]
  );
  /* Конец кода для демонстраций */
  const { size } = useSelector((state: GState) => state.home);
  const increment = useCallback(() => homeActionIncrement(value), [value]);
  const decrement = useCallback(() => homeActionDecrement(value), [value]);

  return (
    <>
      <p>
        Size: <span>{size}</span>
      </p>
      <p>
        Value: <input type="text" value={value} onChange={changeValue} />
      </p>
      <ContentContainer increment={increment} decrement={decrement} />
    </>
  );
}

export default App;

alert(
  "Абрати внимание на компонент ContentContainer" +
    "\n" +
    "increment и decrement не требуют dispatch"
);
