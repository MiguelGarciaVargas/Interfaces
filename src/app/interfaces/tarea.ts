export interface Tarea { /* tipo necesario para TS para las tareas de las tablas */
  id: number;
  fechaAsignacion: string;
  fechaEntrega: string;
  asignacion: string;
  entregas: number;
  calificacion: number | null;
  estado: string;
}
