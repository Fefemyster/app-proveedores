import { useProveedor } from "../hook/useProveedor";
import FormularioProveedor from "./FormularioProveedor";
import ListaProveedor from "./ListaProveedor";

const GestorProveedor: React.FC = () => {
  const {
    proveedores,
    proveedorEditar,
    setProveedorEditar,
    agregarActualizarProveedor,
    eliminarProveedor,
  } = useProveedor();
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6 text-gray-800">
        Gestor de Proveedores
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <FormularioProveedor
            agregarActualizarProveedor={agregarActualizarProveedor}
            proveedorEditar={proveedorEditar}
            setProveedorEditar={setProveedorEditar}
          />
        </div>

        <div className="md:col-span-2">
          <ListaProveedor
            proveedores={proveedores}
            setProveedorEditar={setProveedorEditar}
            eliminarProveedor={eliminarProveedor}
          />
        </div>
      </div>
    </>
  );
};
export default GestorProveedor;
