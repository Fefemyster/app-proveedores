import { useEffect, useState } from "react";
import type { Proveedor, FormularioDatos } from "../types/Proveedor";
import Swal from "sweetalert2";

const useFormularioProveedor = (
  proveedorEditar: Proveedor | null,
  setProveedorEditar: (e: Proveedor | null) => void,
  agregarActualizarProveedor: (p: Proveedor) => void
) => {
  const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>({
    nombre: "",
    contacto: "",
    direccion: "",
    telefono: "",
    pais: "",
  });

  useEffect(() => {
    if (proveedorEditar) {
      setFormularioDatos({
        nombre: proveedorEditar.nombre,
        contacto: proveedorEditar.contacto,
        direccion: proveedorEditar.direccion,
        telefono: proveedorEditar.telefono,
        pais: proveedorEditar.pais,
      });
    }
  }, [proveedorEditar]);

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    setFormularioDatos((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formularioDatos.nombre.trim() ||
      !formularioDatos.contacto.trim() ||
      !formularioDatos.direccion.trim() ||
      !formularioDatos.pais.trim() ||
      !formularioDatos.telefono
    ) {
      Swal.fire("Debe llenar todos los campos", "", "warning");
      return;
    }

    const proveedor: Proveedor = {
      id: proveedorEditar?.id ?? "",
      nombre: formularioDatos.nombre,
      contacto: formularioDatos.contacto,
      direccion: formularioDatos.direccion,
      telefono: formularioDatos.telefono,
      pais: formularioDatos.pais,
    };

    agregarActualizarProveedor(proveedor);
    setFormularioDatos({
      nombre: "",
      contacto: "",
      direccion: "",
      telefono: "",
      pais: "",
    });
    setProveedorEditar(null);
  };

  const manejarCancelacion = () => {
    setProveedorEditar(null);
    setFormularioDatos({
      nombre: "",
      contacto: "",
      direccion: "",
      telefono: "",
      pais: "",
    });
  };

  return {
    formularioDatos,
    manejarCambio,
    manejarEnvio,
    manejarCancelacion,
  };
};

export default useFormularioProveedor;
