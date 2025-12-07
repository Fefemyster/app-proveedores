import useFormularioProveedor from "../hook/useFormularioProveedor";
import type { Props } from "../types/Proveedor";

const FormularioProveedor: React.FC<Props> = ({
  agregarActualizarProveedor,
  proveedorEditar,
  setProveedorEditar,
}) => {
  const { formularioDatos, manejarCambio, manejarEnvio, manejarCancelacion } =
    useFormularioProveedor(
      proveedorEditar,
      setProveedorEditar,
      agregarActualizarProveedor
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        {proveedorEditar ? "Editar Proveedor" : "Agregar Nuevo Proveedor"}
      </h2>

      <form onSubmit={manejarEnvio}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nombre</label>
          <input
            name="nombre"
            value={formularioDatos.nombre}
            onChange={manejarCambio}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Correo</label>
          <input
            name="correo"
            value={formularioDatos.correo}
            onChange={manejarCambio}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Direccion</label>
          <input
            name="direccion"
            value={formularioDatos.direccion}
            onChange={manejarCambio}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Telefono</label>
          <input
            name="telefono"
            value={formularioDatos.telefono}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                manejarCambio(e);
              }
            }}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Pais</label>
          <input
            name="pais"
            value={formularioDatos.pais}
            onChange={manejarCambio}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={manejarCancelacion}
            className="px-4 py-2 rounded bg-gray-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-gray-800 text-white"
          >
            {proveedorEditar ? "Actualizar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioProveedor;
