import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h1>States test</h1>
      <h3>count: {count}</h3>
      <button onClick={updateCount}>Update count</button>
    </>
  );
};

export default Count;
