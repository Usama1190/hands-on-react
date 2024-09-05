import Image from "next/image";
import { use } from "react";

// Creating and nesting components    : t01

// two ways for defining react components
// 1. function or component write is in the same file

/*
function MyButton() {
  return (
    <button>I&apos;m a button</button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app.</h1>
      <MyButton />
    </div>
  );
}
*/




// 2. create a component folder and create a file component-name.tsx, then
//     import in the main file or page.tsx

/*
import MyButton from "./components/MyButton";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app.</h1>
      <MyButton />
    </div>
  );
}
*/





// Writing markup with JSX      : t02

/*
import MyButton from "./components/MyButton";
import AboutPage from "./components/AboutPage";

export default function Home() {
  return (
    <div>
        <AboutPage />
    </div>
  );
}
*/






// Adding styles      : t03
/*
import MyButton from "./components/MyButton";
import AboutPage from "./components/AboutPage";

export default function Home() {
  return (
    <div>
        <MyButton />
    </div>
  );
}
*/








// Displaying Data       : t04

/*
const user = {
  name: 'Hedy Lamarr',
  imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        src={user.imageURL} 
        alt={user.name} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}
*/







// Conditional Rendering       : t05

/* 
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
 */


/*
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
*/




/*
<div>
  {isLoggedIn && <AdminPanel />}
</div>
*/






// Rendering List      : t06

/*
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


export default function ShoppingList() {

  const listItems = products.map((product) => 
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  )
}
*/