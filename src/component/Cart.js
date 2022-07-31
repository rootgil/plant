import { useState,useEffect } from 'react';
import '../styles/Cart.css'

function Cart({ cart, updateCart}) {

    const total = cart.reduce((acc, plant) => (acc + plant.amount * plant.price), 0)
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => { document.title = `LMJ: ${total}€ d'achats`}, [total] )

    return (
        isOpen ?
            (<div className="lmj-cart">
                <button onClick={() => setIsOpen(false)}
                    className='lmj-cart-toggle-button'>Fermé</button>
                {(cart.length > 0) ? (
                    <div><h1>Panier</h1>
                        <ul>
                            {cart.map(({ name, price, amount }, index) => (
                                <div key={`${name}-${index}`}>
                                    {name} {price}$ x {amount}
                                </div>
                            ))
                        
                            }
                        </ul>
                        <h3>Total: {total}$</h3>
                        <button onClick={() => updateCart([])}>Vider le panier</button>
                    </div>) : (<div>Votre panier est vide</div>)}</div>
    ): (
                <div className='lmj-cart-closed'>
                    <button onClick={() => setIsOpen(true)} className='lmj-cart-toggle-button'>Ouvrir le panier</button>
                </div>))
}

export default Cart