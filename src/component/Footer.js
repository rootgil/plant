import { useState } from "react";
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('');

    function handleBlur() {
        if (!inputValue.includes('@'))
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
    function handleChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <form className="lmj-footer">
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                placeholder="Entrer votre mail"
                onChange={handleChange}
                value={inputValue}
                onBlur={handleBlur}
            />
        </form>
    )

}

export default Footer