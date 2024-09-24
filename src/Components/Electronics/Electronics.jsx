import style from "./electronics.module.css"

const Electronics=()=>{
    return(
        <>
            <div className={`container mt-4 bg-white p-3`}>
                <h5>Best of Electronics</h5>
                <div className={`row container`}>

                    <div className={`${style.col} col text-center border rounded me-2`}>
                    <figure className="figure p-2">
                    <img width={150}  src="https://rukminim2.flixcart.com/image/612/612/kzzw5u80/iron/w/a/d/440210-bajaj-original-imagbvsycm6aty2z.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/fan/o/l/a/phantom-smoke-brown-ultra-high-speed-ceiling-fan-with-anti-dust-original-imagqsnrfydh6bdp.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/y/0/0/-original-imagtt3wykyvwndh.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/u/f/k/-original-imagtevgtbtauah7.jpeg?q=70" className={`figure-img img-fluid rounded`} alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/8/i/-original-imah4zp7fgtezhsz.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/5/h/-original-imahf3h3ppfx3fer.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/i/n/-original-imagzhspjy5g8nh3.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Electronics