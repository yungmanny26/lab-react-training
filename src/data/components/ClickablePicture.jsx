import { useState } from "react/cjs/react.production.min"
import img from './assets/image/maxence.png'

const ClickablePicture = ({ img,imgClicked}) => {
    const [pictureClicked,setPictureClicked] = useState(false)

const togglePicture = ()=> {
    setPictureClicked(prevClick => !prevClick
    )}
    return <div> 
        <img src={pictureClicked? imgClick : img}
        alt="Sunglassprofile" onClick={togglePicture}/>
    </div>


}
export default ClickablePicture