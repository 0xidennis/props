import ProfileCards from "./ProfileCards"
import './Profile.css'
import Baby from '../assets/image/baby.jpg'

const Profile =()=>{
    return(
        <div className="container">
        <ProfileCards name="menewe ifeanyi" age={23} location ="abuja" color="black" header="Header"
        text="Text" loc="Loc" image={Baby} Image="img"/>
        <ProfileCards name="IGBO" age={80} location ="ENUGU" color="white" header="Header"
        text="Text" loc="Loc" image={Baby} Image="img"/>
        <ProfileCards name="DENNIS" age={23} location ="DELTA" color="black" header="Header"
        text="Text" loc="Loc" image={Baby} Image="img"/>
        </div>
    )
}

export default Profile