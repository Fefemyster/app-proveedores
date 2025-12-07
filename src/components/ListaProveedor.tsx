import type { ListaProveedoresProps } from "../types/Proveedor";

const ListaProveedor: React.FC<ListaProveedoresProps> = ({
  proveedores,
  setProveedorEditar,
  eliminarProveedor,
}) => {
  if (!proveedores || proveedores.length === 0) {
    return <p className="text-center text-gray-600">No hay proveedores</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <table className="min-w-full w-full table-auto">
        <thead>
          <tr>
            <th className="text-left p-2 font-medium text-gray-700">Nombre</th>
            <th className="text-left p-2 font-medium text-gray-700">
              Contacto
            </th>
            <th className="text-left p-2 font-medium text-gray-700">
              Direccion
            </th>
            <th className="text-left p-2 font-medium text-gray-700">
              Telefono
            </th>
            <th className="text-left p-2 font-medium text-gray-700">Pais</th>

            <th className="p-2 font-medium text-gray-700">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id} className="border-t hover:gb-gray-50">
              <td className="p-2 align-middle">{proveedor.nombre}</td>
              <td className="p-2 align-middle">{proveedor.contacto}</td>
              <td className="p-2 align-middle">{proveedor.direccion}</td>
              <td className="p-2 align-middle">{proveedor.telefono}</td>
              <td className="p-2 align-middle">{proveedor.pais}</td>
              <td className="p-2 align-middle">
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setProveedorEditar(proveedor)}
                    className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => eliminarProveedor(proveedor.id)}
                    className="px-3 py-1 bg-red-200 hover:bg-red-300 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProveedor;
