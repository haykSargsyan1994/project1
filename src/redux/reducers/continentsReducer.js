import { GET_CONTINENTS, REMOVE_CONTINENTS } from "../actions/action.Continents"


const initialState = {
    continents:[
        {id:1, name:'Africa'},
        {id:2, name:'Europa'}
    ]
}


export const continentsReducer =(state=initialState, action)=>{
    switch(action.type){
        case GET_CONTINENTS:
            return {
                ...state,
                continents:[...state.continents, action.payload]
            }
            case REMOVE_CONTINENTS:
                return {
                    ...state,
                    continents:[...state.continents.filter(e=>e.id!==action.payload)]
                }
            
        default:
              return state
    }
}