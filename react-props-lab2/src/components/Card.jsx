import Watch from '../assets/watch.jpg'
function Card(props){
    return(
        <div className="card-container">
            <div className="card">
                <img className="img1" src={Watch}></img>
                <h4>{props.title}</h4>
                <p>{props.para}</p>
            </div>
        </div>
        
    );
}
export default Card