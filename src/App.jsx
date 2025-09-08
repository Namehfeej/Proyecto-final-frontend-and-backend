import CartProvider from './context/CartProvider'
import HeartProvider from "./context/HeartProvider"
import AppRoutes from './routes/AppRoutes'

function App() {
  

  return (
    <CartProvider>
      <HeartProvider>
          <AppRoutes />
      </HeartProvider>
    </CartProvider>
    
  )
}

export default App
