export const GET_CONTINENTS='GET_CONTINENTS'
export const REMOVE_CONTINENTS='REMOVE_CONTINENTS'


export const actionContinentsAC =(name)=>{
    return {
        type:GET_CONTINENTS,
        payload:name
    }
}

export const actionRemoveContinentsAC=(id)=>{
    return {
        type:REMOVE_CONTINENTS,
        payload:id
    }
}