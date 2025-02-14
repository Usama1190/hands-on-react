import { useState } from "react"
import InputField from "./InputField";

const Crud = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    const addData = () => {
        setData((pre) => ([...pre, input]));
        setInput('')
    }
    console.log(data);

    const deleteData = (id) => {
        // console.log(index);
        const diljale = data.filter((_, index) => {
          return index !== id
        })
        setData(diljale)
        console.log(diljale);
    }

    const editData = (id) => {
      console.log(id);

    }
    
  return (
    <div>
      <InputField type={''} name={''} />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addData}>Add</button>
      {/* <p>{input}</p> */}
      <div>
        {data.map((item, index) => {
            return (
               <>
                <p key={index}>{ item }</p>
                <button onClick={() => deleteData(index)}>Delete</button>
                <button onClick={() => editData(index)}>Edit</button>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default Crud
