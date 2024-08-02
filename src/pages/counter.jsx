import { useState } from "react";
import Button from "../components/Elements/Button";

let Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-6xl font-bold">{count}</h1>
      <div className="flex mt-12">
        <Button classname="bg-green-700" onClick={handleIncrement}>
          Increment
        </Button>
        <Button classname="bg-black mx-5" onClick={handleReset}>
          Reset
        </Button>
        <Button classname="bg-red-700" onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
