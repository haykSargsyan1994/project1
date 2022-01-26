import { ADD_COUNTRIES } from "../actions/action.Countries"

const initialState ={
    countries:[
        {id:1, name:'France', continentsId:2},
        {id:2, name:'England', continentsId:2},
        {id:3, name:'Germany', continentsId:2},
        {id:4, name:'Scotland', continentsId:2},
        {id:5, name:'Egipt', continentsId:1},
        {id:6, name:'Algeria', continentsId:1},
        {id:7, name:'Tanzania', continentsId:1},
    ]
}

export const countriesReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_COUNTRIES:
            return {
                ...state,
                countries:[...state.countries, action.payload]
            }
        default:
            return state
    }
}