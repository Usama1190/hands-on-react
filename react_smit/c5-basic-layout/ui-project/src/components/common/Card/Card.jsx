
const Card = ({data}) => {
  console.log(data);
  
  return (
    <div>
      <h1>{data.cardTitle}</h1>
      <p>{data.price}</p>
      <p>{data.description}</p>
      {
        data.isButton ? <button>view data</button> : null
      }
      
    </div>
  )
}

export default Card
