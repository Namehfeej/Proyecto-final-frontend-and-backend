import Products from '../Layout/Products'


function Home() {
  return (
<>
    <div className='home-title'>
        <h1 className='home-title__glow'>Cosmic Toy Store</h1>

        <p>Welcome to the Cosmic Toy Store, where imagination meets playtime!</p>
    </div>
          <Products />
</>
  )
}

export default Home
