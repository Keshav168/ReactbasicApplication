import { useContext } from "react";
import { counterContextObj } from "./CounterContext";

function Node() {
  const { counter, setCounter } = useContext(counterContextObj);

  return (
    <div className="text-center">
      <h1>Node</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis
        consequatur quo quidem eum architecto consequuntur magnam assumenda
        beatae tempora, placeat nemo dolor corrupti quaerat soluta minus
        perferendis perspiciatis labore ab facilis. Nisi animi in numquam
        voluptatibus, assumenda eius? Fugiat vitae placeat quisquam sapiente
        quod tempore corporis sed eligendi quaerat!
      </p>
    </div>
  );
}

export default Node;
