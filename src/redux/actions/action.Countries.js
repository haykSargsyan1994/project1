export const ADD_COUNTRIES='ADD_COUNTRIES';


export const actionCountriesAC=(country)=>{
    return {
        type:ADD_COUNTRIES,
        payload:country
    }
}