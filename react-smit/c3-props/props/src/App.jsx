const App = () => {
  const listData = [
    {
      listTitle: "list 1",
    },
    {
      listTitle: "list 2",
    },
    {
      listTitle: "list 3",
    },
    {
      listTitle: "list 4",
    },
    {
      listTitle: "list 5",
    },
  ];
  // List rendering
  return (
    <div>
      <h1>Porducts Card</h1>
      <ul>
        {listData.map((item, index) => {
          console.log(item);

          return <li key={index}>{item.listTitle}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;

/*

const App = () => {

  const listData = [
    {
      listTitle: 'list 1'
    },
    {
      listTitle: 'list 2'
    },
    {
      listTitle: 'list 3'
    },
    {
      listTitle: 'list 4'
    },
    {
      listTitle: 'list 5'
    }
  ]
  return (
    <div>
      <h1>Porducts Card</h1>
      <ul>
        <li>{listData[0].listTitle}</li>
        <li>{listData[1].listTitle}</li>
      </ul>
    </div>
  );
};

export default App;

*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // How to pass props from parent to child

  const data1 = {
    cardTitle: 'Card 1',
    cardDescription: 'Card Description',
    btnText: 'Btn Text',
    isButton: true
  }

  const data2 = {
    cardTitle: 'Card 2',
    cardDescription: 'Card Description',
    btnText: 'Btn Text',
    isButton: false
  }

  return (
    <div>
      <CustomCard isCard={true} cardData={data1} />
      <CustomCard isCard={false} cardData={data2} />
    </div>
  );
};

export default App;


*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // How to pass props from parent to child

  const data1 = {
    cardTitle: 'Card 1',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  const data2 = {
    cardTitle: 'Card 2',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  return (
    <div>
      <CustomCard isCard={true} cardData={data1} />
      <CustomCard isCard={false} cardData={data2} />
    </div>
  );
};

export default App;


*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // How to pass props from parent to child

  const data1 = {
    cardTitle: 'Card 1',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  const data2 = {
    cardTitle: 'Card 2',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  return (
    <div>
      <CustomCard isCard={true} cardData={data1} />
      <CustomCard isCard cardData={data2} />
    </div>
  );
};

export default App;

*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // How to pass props from parent to child

  const data1 = {
    cardTitle: 'Card 1',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  const data2 = {
    cardTitle: 'Card 2',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  return (
    <div>
      <CustomCard isCard={true} cardData={data1} />
      <CustomCard isCard={false} cardData={data2} />
    </div>
  );
};

export default App;

*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // How to pass props from parent to child

  const data1 = {
    cardTitle: 'Card 1',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  const data2 = {
    cardTitle: 'Card 2',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  return (
    <div>
      <CustomCard cardData={data1} />
      <CustomCard cardData={data2} />
    </div>
  );
};

export default App;

*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // How to pass props from parent to child

  const data = {
    cardTitle: 'Card 1',
    cardDescription: 'Card Description',
    btnText: 'Btn Text'
  }

  return (
    <div>
      <CustomCard cardData={data} />
    </div>
  );
};

export default App;

*/

/*

import CustomCard from "./components/card/Card";

const App = () => {
  // Props dealing
  // How to pass props from parent to child
  return (
    <div>
      <CustomCard title="abc" description="dsfhjdsf" btnTitle="See more" />
      <CustomCard title="bcd" description="jkfjsdgf" btnTitle="Show" />
      <CustomCard title="xyz" description="jgsgfhgh" btnTitle="View" />
    </div>
  );
};

export default App;

*/

/*

const App = () => {
  // const data = 'Hello World!';
  const appData = {
    name: 'Usama',
    age: 25
  }
  // rendering conditions
  return (
    <div>
      <h1>{appData.name === 'Usama'? 'Usama is present': 'Usama not present'}</h1>
      <p>{appData.age}</p>
    </div>
  )
}

export default App


*/

/*

const App = () => {
  const data = 'Hello World!';
  const appData = {
    name: 'Usama',
    age: 25
  }
  return (
    <div>
      <h1>{data}</h1>
      <h1>{appData.name}</h1>
      <p>{appData.age}</p>
    </div>
  )
}

export default App

*/

/*

const App = () => {
  return (
    <div>
      // <h1 class='' id=''></h1>
      // <img src="" alt="" width='' /> 
    </div>
  )
}

export default App

*/
