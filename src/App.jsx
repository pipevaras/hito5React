import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarPizzeria from './components/NavbarPizzeria'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Navbar from './pages/Navbar'

function App() {
  return (
    <>
      {/* <NavbarPizzeria />*/}
      {/* <Home /> */}
      {/*<Register />*/}
      {/*<Login />*/}
      {/*<Cart />*/}
      {/*<Pizza />*/}
      {/*<Footer />*/}
      <Navbar total={25000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
