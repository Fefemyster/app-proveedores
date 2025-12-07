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
    correo: "",
    direccion: "",
    telefono: "",
    pais: "",
  });

  useEffect(() => {
    if (proveedorEditar) {
      setFormularioDatos({
        nombre: proveedorEditar.nombre,
        correo: proveedorEditar.correo,
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
      !formularioDatos.correo.trim() ||
      !formularioDatos.direccion.trim() ||
      !formularioDatos.pais.trim() ||
      !formularioDatos.telefono
    ) {
      Swal.fire("Debe llenar todos los campos", "", "warning");
      return;
    }

    // ✅ VALIDAR TELÉFONO
    const regexTelefono = /^[0-9]{8,12}$/;
    if (!regexTelefono.test(formularioDatos.telefono)) {
      Swal.fire("Teléfono inválido", "Debe tener 8 a 12 dígitos", "error");
      return;
    }

    // ✅ VALIDAR CORREO
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(formularioDatos.correo)) {
      Swal.fire("Correo inválido", "Ingrese un correo válido", "error");
      return;
    }

    const proveedor: Proveedor = {
      id: proveedorEditar?.id ?? "",
      nombre: formularioDatos.nombre,
      correo: formularioDatos.correo,
      direccion: formularioDatos.direccion,
      telefono: formularioDatos.telefono,
      pais: formularioDatos.pais,
    };

    agregarActualizarProveedor(proveedor);
    setFormularioDatos({
      nombre: "",
      correo: "",
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
      correo: "",
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
