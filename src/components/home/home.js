import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import Input from "../../input/input";
import Modal from "../../modal/modal";
import UseForm from "../../useForm/useForm";
import { UseQuerry } from "../../useQuerry/useQuerry";
import css from './home.module.css';
import { actionContinentsAC, actionRemoveContinentsAC } from "../../redux/actions/action.Continents";


const Home =()=>{

    const continents = useSelector(state=>state.continentsReducer.continents)
    const countries = useSelector(state=>state.countriesReducer.countries)
    const cities = useSelector(state=>state.citiesReducer.cities)

    console.log(continents);

    const dispatch = useDispatch();
    const history = useHistory();
    const querry = UseQuerry();
    const continentsQuerryId = +querry.get(`continents`)
    const countriesQuerryId = +querry.get(`countries`)
    const citiesQuerryId = +querry.get(`cities`)

    const [showModal,setShowModal]=useState(false);
    const [showCountryModal,setShowCountryModal]=useState(false)

    const [showEdit,setShowEdit]=useState({});
    const [editCountry,setEditCountry]=useState({})
    const [showCities,setShowCities]=useState(cities)

    const [value,setValue]=useState('')
    
   const continent=UseForm(
       '',
       'continent',
       {isEmpty:true, isContinent:false},
       showModal
   );

   const country = UseForm(
       '',
       'country',
        {isEmpty:true, isCountry:false},
        showCountryModal
   )

   const [count,setCount]=useState(countries);

   useEffect(()=>{
        if(cities.length){
            setShowCities(cities)
        }
   },[cities])

   useEffect(()=>{
        if(countries.length){
            setCount(countries)
        }
   },[countries]);

   const addContinents =(e)=>{
        e.preventDefault();
        if(continent.value){
            dispatch(actionContinentsAC({id:Math.random, name:continent.value}))
            setShowModal(false)
        }
   }

   const addCountries =()=>{

   }

   const removeContinents =(id)=>{
       dispatch(actionRemoveContinentsAC(id))
   }

   const makeEdit =(id)=>{
        setShowEdit({[id]:false})
        count.forEach(e=>{
            if(id===e.id){
                e.name=editCountry[id]
            }
        })
   }
   

    return (
        <div className={css.container}>

            <div className={css.containerBox}>
                <input value={value} 
                       onChange={e=>{
                            let result = cities.filter(p=>{
                                return p.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())
                            })
                            setValue(e.target.value);
                            setShowCities(result)
                }}/>
            </div>
           

          <div className={css.corpus}>
               <ul className={css.menu}>
                  {
                    continents.map(({id,name})=>{
                        return <li key={id} onClick={()=> history.push(`/?continents=${id}`)}
                                className={id===continentsQuerryId ? 'main' : undefined}>
                            {name}
                            <button onClick={()=>removeContinents(id)}>x</button>
                           
                        </li>
                      
                    })
                    
                   }
                
               </ul>
              <button className={css.menuBut} onClick={()=>setShowModal(true)}>+</button>
            </div>
          <div>
              
          </div>
          <div className={css.corpus}>
              <ul className={css.menu1}>
                  {
                     countries.map(({id,name,continentsId})=>{
                        return continentsId ===continentsQuerryId && <li key={id}
                                                                         onClick={()=>history.push(`/?continents=${continentsQuerryId}&countries=${id}`)}
                                                                         className={id===countriesQuerryId ? 'main1' : undefined}>
                            {
                                showEdit[id] ? <input className={css.inp}
                                                      value={editCountry[id]}
                                                      onChange={e=>setEditCountry({[id]:e.target.value})}/> : <span>{name}</span>
                            }     
                            <button onClick={showEdit[id] ? ()=> makeEdit(id) : ()=> {
                                setShowEdit({[id]:true})
                                setEditCountry({[id]:name})
                            }}>
                                {showEdit[id] ? 'save' : 'edit'}
                            </button>                               
                        </li>
                    })
                  }
               </ul>
              {continentsQuerryId>0 && <button onClick={()=>setShowCountryModal(true)} className={css.menuBut}>+</button>} 
          </div>
            <ul className={css.menu2}>
                {
                    showCities.map(({id,name,countriesId,image})=>{
                        return countriesId ===countriesQuerryId && <li key={id}
                                                                       onClick={()=>history.push(`/?continents=${continentsQuerryId}&countries=${countriesQuerryId}&cities=${id}`)}>

                            <img className={css.image} src={image}/>
                            <span>{name}</span>
                        </li>
                    })
                }
            </ul>

            {
                showModal && <Modal className='modal' close={()=>setShowModal(false)}>
                        <div className={css.modalMask}>
                            <div className={css.continentsCorpus}>
                            <span>Continents</span>
                            <button onClick={()=>setShowModal(false)}>x</button>
                            </div>
                        
                            <form className={css.formMask}>
                             
                                <Input className ='continentsInput'
                                   label='Add Continent'
                                   value={continent.value}
                                    onChange={continent.onChange}
                                    onBlur={continent.onBlur}
                                    error={continent.isTached ? continent.errors.continent : null}/>
                                    
                            <button className={css.continentsAdd} onClick={addContinents}>
                                Add 
                            </button>
                            </form>
                        </div>
                </Modal>
            }

            {
                showCountryModal && <Modal className='modal1'>
                                            <div className={css.mask}>
                                                <div>
                                                    <span>
                                                        Cities
                                                    </span>
                                                    <button onClick={()=> setShowCountryModal(false)}>
                                                        x
                                                    </button>
                                                </div>

                                                <form className={css.form1Mask}>
                                                    <Input className='continentsInput' label='Add country'
                                                           value={country.value}
                                                           onChange={country.onChange}
                                                           onBlur={country.onBlur}
                                                           error={country.isTached ? country.errors.country : null}/>
                                                    
                                                    <button>
                                                        Add
                                                    </button>
                                                </form>
                                            </div>
                                    </Modal>
            }
          
        </div>
    )
}

export default Home