import style from "./homeappliances.module.css"

const HomeAppliances=()=>{
    return(
        <>
            <div className={`container mt-4 bg-white p-3 mb-3`}>
                <h5>Home Appliances</h5>
                <div className={`row container`}>

                    <div className={`${style.col} col text-center border rounded me-2`}>
                    <figure className="figure p-2">
                    <img width={150}  src="https://rukminim2.flixcart.com/image/150/150/ktlu9ow0/washing-machine-new/k/a/q/diva-plus-vx-ifb-original-imag6x2yr8a4c9vc.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/150/150/xif0q/refrigerator-new/h/8/e/-original-imah4fhhzgp6jgsj.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/150/150/k0vbgy80/vacuum-cleaner/j/s/j/eureka-forbes-quick-clean-dx-quick-clean-dx-original-imafkka7yychpknq.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/q/c/k/-original-imah3creegkyemr7.jpeg?q=70" className={`figure-img img-fluid rounded`} alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/q/l/h/-original-imah4eh94khhebpv.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/wardrobe-closet/a/i/m/-original-imagqctchhrauczd.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/bed/q/v/z/-original-imah3crettgjchwz.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeAppliances;