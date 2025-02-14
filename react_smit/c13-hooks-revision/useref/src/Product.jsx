import { useEffect, useRef, useState } from "react";

const Product = () => {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const data = await fetch('https://munchies-v1.vercel.app/munchies');
            // console.log(data);

            const res = await data.json();
            console.log(res);

            // const allData = res?.data;

            setProducts(res)
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const inputRef = useRef(null);

    const changeColor = () => {
        inputRef.current.style.backgroundColor = 'red';
    }

  return (
    <div>
        <input ref={inputRef} onFocus={changeColor} type="text" />
        {
            products?.map((item, index) => {
                const { name, description, category} = item;

                return (
                    <div key={index}>
                     <p>{name}</p>
                     <p>{description}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product
