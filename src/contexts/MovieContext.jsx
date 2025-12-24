import { createContext,useState,useContext,useEffect, Children } from "react";

const MovieContext =createContext()

export const useMovieContext=()=>useContext(MovieContext)


export const MovieProvider=({children})=>{

    const [favorite,setFavorite] = useState([])

    useEffect(()=>{
        const storedFavs= localStorage.getItem("favorites")

        if(storedFavs) setFavorite(JSON.parse(storedFavs))
    },[])
    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}