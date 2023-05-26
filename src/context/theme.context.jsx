import { createContext, useState } from "react";

const ThemeContext = createContext() // lo que nos permite mover la data de un lado a otro

function ThemeWrapper(props) {

  // 1. donde declaramos todos los estados, objetos o funciones que queremos transmitir a toda mi App
  const [ isDarkMode, setIsDarkMode ] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // 2. crear un pequeño paquete con todo lo de arriba
  const passedContext = {
    isDarkMode: isDarkMode,
    toggleTheme: toggleTheme
  }

  // 3. retornamos el uso de el Componente Context
  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeWrapper
}