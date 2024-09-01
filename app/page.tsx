import Image from "next/image";

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

import MyButton from "./components/MyButton";
import AboutPage from "./components/AboutPage";

export default function Home() {
  return (
    <div>
        <MyButton />
    </div>
  );
}