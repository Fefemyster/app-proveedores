export interface Proveedor {
  id: string;
  nombre: string;
  contacto: number;
  direccion: string;
  telefono: number;
  pais: string;
}

export interface FormularioDatos {
  nombre: string;
  contacto: number;
  direccion: string;
  telefono: number;
  pais: string;
}

export interface Props {
  agregarActualizarProveedor: (e: Proveedor) => void;
}
