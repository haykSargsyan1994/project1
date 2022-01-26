import { useEffect, useState } from "react"
import UseValidation from "./useValidation"

const UseForm =(defaultValue,name,validation, makeShowModal)=>{

    const [value,setValue]=useState(defaultValue)
    const [isTached,setTached]=useState(false)

    const onChange=(e)=>{
        setValue(e.target.value)
    }

    const onBlur =()=>{
        setTached(true)
    }

    const validate = UseValidation(value,name,validation)

    useEffect(()=>{
        if(!makeShowModal){
            setValue('')
        }
    },[makeShowModal])

    return {
        value,
        isTached,
        onChange, 
        onBlur,
        ...validate
    }

}

export default UseForm