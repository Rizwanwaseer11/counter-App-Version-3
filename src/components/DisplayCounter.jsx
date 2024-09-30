import { useSelector } from "react-redux";

const DisplayCounter = () => {
  //methods to consume values in redux-toolkit
  // const counterobj = useSelector((store) => store.counter);
  // const counter =counterobj.counterVal

  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value: {counterVal}</p>;
};

export default DisplayCounter;
