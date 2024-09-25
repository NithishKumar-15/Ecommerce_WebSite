const electronicItem=[];

const electronicItems=(state=electronicItem,action)=>{
    if(action.type==='AddElectronicData'){
        return action.data;
    }else{
        return state;
    }
}

export default electronicItems;