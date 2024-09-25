import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Electronics from "./Components/Electronics/Electronics";
import Clothing from "./Components/Clothing/Clothing";
import HomeAppliances from "./Components/HomeAppliances/HomeAppliances";
import store from "./Store/store";
import { Provider, useSelector } from "react-redux";

const Page=()=>{
    const {filterData}=useSelector((state)=>state.filterReducer)
    return (
        <>
        <Provider store={store}>
        <Header></Header>
        <Filter></Filter>
        {filterData==="All"&&<> 
        <Electronics></Electronics>
        <Clothing></Clothing>
        <HomeAppliances></HomeAppliances></>}

        {filterData==="clothing" &&<>
            <Clothing></Clothing>
        </>}

        {filterData==="homeappliance" &&<>
            <HomeAppliances></HomeAppliances>
        </>}

        {filterData==="electronic" &&<>
            <Electronics></Electronics>
        </>}
        </Provider>
        </>
    )
}

export default Page