import axios from "axios"
import { useEffect, useState } from "react"
import AptDetails from "../components/AptDetails"

// importamos el hook useNavigate que nos permite redireccionar al usuario
import { useNavigate } from "react-router-dom"

import { BounceLoader } from "react-spinners"

import { useContext } from "react"
import { ThemeContext } from "../context/theme.context"


function AptList() {

  const { isDarkMode } = useContext(ThemeContext)

  const navigate = useNavigate()

  // 1. crear el estado donde estará la data externa
  const [ pisosList, setPisosList ] = useState()
  const [ isLoading, setIsLoading ] = useState(true)

  // 2. la funcion que hace la llamada externa
  const getData = async () => {

    // reiniciar el loading mientras recibo la data
    setIsLoading(true)

    // 5. hacemos la llamada con axios y ponemos la data en el estado

    try {
      
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response)
      // la respuesta de axios siempre vendrá dentro de .data
      setPisosList(response.data)
      setIsLoading(false) // desactiva el loading y muestra la data

    } catch (error) {
      console.log(error)
      // queremos redirigir al usuario a /error
      navigate("/error")
    }
  }

  // 3. useEffect para ejecutar getData cuando el component se monta correctamente
  useEffect(() => {
    getData()
  }, [])

  // 4. clausula de guardia para mostrar un loading mientras estamos recibiendo la data
  if (isLoading === true) {
    return (
      <div className="spinner-container">
        <BounceLoader color="green"/>
      </div>
    )
  }

  return (
    <div>

      <button className={isDarkMode === true ? "btn-dark" : "btn-light"} onClick={getData}>Refrescar</button>
      
      {pisosList.map((eachPiso) => {
        return(
          <AptDetails key={eachPiso._id} piso={eachPiso}/>
        )
      })}

    </div>
  )
}

export default AptList