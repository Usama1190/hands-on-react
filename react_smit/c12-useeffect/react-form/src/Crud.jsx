import axios from "axios"
import { useEffect, useState } from "react";

const Crud = () => {

  const [products, setProducts] = useState([])
  const [isLoadings, isSetLoadings] = useState(false)
  const [filterProduct, setFilterProduct] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [search, setSearch] = useState('');
  const [isFound, setIsFound] = useState(false);

  const getData = async () => {
    isSetLoadings(true)

    // const [res, error] =? fetch('');          // Nulish operator

    try {
      const data = await axios.get('https://fakestoreapi.com/products')
      const res = data?.data;         // Nulish operator
      setProducts(res)
      const categories = [... new Set(res.map((item) => item.category))]
      // console.log(categories);

      setCategorys(categories);
      setFilterProduct(res)
      
      console.log(res);
      isSetLoadings(false)
      
    } catch (error) {
      console.log(error);
      isSetLoadings(false)
    }
  }

  const handleValue = (cat) => {
    if(cat === 'All') {
      setFilterProduct(products)
    }
    // console.log(cat);
    const filterData = products.filter((item) => item.category === cat)
    // console.log(filterData);
    setFilterProduct(filterData);
    
  }

  const handleSearch = () => {
    // console.log(search);

    const filterSearch = filterProduct.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    // console.log(filterSearch);

    if(filterSearch.length === 0) {
      setIsFound(true)
    }else {
      setFilterProduct(filterSearch)
      setIsFound(false)

    }

  }

  const handleEnterSearch = (e) => {
    if(e.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(() => {
    getData();    
  }, [])

  // console.log(isLoadings);
  

  return (
    <div>
      { isLoadings ? <div className="loader"></div> : 
      <>
      <div>
        <input onKeyDown={handleEnterSearch} type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <select name="" id="" onChange={(e) => handleValue(e.target.value)}>
        <option value="All">All</option>
        {
          categorys.map((item, index) => {
            return (
              <option value={item} key={index}>{item}</option>
            )
          })
        }
      </select>
      <button onClick={handleSearch}>Search</button>
      </div>

        {
          isFound ? <p>No data found</p> : 
        
            <>
            {
              filterProduct.map((item) => {
                const { title, image} = item;

                return (
                  <div key={item.id}>
                    <img src={image} alt="image" />
                    <p>{title}</p>
                  </div>
                )
              })
            }
            </>
          }
      </>
    }
    </div>
  )
}

export default Crud














/*

import axios from "axios"
import { useEffect, useState } from "react";

const Crud = () => {

  const [hits, setHits] = useState(0)

  const getData = async () => {

    // const [res, error] =? fetch('');          // Nulish operator

    try {
      const data = await axios.get('https://fakestoreapi.com/products')
      console.log(data.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getData();
    console.log('Han Bhaii........');
    
  }, [hits, id])
  return (
    <div>
      <button onClick={() => setHits(hits + 1)}>Click me</button>
    </div>
  )
}

export default Crud

*/

















/*

import React, { useEffect, useState } from 'react'

const Crud = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
      console.log('hello world');
      
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default Crud
*/
