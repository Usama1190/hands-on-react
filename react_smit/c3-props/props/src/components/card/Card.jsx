const CustomCard = ({ cardData }) => {
    const { cardTitle, cardDescription, btnText, isButton } = cardData;
  
    return (
      <>
        <h1>{cardTitle}</h1>
        <p>{cardDescription}</p>
        {isButton ? <button>{btnText}</button> : null}
        
      </>
    );
  };
  
  export default CustomCard;
  

















/*

const CustomCard = ({ cardData }) => {
  const { cardTitle, cardDescription, btnText } = cardData;

  return (
    <>
      <h1>{cardTitle}</h1>
      <p>{cardDescription}</p>
      <button>{btnText}</button>
    </>
  );
};

export default CustomCard;

*/

/*

import Button from "./Button";

const CustomCard = (props) => {
    // property passing
  
    return (
      <>
      <Button {...props} />
      </>
    );
  };
  
  export default CustomCard;
  
*/

/*

const CustomCard = ({ cardData, isCard = true }) => {
    console.log(cardData, isCard);
    // default propperty
  
    return (
      <>
        <h1>{cardData.cardTitle}</h1>
        <p>{cardData.cardDescription}</p>
        <button>{cardData.btnText}</button>
      </>
    );
  };
  
  export default CustomCard;
 
  */

/*

const CustomCard = (props) => {
    const { cardData, isCard } = props;
    console.log(cardData, isCard);
    // Destructuring
  
    return (
      <>
        <h1>{cardData.cardTitle}</h1>
        <p>{cardData.cardDescription}</p>
        <button>{cardData.btnText}</button>
      </>
    );
  };
  
  export default CustomCard;
  

*/

/*

const CustomCard = ({ cardData, isCard }) => {
    console.log(cardData, isCard);
    // Destructuring
  
    return (
      <>
        <h1>{cardData.cardTitle}</h1>
        <p>{cardData.cardDescription}</p>
        <button>{cardData.btnText}</button>
      </>
    );
  };
  
  export default CustomCard;
  

*/

/*

const CustomCard = ({ cardData }) => {
  console.log(cardData);
  // Destructuring

  return (
    <>
      <h1>{cardData.cardTitle}</h1>
      <p>{cardData.cardDescription}</p>
      <button>{cardData.btnText}</button>
    </>
  );
};

export default CustomCard;

*/

/*

const CustomCard = (props) => {
    console.log(props.cardData);
    
  
    return (
      <>
        <h1>{props.cardData.cardTitle}</h1>
        <p>{props.cardData.cardDescription}</p>
        <button>{props.cardData.btnText}</button>
      </>
    );
  };
  
  export default CustomCard;

*/

/*

const CustomCard = (props) => {
    console.log(props.cardData);
    
  
    return (
      <>
        <h1>{props.cardData.cardTitle}</h1>
        <p>{props.cardData.cardDescription}</p>
        <button>{props.cardData.btnText}</button>
      </>
    );
  };
  
  export default CustomCard;

*/

/*

const CustomCard = (props) => {
  // console.log(props.title, props.description, props.btnTitle);

  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>{props.btnTitle}</button>
    </>
  );
};

export default CustomCard;

*/

/*
const CustomCard = () => {
    // console.log();
    
  return (
    <>
      <h1>Card title</h1>
     {console.log(props);} 
      <p>Card Description</p>
      <button>View Card info</button>
    </>
  )
}

export default CustomCard

*/
