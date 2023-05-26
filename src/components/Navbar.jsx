import { NavLink } from "react-router-dom"

function Navbar() {

  // NavLink nos van a permitir pasar una funcion de callback a className o a styles que nos da información de si el enlace concuerda con el URL o no

  const activeClass = (navInfo) => {
    console.log(navInfo)
    if (navInfo.isActive === true) {
      return "link-active"
    } else {
      return "link-inactive"
    }
  }

  return (
    <nav>

      <NavLink className={activeClass} to="/">Home</NavLink>
      <NavLink className={activeClass} to="/pisos/list">Lista de Pisos</NavLink>
      <NavLink className={activeClass} to="/pisos/add">Añade Piso</NavLink>

    </nav>
  )
}

export default Navbar