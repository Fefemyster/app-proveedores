import { useState } from "react";
import type { Props, FormularioDatos } from "../types/Proveedor";
import type { Proveedor } from "../types/Proveedor";

const useFormularioProveedor = (
  agregarActualizarProveedor: (p: Proveedor) => void
) => {
  const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>({
    nombre: "",
    contacto: 0,
    direccion: "",
    telefono: 0,
    pais: "",
  });

  return <div>useFormularioProveedor</div>;
};
