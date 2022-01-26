import { routes } from "../routes/route";
import { NavLink } from "react-router-dom";
import css from './header.module.css'


const Header =()=>{
    return (
        <div>
              <ul className={css.menu}>
                {
                    routes.map(({id,name,path})=>{
                        return <li key={id}>
                            <NavLink className='link' activeClassName='active' to={path} exact>
                                {name}
                            </NavLink>
                        </li>
                    })
                }
            </ul>

        
        </div>
    )
}


export default Header