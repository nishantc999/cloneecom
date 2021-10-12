export const initialState =[]
export const reducer=(state,action)=>{
switch(action.type){
    case "ADD_TO_CART":
        const f=state.find((val)=>{return val.id===action.item.id;});
        if(f){
            state.filter((val)=>{
                if(val.id===action.item.id){
                    return[...state, val.qty+=1]
                }
            })
        }
        else{
            return[...state,action.item];
        }
        state.filter((val)=>{
           return console.log(val.qty)
        })
        return state

        break;
        case "REMOVE_ITEM":
            return state.filter((val)=>{
                return val.id!==action.id
            })
            break;
            case "QTY_INC":
                return state.filter((val)=>{
                    if(val.id===action.id){
                        return[...state, val["qty"]+=1]
                    }
                    else{
                        return[...state]
                    }
                })
                break;
                case "QTY_DEC":
                return state.filter((val)=>{
                    if(val.id===action.id){
                        return[...state, val["qty"]-=1]
                    }
                    else{
                        return[...state]
                    }
                })
                break;
        default:
            return state;
}

}
