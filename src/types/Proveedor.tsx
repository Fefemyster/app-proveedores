export interface Proveedor {
  id: string;
  nombre: string;
  contacto: string;
  direccion: string;
  telefono: string;
  pais: string;
}

export interface FormularioDatos {
  nombre: string;
  contacto: string;
  direccion: string;
  telefono: string;
  pais: string;
}

export interface Props {
  agregarActualizarProveedor: (e: Proveedor) => void;
  proveedorEditar: Proveedor | null;
  setProveedorEditar: (e: Proveedor | null) => void;
}

export interface ListaProveedoresProps {
  proveedores: Proveedor[];
  setProveedorEditar: (Proveedor: Proveedor) => void;
  eliminarProveedor: (id: string) => void;
}
