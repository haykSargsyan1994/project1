import css from './input.module.css'


const Input =({label,error, className, ...props})=>{
    return (
        <label className={css[className]}>
            {label}

            <input {...props}/>
            <span>
                {error}
            </span>
        </label>
    )
}


export default Input