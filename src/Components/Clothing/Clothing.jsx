import  style from "./clothing.module.css"

const Clothing=()=>{
    return(
        <>
         <div className={`container mt-4 bg-white p-3`}>
                <h5>Fashion And Clothing</h5>
                <div className={`row container`}>

                    <div className={`${style.col} col text-center border rounded me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/f/r/j/m-s24jmkt280-tommy-hilfiger-original-imahygq8vhpjxqgg.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col col-md text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} height={200} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/k/j/38-pjsfpsspn73098-peter-england-original-imagkrtyk49k9huz.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/8/a/r/m-skd8112aw22fus-biba-original-imaggyfgctggegkn.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/tight/c/4/v/-original-imahy8bfdwdcapnt.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/j/b/g/-original-imagyz2c6vuzepzy.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/xif0q/sock/1/p/b/free-3-vxt11141-van-heusen-original-imaggcnzby5zrwsj.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                    <div className={`${style.col} col text-center border rounded  me-2`}>
                    <figure className="figure p-2">
                    <img width={150} src="https://rukminim2.flixcart.com/image/612/612/kjvrdzk0/sweatshirt/j/h/b/1-2-years-30447ecomi-13c-united-colors-of-benetton-original-imafzcffbdyzyzhv.jpeg?q=70" className="figure-img img-fluid rounded" alt="..." />
                    <h3 className="figure-caption ">Iron Box</h3>
                    <p>₹5000</p>
                    </figure>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Clothing;