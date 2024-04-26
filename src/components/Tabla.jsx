import { listadoProductos } from "../constants/listadoProducto";
import TablaFila from "./TablaFila";

const Tabla = () => {
  return (
    <>
      <h2>Tabla de productos</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Foto</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listadoProductos.map((prod) => (
            <>
              <TablaFila prod={prod} key={prod.id} />
            
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
