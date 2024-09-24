import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Electronics from "./Components/Electronics/Electronics";
import Clothing from "./Components/Clothing/Clothing";
import HomeAppliances from "./Components/HomeAppliances/HomeAppliances";

const Page=()=>{
    return (
        <>
        <Header></Header>
        <Filter></Filter>
        <Electronics></Electronics>
        <Clothing></Clothing>
        <HomeAppliances></HomeAppliances>
        </>
    )
}

export default Page