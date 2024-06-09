import Watch from '../assets/watch.jpg'
function Card(props){
    return(
        <div className="card-container">
            <div className="card">
                <img className="img1" src={Watch}></img>
                <h4>New Apple Watch</h4>
                <p> SAR 1.069</p>            
            </div>
        </div>
        
    );
}
export default Card