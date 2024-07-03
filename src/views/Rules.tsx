import { useNavigate } from "react-router-dom"

export default function Rules(){
 const navigate = useNavigate()
    return(
        <>
        <p>BLALBLALLLblbllflfdll</p>
        <button onClick={()=> navigate("/game")}>Commencer</button>
        </>
    )
}