import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { BounceLoader } from "react-spinners"

function AptAddForm() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);

  const [ isLoading, setIsLoading ] = useState(false)

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleImgChange = (e) => setImg(e.target.value)
  const handlePriceChange = (e) => setPricePerDay(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true) // muestra al usuario un spinner mientras se procesa la info

    // ... contactar al Servidor y añadir un nuevo piso.
    try {
      
      const response = await axios.post("https://ironbnb-m3.herokuapp.com/apartments", {
        // el body se pasa como segundo argumento
        title: title,
        img: img,
        pricePerDay: pricePerDay
      })

      // una vez que creamos el piso que hacemos? redireccionamos a /pisos/list
      navigate("/pisos/list")

    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  }

  // if (isLoading === true) {
  //   return (
  //     <div className="spinner-container">
  //       <BounceLoader color="green"/>
  //     </div>
  //   )
  // }

  return (
    <div className="AddApartmentPage">
      <h3>Agrega un nuevo piso!</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <br />

        <label htmlFor="img">Image</label>
        <input
          type="text"
          name="img"
          onChange={handleImgChange}
          value={img}
        />

        <br />

        <label htmlFor="pricePerDay">Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={handlePriceChange}
          value={pricePerDay}
        />

        <br />

        <button type="submit" disabled={isLoading}>Agregar</button>

        {isLoading === true && <BounceLoader color="green"/> }

      </form>
    </div>
  );
}

export default AptAddForm;