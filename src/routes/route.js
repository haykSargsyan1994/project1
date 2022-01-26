import Home from "../components/home/home";
import Portfolio from "../components/Portfolio/portfolio";
import { HOME_PAGE, PORTFOLIO_PAGE } from "./urls";

export const routes = [

    {
        id:1, 
        name:'Home',
        component:Home,
        path:HOME_PAGE
    },

    {
        id:2,
        name:'Portfolio',
        component:Portfolio,
        path:PORTFOLIO_PAGE
    }
]