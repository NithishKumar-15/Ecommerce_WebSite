import style  from "./header.module.css"

const Header = () => {
    return (
        <header>
            <div className={`${style.header} container-fluid bg-white`}>
                <div className={`container d-flex align-items-center h-100`}>
                <div className={`${style.ecommerce} me-4`} style={{fontFamily:'Google Sans Flex, -apple-system, BlinkMacSystemFont, sans-serif'}}>
                    E-Commerce
                </div>
                <div className={`${style.formsearch}`}>
                    <input type="text" className={`${style.input} form-control border-0 shadow-none`} placeholder="Search For Products" aria-label="Username" onKeyDown={(e) => {
        if (e.key === "Enter")
            console.log('entered')
        }}/>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header