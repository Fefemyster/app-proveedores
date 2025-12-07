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
}
