import { useEffect, useState } from "react"
import { validateUserName } from "./validate";


const UseValidation =(value,name,validation)=>{

    const [errors,setErrors]=useState({});
    const [isEmpty,setEmpty]=useState(true);
    const [validateContinent,setValidateContinent]=useState(false)


   useEffect(()=>{
      for( let valid in validation){
        switch(valid){
            case 'isEmpty':
               value ? setEmpty(true):setEmpty(false)
            case 'isContinent':
              validateUserName(value) ? setValidateContinent(false): setValidateContinent(true)
        }
      }

   },[value])

   useEffect(()=>{
      if(!isEmpty){
        setErrors({
          [name]:'it is empty'
        })
      }
      else if(validateContinent){
          setErrors({
            [name]:'it is wrong'
          })
      }
      else{
        setErrors({
          [name]:''
        })
      }
   },[isEmpty,validateContinent])



   return {
     errors
   }

}




export default UseValidation