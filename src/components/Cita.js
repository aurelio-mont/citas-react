import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  //Extraer los valores de las variables
  const { mascota, propietario, fecha, hora, sintomas, id } = cita;
  return (
    <div className="cita">
      <p>
        Mascota <span>{mascota}</span>
      </p>
      <p>
        Dueno <span>{propietario}</span>
      </p>
      <p>
        Fecha <span>{fecha}</span>
      </p>
      <p>
        Hora <span>{hora}</span>
      </p>
      <p>
        Sintomas <span>{sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={ () => eliminarCita(id) }
      >Eliminar &times;</button>
    </div>
  );
};

export default Cita;
