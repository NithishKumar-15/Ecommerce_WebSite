import { useDispatch, useSelector } from "react-redux"
import style from "./electronics.module.css"
import axios from "axios";
import { useEffect } from "react";

const Electronics=()=>{
    const state=useSelector((state)=>state.electronicItems);
    const dispatch=useDispatch();

    useEffect(()=>{

        const fetchData=async()=>{
            const data=await axios.get("https://ecommerce-website-backend-at15.onrender.com/electronics");
            console.log(data.data.data);
            dispatch({type:'AddElectronicData',data:data.data.data})
         }
 
         fetchData();
    },[])

    return(
        <>
            <div className={`container mt-4 bg-white p-3`}>
                <h5>Best of Electronics</h5>
                <div className={`row container`}>

                {state.map((val)=>(
                    <div className={`${style.col} col text-center border rounded me-2 btn`} data-bs-toggle="modal" data-bs-target={`#${val.ID}`} key={val.ID}>
                    <figure className="figure p-2">
                    <img width={150} src={`${val.Url}`}className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">{val.ProductName}</h3>
                    <p className="text-center">₹{val.Price}</p>
                    </figure>
                    </div>
                ))}

                </div>
            </div>

            {state.map((val)=>(
                <div className="modal fade" id={`${val.ID}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" key={val.ID}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <figure className="text-center w-100 figure p-2">
                            <img width={120} src={`${val.Url}`} className="figure-img img-fluid rounded d-block mx-auto" alt="..." />
                            <h3 className="figure-caption ">{val.ProductName}</h3>
                            <span className="d-block mb-3">₹{val.Price}</span>
                            <p>
                            You don't have to worry about washing your piles of dirty laundry, as you bring home the Whirlpool 7.5-kg fully-automatic washing machine. Featuring a The Stainwash program, this washing machine allows you to remove up to 48 hours old stains. Also, you can sanitize your clothes using the 3 hot water modes which removes germs and allergens from your fabrics. Also, thanks to the Hexa Bloom Impeller feature, you can enjoy a flawless cleaning performance even after rubbing your clothes against each other. 
                            </p>
                        </figure>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default Electronics