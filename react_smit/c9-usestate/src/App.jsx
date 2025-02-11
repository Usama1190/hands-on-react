import { useState } from "react";
import { projects } from "./utils/constant/Projects";
const App = () => {
  const [projectsData, setProjectsData] = useState(projects);
  // console.log(projectsData);

  const uniqueCat = [...new Set(projectsData.map((item) => item.category))];
  // console.log(uniqueCat);
  
  const filterCat = (cat) => {
    let filterProjects = projectsData.filter((item) => item.category === cat );
    // console.log(filterProjects);

    setProjectsData(filterProjects);
    
  }
  

  return (
    <div>
      {
        uniqueCat.map((item) => {
          return (
            <button onClick={() => filterCat(item)} key={item}>{item}</button>
          )
        })
      }

      <div>
        {
          projectsData.map((item) => {
            return (
              <p key={item.id}>{item.title}</p>
            )
          })
        }
      </div>
    </div>
  )
}


export default App









/*

import { useState } from "react";
import { projects } from "./utils/constant/Projects";
const App = () => {
  // console.log(projects);

  const [isModal, setIsModal] = useState(false);

  const updateFunction = () => {
    setIsModal(true);
  }
  
  return (
    <div>
      <button onClick={updateFunction}>open modal</button>
      {isModal ?  <div className="modal">
        <button onClick={() => setIsModal(false)}>close</button>
        <h1>Modal</h1>
        <p>Modal Content</p>
      </div> : null}
    </div>
  )
}


export default App;

*/












/*

import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0)
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="counter">
      // event handling
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button disabled={counter > 0 ? false : true} onClick={decrement}>-</button>
    </div>
  )
}


export default App;

*/
























/*

import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(0);

  // console.log(value);

  console.log(value, setValue);
  
  // setValue(1);                 // error to many re-render

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

  console.log(useState(0));     // initially value
  
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
  console.log('hello world!');
  
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

