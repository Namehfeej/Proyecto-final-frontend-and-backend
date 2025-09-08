import {  useEffect, useState } from 'react'
import { getProducts } from '../utils/api'
import { useParams } from 'react-router'
import { NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";


function ProductDetail() {

  const { id } = useParams()

  const [getToysById, setGetToysById] = useState([])

  useEffect(() => {
        getProducts()
          .then(data => setGetToysById(data))
  }, [id])

  console.log({getToysById})

  const urlImg = () => getToysById.filter(toy => toy.id === id)
  console.log(urlImg())

  const urlToyImgage = urlImg().map(toy => toy.imgDetails)
  console.log(urlToyImgage)

 let genId = crypto.randomUUID().slice(0, 4)
  console.log(genId) 
  if(getToysById)

  return (
    
<>
  <div className="main-container__product-details" >
        <h1>Product Detail Page</h1>
        <p>This page will display detailed information.</p>
        <div>
            { 
            getToysById.map(toy => 
              <div key={toy.id} className='products-details__container'>
                  {toy.id === id && 
                    <div className="products-details__card">
                      <h2>{toy.name}</h2>
                      { toy.img && urlToyImgage.map(imgDetails => 
                        <div key={genId} className='products-details__images'>
                          <img src={imgDetails.principal !== "" ? imgDetails.principal : null} alt={imgDetails.principal.length !== 0 ? `Toy for ${toy.name}` : null}  />
                          <img src={imgDetails.second.length === 0 ? null : imgDetails.second} alt={imgDetails.second.length !== 0 ? `Toy for ${toy.name}` : null}  />
                          <img src={imgDetails.third.length > 0 ? imgDetails.third : null} alt={imgDetails.third.length !== 0 ? `Toy for ${toy.name}` : null}  />
                          <img src={imgDetails.fourth === "" ? null : imgDetails.fourth} alt={imgDetails.fourth.length !== 0 ? `Toy for ${toy.name}` : null}  />
                          <img src={imgDetails.fifth.length > 0 ? imgDetails.fifth : null} alt={imgDetails.fifth.length !== 0 ? `Toy for ${toy.name}` : null}  />
                          <img src={imgDetails.sixth !== "" ? imgDetails.sixth : null} alt={imgDetails.sixth.length !== 0 ? `Toy for ${toy.name}` : null}  />
                          <img src={imgDetails.seventh !== "" ? imgDetails.seventh : null} alt={imgDetails.seventh.length !== 0 ? `Toy for ${toy.name}` : null} />
                          <img src={imgDetails.eighth !== "" ? imgDetails.eighth : null} alt={imgDetails.eighth.length !== 0 ? `Toy for ${toy.name}` : null}  />
                        </div>
                      )
                      }
                    
                      <p>{toy.largeDescription}</p>
                    </div>

                  }
              </div>
              
            )
          }
        </div>
          
    
  </div>
        <div className='home-btn_container'>
          <NavLink to="/"><FaHome/></NavLink>
        </div>
</>
  )
}

export default ProductDetail
