import Butoon from "./Butoon"


function Stor(props) {
  return (
    <div className="card-border">

    
     <img className="img" src={props.img}></img>
     <p>{props.text}</p>
    </div>
  )
}

export default Stor