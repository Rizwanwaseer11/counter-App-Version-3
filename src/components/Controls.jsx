import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "./Store/counter";
import { privacyAction } from "./Store/privacy";

const Controls = () => {
  const dispatch = useDispatch(); //This method is used for both react-redux , redux-toolkit for to dispatch actions

  const inputElement = useRef();

  const handleIncrement = () => {
    // console.log("increment called");
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    // console.log("decrement called");
    dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    inputElement.current.value;
    // dispatch({
    //   type: "ADD",
    //   payload: {
    //     num: inputElement.current.value,
    //   },
    // });
    // dispatch(
    //   counterAction.add({
    //     num: inputElement.current.value,
    //   })
    // );
    dispatch(counterAction.add(inputElement.current.value)); //this method is used to send actions withot object.
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    inputElement.current.value;
    // dispatch({
    //   type: "SUBTRACT",
    //   payload: {
    //     num: inputElement.current.value,
    //   },
    // });
    dispatch(
      counterAction.subtract({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    // dispatch({ type: "PRIVACY_TOGGLE" }); // used for react-redux
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="input-number"
          ref={inputElement}
        ></input>

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
