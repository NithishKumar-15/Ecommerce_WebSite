import { useDispatch } from "react-redux";
import style from "./filter.module.css"

const Filter=()=>{
    const dispatch=useDispatch();
    return(
        <div className={`${style.filter} row mt-4 bg-white mx-auto`}>

           
            <div className={`col text-center`}>
            <figure className={`${style.filtercol} figure`} onClick={()=>dispatch({type:"electronic"})}>
            <img src="https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption fw-bold">Electronics</figcaption>
            </figure>
            </div>  

            <div className={`col text-center`}>
            <figure className={`${style.filtercol} figure`} onClick={()=>dispatch({type:"clothing"})}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption fw-bold">clothing</figcaption>
            </figure>
            </div>   

            <div className={`col text-center`}>
            <figure className={`${style.filtercol} figure`} onClick={()=>dispatch({type:"homeappliance"})}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption fw-bold">Home Appliances</figcaption>
            </figure>
            </div>   
            
        </div>
    )
}

export default Filter;