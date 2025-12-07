import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import type { Proveedor } from "../types/Proveedor";

export const useProveedor = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>(() => {
    const proveedoresGuardados = localStorage.getItem("proveedores");
    return proveedoresGuardados
      ? (JSON.parse(proveedoresGuardados) as Proveedor[])
      : [];
  });

  const [proveedorEditar, setProveedorEditar] = useState<Proveedor | null>(
    null
  );

  useEffect(() => {
    localStorage.setItem("proveedores", JSON.stringify(proveedores));
  }, [proveedores]);

  const agregarActualizarProveedor = (proveedor: Proveedor): void => {
    if (!proveedor.id) {
      proveedor.id = String(Date.now());
      setProveedores((prev) => [proveedor, ...prev]);
      Swal.fire({
        title: "Proveedor agregado correctamente",
        text: "",
        icon: "success",
      });
    } else {
      setProveedores((prev) =>
        prev.map((p) => (p.id === proveedor.id ? proveedor : p))
      );
      setProveedorEditar(null);
      Swal.fire("Proveedor actualizado correctamente", "", "success");
    }
    console.log(proveedor);
  };

  const eliminarProveedor = (id: string): void => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setProveedores(proveedores.filter((prov) => prov.id !== id));
        Swal.fire("¡Eliminado!", "El Proveedor ha sido eliminado", "success");
      }
    });
  };

  return {
    proveedores,
    proveedorEditar,
    setProveedorEditar,
    agregarActualizarProveedor,
    eliminarProveedor,
  };
};
