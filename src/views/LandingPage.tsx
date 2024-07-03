import { useNavigate } from "react-router-dom"

export default function LandingPage(){

    const navigate = useNavigate()

    const changeView = (route:string) =>{
        navigate(route)
    }
    return(
        <>
        <button onClick={()=>{changeView('/rules')}}>Debut du tour</button>
        <button onClick={()=>{changeView('/params')}}>Reglages</button>
    
          </>
    )
}