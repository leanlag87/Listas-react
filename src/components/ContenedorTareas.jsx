import React from "react";
import Tareas from "./Tareas";

const ContenedorTareas = ({ tareas, eliminarTarea, editarTarea }) => {
  return (
    <ul>
      {tareas.length === 0 ? (
        <div className="alert alert-primary" role="alert">
          No hay tareas
        </div>
      ) : (
        tareas.map((item) => (
          <Tareas
            key={item.id}
            item={item}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          />
        ))
      )}
    </ul>
  );
};

export default ContenedorTareas;
