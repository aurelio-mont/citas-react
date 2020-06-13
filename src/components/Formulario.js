import React, { Fragment, useState } from "react";

const Formulario = () => {
  //Crear State Cita
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

//funcion que seejecuta cada que el usuario escribe
const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    });  
}

//Extraer los valores de las variables
const {mascota, propietario, fecha, hora, sintomas} = cita;

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueno</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueno de la Mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={fecha} />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={hora} />
        <label>Sintomas</label>
  <textarea name="sintomas" className="u-full-width" onChange={actualizarState}>{sintomas}</textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
