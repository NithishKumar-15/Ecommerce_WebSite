import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Electronics from "./Components/Electronics/Electronics";
import Clothing from "./Components/Clothing/Clothing";
import HomeAppliances from "./Components/HomeAppliances/HomeAppliances";
import store from "./Store/store";
import { Provider } from "react-redux";

const Page=()=>{
    return (
        <>
        <Provider store={store}>
        <Header></Header>
        <Filter></Filter>
        <Electronics></Electronics>
        <Clothing></Clothing>
        <HomeAppliances></HomeAppliances>
        </Provider>
        </>
    )
}

export default Page