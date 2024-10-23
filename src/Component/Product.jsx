
import './Profile.css'
import Baby from '../assets/image/baby.jpg'
import List from "./List"

const Product =()=>{
    return(
        <div className="container">
        <List name="Smartphone XYZ" price={23} description ="The latest smartphone with stunning features and sleek design" color="black" header="Header"
        text="Text" loc="Loc" image="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg" Image="img"/>

        </div>
    )
}

export default Product