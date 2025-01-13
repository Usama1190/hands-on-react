// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const myFirstElement = <h1>Hello React</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( myFirstElement
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// Array Methods
// const myArray = ["apple", "banana", "orange"];

// const myList = myArray.map((item) => <p>{item}</p>)

// destructuring Array



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<p>Hello</p>);



// const myElement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>

//     <tr>
//       <td>John</td>
//     </tr>

//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// const root = ReactDOM.createRoot(document.getElementById('sandy'));
// root.render(<p>Hello</p>);

/* For this example to work on your project, you must have a element with 
id="sandy" on your "index.html" page. */



// With JSX
// const myElement = <h1>I Love JSX!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);



// Without JSX
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// Expressions in JSX with curly braces
// const myElement = <h1>React is {5 + 5} times better JSX!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// large block of code in round braces
// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// On top level element like div
// const myElement = (
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// fragment <></>
// const myElement = (
//   <>
//   <p>I am a paragraph.</p>
//   <p>I am a paragraph too.</p>
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// Elements must be closed
// const myElement = <input type="text" />

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// class attribute use className instead of class
// const myElement = <h1 className='myclass'>Hello World!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// if condition statement not allowed in JSX
// const x = 5;
// let text = 'Good bye';

// if (x < 10) {
//   text = 'Hello';
// }

// const myElement = <h1>{text}</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// ternary operator allowed in JSX

// const x = 5;

// const myElement = <h1>{(x) < 10 ? 'Hello' : 'Good bye'}</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);



// Componenets function componenet

// function Car() {
//   return <h1>Hi, I am a Car!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);


// props as an argument properties
// function Car(props) {
//   return <h1>I am a { props.color } car.</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color='red'/>);


// Coponenets in componenets
// function Car() {
//   return <h2>I am a Car!</h2>
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car/>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);


// componenets on other files
// import Car from './Car';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


// class componenets
// class Car extends React.Component {
//   render() {
//     return <h1>Hi, I am a Car!</h1>
//   };
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);



// class components with constructor
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: 'red'};
//   }

//   render() {
//     return <h1>Hi, I am {this.state.color} Car.</h1>
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);



// class componenets with props
// class Car extends React.Component {
//   render() {
//     return <h1>I am a {this.props.color} Car.</h1>
//   };
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color='red'/>);


// Props
// function Car(props) {
//   return <h2>I am a {props.brand}!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car brand='Ford'/>);



// Pass data from one component to another
// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who live in my Garage!</h1>
//       <Car brand='Ford'/>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);



// Add variable
// function Car(props) {
//   return <h2>I am a {props.brand}!</h2>
// }

// function Garage() {
//   const carName = 'Ford';

//   return (
//     <>
//       <h1>Who lives in my Garage.</h1>
//       <Car brand = {carName} />
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);


// Add object
// function Car(props) {
//   return <h2>I am a {props.brand.model}!</h2>
// }

// function Garage() {
//   const carInfo = {name: 'Ford', model: 'Mustang'};

//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car brand={ carInfo }/>
//     </>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);



// Events handler
// function Football() {
//   const shoot = () => {
//     alert ('Great Shot!');
//   }

//   return (
//   <button onClick={shoot}>Take a Shot!</button>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);


// Passing arguments
// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   };

//   return (
//     <button type="button" onClick={() => shoot('Goal')}>Take a shot!</button>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);


// event object
// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
// 		'b' represents the React event that triggered the function.
//     In this case, the 'click' event
// 		*/
//   };

//   return (
//     <button type="button" onClick={(event) => shoot('Goal', event)}>Take a shot!</button>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);



// if statement
// function MissedGoal() {
//   return <h2>MISSED!</h2>
// }

// function MadeGoal() {
//   return <h2>GOAL!</h2>
// }

// function Goal(props) {
//   const isGoal = props.isGoal;

//   if (isGoal) {
//     return <MadeGoal />;
//   }else {
//     return <MissedGoal />;
//   };
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false}/>);



// another way && operator
// function Garage(props) {
//   const cars = props.cars;

//   return (
//     <>
//       <h1>Garage</h1>

//       {cars.length > 0 && 
//         <h2>You have {cars.length} cars in your garage.</h2>
//       }
//     </>
//   );
// };

// const cars = ['Ford', 'BMW', 'Audi'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);


// Ternary operator
// function MissedGoal() {
//   return <h2>MISSED!</h2>
// }

// function MadeGoal() {
//   return <h2>GOAL!</h2>
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return (
//     isGoal ? <MadeGoal /> : <MissedGoal />
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false} />);



// List 
// function Car(props) {
//   return <li>I am a {props.brand}</li>
// };

// function Garage() {
//   const cars = ['Ford', 'BMW', 'Audi'];

//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car brand={car}/>)}
//       </ul>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/


// list key attribute
// function Car(props) {
//   return <li>I am a {props.brand}.</li>
// }

// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
//   ];

//   return (
//     <>
//       <h1>Who lives in my garage!</h1>

//       <ul>
//         {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
//       </ul> 
//     </>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);



// form 
// function MyForm() {
//   return (
//     <form action="">
//       <label htmlFor="">Enter username:
//           <input type="text" /> 
//       </label>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// usestate value onChange attribute
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");
//   return (
//     <form action="">
//       <label htmlFor="">Enter username:
//         <input 
//           type="text" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)}/>
//       </label>
//     </form>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


//  onSubmit
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyFrom() {
//   const [name, setName] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you enter was: ${name}`);
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <label htmlFor="">Enter your name: 
//         <input 
//           type="text" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyFrom />);


// multiple input fields
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs (values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <label htmlFor="">Enter your name:
//         <input 
//           type="text"
//           name="username"
//           value={inputs.username  || ""}
//           onChange={handleChange} 
//         />
//       </label>

//       <label htmlFor="">Enter your age: 
//         <input 
//         type="number" 
//         name="age"
//         value={inputs.age || ""}
//         onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


// Textarea
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of the textarea goes in the value attribute"
//   );

//   const handleChange = (event) => {
//     setTextarea(event.target.value);
//   }

//   return (
//     <form action="">
//         <textarea value={textarea} onChange={handleChange}></textarea>
//     </form>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// import { useState } from "react";
// import  ReactDOM  from "react-dom/client";

// function MyForm() {
//   const [myCar, setmyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setmyCar(event.target.value);
//   };

//   return (
//     <form action="">
//       <select name="" id="" value={myCar} onChange={handleChange}>
//         <option value="Volvo">Volvo</option>
//         <option value="Ford">Ford</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


// Routers
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// Memo
// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"])

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <Todos todos={todos}/>
//       <hr />

//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// Add CSS
// import React from "react";
// import ReactDOM from "react-dom/client";

// const Header = () => {
//   return (
//     <>
//       <h2 style={{color: "red"}}>Hello Style!</h2>
//       <p>Add a little style!</p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// backgroundColor
// const Header = () => {
//   return (
//     <>
//       <h2 style={{backgroundColor: "lightblue"}}>Hello Style!</h2>
//       <p>Add a little style!</p>
//     </>
//   )
// }


// JavaScript Object
// const Header = () => {
//   const myStyle = {
//     color: 'White',
//     backgroundColor: 'Dodgerblue',
//     padding: '10px',
//     fontFamily: 'Sans-Serif'
//   }

//   return (
//     <>
//       <h1 style={myStyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// External style sheet import
// import React from "react";
// import ReactDOM from "react-dom/client";
// import './App.css';

// const Header = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import Car from "./Car";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);


// import sass
// import React from "react";
// import ReactDOM from "react-dom/client";
// import './my-sass.scss';

// const Header = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavouriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favourite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>Blue</button>
//       <button type="button" onClick={() => setColor("red")}>Red</button>
//       <button type="button" onClick={() => setColor("pink")}>Pink</button>
//       <button type="button" onClick={() => setColor("green")}>Green</button>
//     </>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavouriteColor />);


// useState hook
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h2>My Favorite color is {color}!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// updates hook
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red!");

//   return (
//     <>
//       <h2>My favourite color is {color}</h2>

//       <button type="button" onClick={() => setColor("blue!")}>blue</button>
//     </>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// multiple hooks
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyCar() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState(1964);
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>It is a {color} {model} from {year}.</p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyCar />);



// instead of this we use an object
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyCar() {
//   const [car, setCar] = useState({
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1964,
//     color: 'red'
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>It is a {car.color} {car.model} from {car.year}.</p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyCar />);


// updating object and arrays in state
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyCar() {
//   const [car, setCar] = useState({
//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1964,
//     color: 'red'
//   });

//   const UpdateColor = () => {
//     setCar(previousState => {
//       return {...previousState , color: 'blue'}
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>It is a {car.color} {car.model} from {car.year}.</p>

//       <button type="button" onClick={UpdateColor}>blue</button>
//     </>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyCar />);


// useEffect 
// import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1)
//     }, 1000);
//   });

//   return (
//     <>
//       <h1>I have rendered {count} times!</h1>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


// control this side effect
// import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1)
//     }, 1000);
//   }, []);        // <- add empty brackets here

//   return (
//     <>
//       <h1>I have rendered {count} times!</h1>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


// add variable to control
// import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState("");

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]);     // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button type="button" onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


// Clean timeout
// import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);
  
//   return <h1>I've rendered {count} times!</h1> 
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


// useContext
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({user}) {
//   return (
//     <>
//     <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({user}) {
//   return (
//     <>
//     <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({user}) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({user}) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);



// create context to solve this problem
// import { createContext, useContext, useState } from 'react';
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component5 />
//     </>
//   );
// }
// function Component5() {
//   const user = useContext(UserContext);
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);



// useRef
// import { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input 
//       type="text" 
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       />

//       <h1>Render count: {count.current}</h1>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

/*
Try typing in the input field, and you will
see the application render count increase.
*/



// useRef
// import { useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement}/>
//       <button type="button" onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

/*
By clicking the button,
the input field will get focus 
*/



// useRef
// import { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
  
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input type="text" 
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       />

//       <h2>Current value: {inputValue}</h2>
//       <h2>Previous value: {previousInputValue.current}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

/*
Start typing in the input field 
and you will see the current- and previous value. 
*/


// useReducer
// import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: 'Todo 1',
//     complete: false
//   },
//   {
//     id: 2,
//     title: 'Todo 2',
//     complete: false
//   }
// ]

// const reducer = (state, action) => {
//   switch(action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if(todo.id === action.id) {
//           return {...todo, complete: !todo.complete};
//         }
//         else{
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// }

// function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({type: "COMPLETE", id: todo.id});
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input 
//             type="checkbox" 
//             checked={todo.complete}
//             onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Todos />);


// useCallback
// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";


// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//     <Todos todos={todos} addTodo={addTodo}/>
//       <hr />
//       <div>
//         Count: {count}
//         <button type="button" onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// solution useCallback
// import { useCallback, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   const addTodo = useCallback(() => {
//     setTodos((t) => [...t, "New Todo"]);
//   }, [todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo}/>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// useMemo
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todd"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>
//         })}

//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");

//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }

//   return num;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// solution useMemo
// import { useMemo, useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}

//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />

//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");

//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// Custom Hook "use"
// import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//       })}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />);


// create a custom hook in other file named useFetch.js

import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);