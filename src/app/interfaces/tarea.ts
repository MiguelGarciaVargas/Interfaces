export interface Tarea {
  id: number;
  fechaAsignacion: string;
  fechaEntrega: string;
  asignacion: string;
  entregas: number;
  calificacion: number | null;
  estado: string;
}
