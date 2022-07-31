import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function handClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({cover, name, water, light, price}) {
    
    return (
        <li className="lmj-plant-item" onClick={handClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img className="lmj-plant-item-cover" alt={name + " cover"} src={cover} />
            {name}
            <div>
                <CareScale careType={"water"} scaleValue={ water } />
                <CareScale careType={"light"} scaleValue={ light }/>
            </div>
        </li>
    )

}

export default PlantItem