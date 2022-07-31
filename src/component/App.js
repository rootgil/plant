import Banner  from "./Banner";
import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import Footer from "./Footer"
import logo from '../assets/logo.png'
import '../styles/Layout.css'
import {useState,useEffect} from "react"

function App() {

  const title = "La maison jungle"

  //###############################
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  //###############################  
  
  return (<div>
    <Banner> 
      <img src={logo} alt='Logo de la maison jungle' className='lmj-logo'/>
      <h1 className = 'lmj-title'>{ title }</h1>
    </Banner>
    <div className="lmj-layout">
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart} />
    </div>
    <Footer />
  </div>)
}

export default App;
