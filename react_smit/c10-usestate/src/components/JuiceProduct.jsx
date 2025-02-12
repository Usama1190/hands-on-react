import { Image } from "react-bootstrap"
import { data } from "../utils/product"
import { useState } from "react"

const JuiceProduct = () => {
    const [filter, setFilter] = useState(data[0].bariImg);

    const filterImg = (id) => {
        const filterData = data.find((item) => {
            return item.id == id
        })
        // console.log(filterData);
        setFilter(filterData.chotiImg)
        
    }

    console.log(filter);
    

  return (
    <div>
      <div>
        <h1>img1</h1>
        <Image width={200} height={200} src={filter} alt="smoothies image" thumbnail />
      </div>
      <div className="d-flex gap-3">
        {
            data.map((value) => {
                return (
                    <div onClick={() => filterImg(value.id)} key={value}>
                        <Image src={value.chotiImg} alt="smoothies image" thumbnail />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default JuiceProduct
