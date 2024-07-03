import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Game() {

    const navigate = useNavigate()
    const firstArray = [4, 5, 6, 7, 12, 13, 14, 15]
    const secondArray = [8, 9, 10, 11, 12, 13, 14, 15]
    const thirdArray = [1, 3, 5, 7, 9, 11, 13, 15]
    const lastArray = [2, 3, 6, 7, 10, 11, 14, 15]

    let [result, setResult] = useState<number>(0)
    const [arrayNumber, setArrayNumber] = useState<number>(0)

    const handleButtonClick = (answer: string, nextArrayNumber: number, resultToAdd: number) => {
        if (answer === "non") {
            setArrayNumber(nextArrayNumber)
        } else {
            setResult(result + resultToAdd)
            setArrayNumber(nextArrayNumber)
        }
    }

    const changeView = (route:string)=>{
        navigate(route)
    }

    const renderArray = () => {
        switch (arrayNumber) {
            case 0:
                return (
                    <>
                        <p>Array Un</p>
                        <ul>
                            {firstArray.map((num, index) => (
                                <li key={index}>{num}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleButtonClick("oui", 1, 4)}>Oui</button>
                        <button onClick={() => handleButtonClick("non", 1, 0)}>Non</button>
                    </>
                )
            case 1:
                return (
                    <>
                        <p>Array Deux</p>
                        <ul>
                            {secondArray.map((num, index) => (
                                <li key={index}>{num}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleButtonClick("oui", 2, 8)}>Oui</button>
                        <button onClick={() => handleButtonClick("non", 2, 0)}>Non</button>
                    </>
                )
            case 2:
                return (
                    <>
                        <p>Array Trois</p>
                        <ul>
                            {thirdArray.map((num, index) => (
                                <li key={index}>{num}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleButtonClick("oui", 3, 1)}>Oui</button>
                        <button onClick={() => handleButtonClick("non", 3, 0)}>Non</button>
                    </>
                )
            case 3:
                return (
                    <>
                        <p>Array Quatre</p>
                        <ul>
                            {lastArray.map((num, index) => (
                                <li key={index}>{num}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleButtonClick("oui", 4, 2)}>Oui</button>
                        <button onClick={() => handleButtonClick("non", 4, 0)}>Non</button>
                    </>
                )
            case 4:
                return (
                    <>
                        <p>Votre chiffre est </p>
                        <p>{result}</p>
                        <button onClick={()=>changeView("/rules")}>Rejouer</button>
                        <button onClick={()=>changeView("/")}>Menu</button>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <>
            <p>Votre nombre est dans cette liste?</p>
            {renderArray()}
        </>
    )
}
