const clothingItem=[];

const clothingItems=(state=clothingItem,action)=>{
    if(action.type==="AddClothingData"){
        return action.data;
    }else{
        return state;
    }
}

export default clothingItems;