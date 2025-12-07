import { useState } from "react";
import type { Proveedor } from "../types/Proveedor";

export const GestorProveedor = () => {
  /*
  const [nombre, setNombre] = useState("");
  const [contacto, setContact] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("")
  */

  const [proveedor, setProveedor] = useState<Proveedor[]>(() => {
    const empleadosGuardados = localStorage.getItem("empleados");
    return empleadosGuardados
      ? (JSON.parse(empleadosGuardados) as Proveedor[])
      : [];
  });

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-6 text-pink-400">
        Gestor de Proveedores
      </h1>
      <div className="flex justify-center gap-6">
        <form>
          <div className="mb-4">
            <label className=" text-gray-700 mb-1 ">Nombre</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className=" text-gray-700 mb-1">Contacto</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="mb-4">
            <label className=" text-gray-700 mb-1">Direccion</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className=" text-gray-700 mb-1">Telefono</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="mb-4">
            <label className=" text-gray-700 mb-1">Pais</label>
            <input type="text" className="w-full border px-3 py-2 rounded " />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-200 cursor-pointer"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
