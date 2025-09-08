
import { BrowserRouter, Routes, Route} from 'react-router'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Upload from '../pages/Upload'
import Layout from '../Layout/Layout'
import ProductDetail from '../pages/ProductDetail'
import Checkout from '../pages/Checkout'

function AppRoutes() {
  return (
    <div>
        <BrowserRouter> 
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default AppRoutes
