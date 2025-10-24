import "./card.css";
import krushan1 from "../media/krushan1.jpg";

function card({user})
{
    // console.log(props)
    // const {text}=props
// props.text="ram Ram"


    let krushan={
        width:"100%"


    }
    return(
        <div className="main">
        <h1 className="heading">{user}</h1>
        <img style={krushan} src={krushan1} alt="god"/>
        <p className="web">Radhe Radhe </p>
        <button className="btn">More Info</button>
        </div>

    )
}
export default card;