import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ContenedorTareas from "./components/ContenedorTareas";
import Formulario from "./components/Formulario";

const initialTarea = [
  {
    id: 1,
    title: "tarea #1",
    description: "description #1",
    state: false,
    priority: false,
  },
  {
    id: 2,
    title: "tarea #2",
    description: "description #2",
    state: false,
    priority: false,
  },
  {
    id: 3,
    title: "tarea #3",
    description: "description #3",
    state: true,
    priority: true,
  },
];

function App() {
  const [tareas, setTarea] = useState(initialTarea);

  const agregarTarea = (tarea) => {
    setTarea([...tareas, tarea]);
  };

  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTarea(tareasFiltradas);
  };

  const editarTarea = (id) => {
    const tareaEditada = tareas.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });
    setTarea(tareaEditada);
  };

  return (
    <div className="container my-2">
      <h2 className="text-primary">Formulario</h2>
      <Formulario agregarTarea={agregarTarea} />
      <h2 className="text-primary text-center">Tareas</h2>
      <ContenedorTareas
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        tareas={tareas}
      />
    </div>
  );
}

export default App;
