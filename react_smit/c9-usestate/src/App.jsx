import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0)
  const decresment = () => {
    setCounter(counter - 1)
  }
  return (
    <div className=".counter">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button disabled={counter <= 0} onClick={decresment}>-</button>
    </div>
  )
}


export default App;

























/*

import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(0);

  // console.log(value);

  console.log(value, setValue);
  
  // setValue(1);

  const updateValue = () => {
    setValue(value + 1)
  }

  return (
    <div>
      <p>{value}</p>
      <button onClick={updateValue}>Click me</button>
    </div>
  )
}


export default App;

*/



/*

import { useState } from "react";

const App = () => {

  console.log(useState(0));
  
  return (
    <div>
      App
    </div>
  )
}


export default App;


*/







/*

import { useState } from "react";


const greeting = () => {
  console.log('Hello world!');
  
}

greeting();

useState();

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
*/

