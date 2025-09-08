import { useState, useEffect } from "react"
import { getProducts } from "../utils/api"
import Card from "../components/Card"

function Products() {
  
  const [getToys, setGetToys] = useState([])

  useEffect(() => {
      getProducts()
        .then(data => {
          setGetToys(data)
        })
  }, [])

  //console.log(getToys)

  return (
    <div className="product-card__container">
      {getToys ? getToys.map(toy => {
        return (
          <div key={toy.id} className="col-12 col-xs-12 col-sm-6 col-lg-3 col-xl-4">
            <Card 
              key={toy.id}
              name={toy.name} 
              img={toy.img}
              category={toy.category}
              description={toy.shortDescription}
              price={toy.price}
              id={toy.id}
             />
      </div>
        )
      }) : undefined}
    </div>
  )
}

export default Products
