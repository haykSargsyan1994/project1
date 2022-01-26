import css from './modal.module.css'


const Modal =({close,children, className})=>{
    return (
        <div className={css[className]} onClick={close}>
                <div onClick={e=>e.stopPropagation()}>
                    {children}
                </div>
        </div>
    )
}


export default Modal