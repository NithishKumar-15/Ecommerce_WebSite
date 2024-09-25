const homeAppliance=[];

const homeAppliances=(state=homeAppliance,action)=>{
    if(action.type==="AddHomeAppliancesData"){
        return action.data;
    }else{
        return state;
    }
}

export default homeAppliances;