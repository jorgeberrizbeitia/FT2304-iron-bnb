
import { useContext } from "react"
import { ThemeContext } from "../context/theme.context"

function AptDetails(props) {

  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div>

      <h3>{props.piso.title}</h3>
      <img src={props.piso.img} alt="piso" width={300} />
      <p>Precio: {props.piso.pricePerDay}</p>
      <p>Publicado: {new Date(props.piso.createdAt).toDateString()}</p>
      <button className={isDarkMode === true ? "btn-dark" : "btn-light"}> Ver Más Detalles </button>

    </div>
  )
}

export default AptDetails