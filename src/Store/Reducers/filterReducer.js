const filter={
    filterData:"All"
}

const filterReducer=(state=filter,action)=>{
if(action.type==="electronic"){
    return {
        ...state,
        filterData:"electronic"
    }
}else if(action.type==="clothing"){
    return {
        ...state,
        filterData:"clothing"
    }
}else if(action.type==="homeappliance"){
    return {
        ...state,
        filterData:"homeappliance"
    }
}else{
    return state;
}
}

export default filterReducer;