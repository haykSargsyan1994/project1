import { Redirect, Route, Switch } from "react-router"
import { routes } from "../routes/route"
import { HOME_PAGE } from "../routes/urls"


const AppRoutes =()=>{
    return (
        <Switch>
        {
            routes.map(({id,path,component})=>{
                return <Route key={id} path={path} component={component} exact/>

            })
        }


        <Redirect to={HOME_PAGE} exact/>

    </Switch>
    )
    
}


export default AppRoutes