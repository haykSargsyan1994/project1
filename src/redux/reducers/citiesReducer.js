import img from '../../image/oran-algeria.jpg'
import img1 from '../../image/sharm-el-sheikh-e1569582066358.jpeg'
import img2 from '../../image/download.jpg'
import img3 from '../../image/R.jpg'
import img4 from '../../image/OIP.jpg'
import img5 from '../../image/zanzibar.jpg'
import img6 from '../../image/what-to-look-for-1-640x497.jpg' 
import img7 from '../../image/th.jpg'
import img8 from '../../image/marselha-2.jpg'
import img9 from '../../image/download.jpg'
import img10 from '../../image/download.jpg'
import img11 from '../../image/OIP.jpg'
import img12 from '../../image/Berlin.jpg'
import img13 from '../../image/Biggest.jpg'
import img14 from '../../image/Frankfurt.jpg'
import img15 from '../../image/Scotish castle.jpg'
import img16 from '../../image/Edinburgh.jpg'

const initialState ={
    cities:[
        {id:1,name:'Sharm el-Sheikh', countriesId:5,image:img1 },
        {id:2,name:'Hurghada', countriesId:5, image:img2},
        {id:3,name:'Cairo', countriesId:5, image:img3},
        {id:4,name:'Oran', countriesId:6, image:img},
        {id:5,name:'Camel', countriesId:6, image:img4},
        {id:6,name:'Zanzibar', countriesId:7, image:img5},
        {id:7,name:'Unguja', countriesId:7, image:img6},
        {id:8,name:'Paris', countriesId:1, image:img7},
        {id:9,name:'Marsel', countriesId:1, image:img8},
        {id:10,name:'Lion', countriesId:1, image:img9},
        {id:11,name:'London', countriesId:2, image:img10},
        {id:12,name:'Whole', countriesId:2, image:img11},
        {id:13,name:'Berlin', countriesId:3, image:img12},
        {id:14,name:'Biggest', countriesId:3, image:img13},
        {id:15,name:'Frankfurt', countriesId:3, image:img14},
        {id:16,name:'Scotish castle', countriesId:4, image:img15},
        {id:17,name:'Edinburgh', countriesId:4, image:img16},
    ]
}


export const citiesReducer =(state=initialState, action)=>{
    switch(action.type){
        default:
            return state
    }
}

