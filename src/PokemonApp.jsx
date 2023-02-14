import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, setPokemons, startLoadingPokemons } from './store/slices/pokemons'

export const PokemonApp = () => {
    // const [page, setPage] = useState(0);

    const dispatch = useDispatch()
    const {pokemons = [], page, isLoading} = useSelector((state)=> state.pokemon);
    
    useEffect(()=>{
        // dispatch(getPokemons(page));
        dispatch(getPokemons());
        // console.log(page)
    // }, [page])
    }, [])
    // console.log(pokemons)
    console.log(isLoading)
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        {/* {   isLoading && */}

            <span>
            {!isLoading  ? 
                        <ul>
                        {pokemons.map((poke)=>(
                            <li 
                                key={poke.url}
                            >
                                {poke.name}
                            </li>
                                
                            ))}
                       
                            {/* <button onClick={()=>setPage(page + 1)}>Hola</button> */}
                            <button 
                            //   disabled={isLoading}
                            //   onClick={()=>getPokemons(page + 1)
                              onClick={()=>dispatch(getPokemons(page))
                            
                            }>Hola</button>
                    </ul>    
            : 'Loading' }
            </span>
        {/* } */}

        
    </>
  )
}
