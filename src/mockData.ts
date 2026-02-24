export const MOCK_STUDENTS = [
  {
    id: "1",
    name: "Sofía García",
    photo: "https://picsum.photos/seed/sofia/100/100",
    course: "2º Bachillerato A",
    status: "Activo",
    progress: 85,
    email: "sofia.garcia@escuela.com",
    attendance: "98%",
    lastPayment: "Pagado",
    joinDate: "2023-09-01"
  },
  {
    id: "2",
    name: "Mateo Rodríguez",
    photo: "https://picsum.photos/seed/mateo/100/100",
    course: "4º ESO B",
    status: "Activo",
    progress: 72,
    email: "mateo.rod@escuela.com",
    attendance: "92%",
    lastPayment: "Pendiente",
    joinDate: "2023-09-01"
  },
  {
    id: "3",
    name: "Lucía Martínez",
    photo: "https://picsum.photos/seed/lucia/100/100",
    course: "1º Bachillerato C",
    status: "Activo",
    progress: 94,
    email: "lucia.mtz@escuela.com",
    attendance: "100%",
    lastPayment: "Pagado",
    joinDate: "2023-09-01"
  },
  {
    id: "4",
    name: "Alejandro López",
    photo: "https://picsum.photos/seed/ale/100/100",
    course: "3º ESO A",
    status: "Inactivo",
    progress: 45,
    email: "ale.lopez@escuela.com",
    attendance: "65%",
    lastPayment: "Pendiente",
    joinDate: "2023-09-01"
  },
  {
    id: "5",
    name: "Elena Sánchez",
    photo: "https://picsum.photos/seed/elena/100/100",
    course: "2º Bachillerato B",
    status: "Activo",
    progress: 88,
    email: "elena.sanchez@escuela.com",
    attendance: "96%",
    lastPayment: "Pagado",
    joinDate: "2023-09-01"
  }
];

export const MOCK_PAYMENTS = [
  { id: "INV-001", student: "Sofía García", amount: 250, date: "2024-02-01", status: "Pagado" },
  { id: "INV-002", student: "Mateo Rodríguez", amount: 250, date: "2024-02-01", status: "Pendiente" },
  { id: "INV-003", student: "Lucía Martínez", amount: 250, date: "2024-02-01", status: "Pagado" },
  { id: "INV-004", student: "Elena Sánchez", amount: 250, date: "2024-02-01", status: "Pagado" },
  { id: "INV-005", student: "Alejandro López", amount: 250, date: "2024-01-01", status: "Vencido" },
];

export const REVENUE_DATA = [
  { month: "Sep", revenue: 45000 },
  { month: "Oct", revenue: 52000 },
  { month: "Nov", revenue: 48000 },
  { month: "Dic", revenue: 61000 },
  { month: "Ene", revenue: 55000 },
  { month: "Feb", revenue: 67000 },
];

export const ATTENDANCE_DATA = [
  { name: "Presente", value: 92 },
  { name: "Ausente", value: 5 },
  { name: "Justificado", value: 3 },
];

export const MOCK_TEACHERS = [
  { id: "T1", name: "Dr. Roberto Silva", subject: "Matemáticas", email: "roberto.silva@escuela.com", photo: "https://picsum.photos/seed/roberto/100/100", status: "Activo", classes: 4 },
  { id: "T2", name: "Dra. Laura Torres", subject: "Lengua y Literatura", email: "laura.torres@escuela.com", photo: "https://picsum.photos/seed/laura/100/100", status: "Activo", classes: 5 },
  { id: "T3", name: "Prof. Carlos Ruiz", subject: "Inglés", email: "carlos.ruiz@escuela.com", photo: "https://picsum.photos/seed/carlos/100/100", status: "Activo", classes: 3 },
  { id: "T4", name: "Dra. Ana Belén", subject: "Historia", email: "ana.belen@escuela.com", photo: "https://picsum.photos/seed/ana/100/100", status: "Baja", classes: 0 },
  { id: "T5", name: "Prof. Miguel Ángel", subject: "Física y Química", email: "miguel.angel@escuela.com", photo: "https://picsum.photos/seed/miguel/100/100", status: "Activo", classes: 4 },
];

export const MOCK_CLASSES = [
  { id: "C1", name: "Matemáticas II", teacher: "Dr. Roberto Silva", room: "Aula 102", time: "08:00 - 09:30", students: 28 },
  { id: "C2", name: "Literatura Universal", teacher: "Dra. Laura Torres", room: "Aula 204", time: "09:30 - 11:00", students: 24 },
  { id: "C3", name: "Inglés Avanzado", teacher: "Prof. Carlos Ruiz", room: "Lab Idiomas", time: "11:30 - 13:00", students: 18 },
  { id: "C4", name: "Historia de España", teacher: "Dra. Ana Belén", room: "Aula 105", time: "13:00 - 14:30", students: 30 },
  { id: "C5", name: "Física Cuántica", teacher: "Prof. Miguel Ángel", room: "Lab Física", time: "08:00 - 09:30", students: 15 },
];

export const MOCK_DOCS = [
  { id: "D1", name: "Calendario_Escolar_2024.pdf", type: "PDF", size: "1.5 MB", category: "Institucional", date: "2024-01-15" },
  { id: "D2", name: "Reglamento_Interno.docx", type: "DOCX", size: "0.5 MB", category: "Normativa", date: "2023-12-10" },
  { id: "D3", name: "Plan_Emergencias.pdf", type: "PDF", size: "3.2 MB", category: "Seguridad", date: "2024-02-01" },
  { id: "D4", name: "Listado_Libros_Texto.xlsx", type: "XLSX", size: "0.2 MB", category: "Académico", date: "2024-01-20" },
  { id: "D5", name: "Memoria_Anual_2023.pdf", type: "PDF", size: "5.8 MB", category: "Institucional", date: "2024-01-05" },
];

export const MOCK_GRADES = [
  { id: "G1", subject: "Matemáticas II", grade: 8.5, date: "2024-02-15", teacher: "Dr. Roberto Silva" },
  { id: "G2", subject: "Literatura Universal", grade: 7.2, date: "2024-02-10", teacher: "Dra. Laura Torres" },
  { id: "G3", subject: "Inglés Avanzado", grade: 9.4, date: "2024-02-05", teacher: "Prof. Carlos Ruiz" },
  { id: "G4", subject: "Historia de España", grade: 6.8, date: "2024-01-28", teacher: "Dra. Ana Belén" },
];

export const MOCK_SCHEDULE = [
  { day: "Lunes", classes: [{ name: "Matemáticas", time: "08:00", room: "102" }, { name: "Inglés", time: "10:00", room: "Lab" }] },
  { day: "Martes", classes: [{ name: "Historia", time: "09:00", room: "105" }, { name: "Física", time: "11:00", room: "Lab" }] },
  { day: "Miércoles", classes: [{ name: "Literatura", time: "08:00", room: "204" }, { name: "Matemáticas", time: "10:00", room: "102" }] },
  { day: "Jueves", classes: [{ name: "Inglés", time: "09:00", room: "Lab" }, { name: "Historia", time: "11:00", room: "105" }] },
  { day: "Viernes", classes: [{ name: "Física", time: "08:00", room: "Lab" }, { name: "Literatura", time: "10:00", room: "204" }] },
];

export const MOCK_NOTIFICATIONS = [
  { id: "N1", message: "Nueva circular sobre el viaje de fin de curso.", time: "Hace 2 horas" },
  { id: "N2", message: "Recordatorio: Reunión de padres el próximo jueves.", time: "Hace 5 horas" },
  { id: "N3", message: "Se han publicado las notas de Matemáticas II.", time: "Ayer" },
];

export const MOCK_EVENTS = [
  { id: "E1", title: "Examen de Física", date: "25 Feb", time: "08:00" },
  { id: "E2", title: "Entrega Proyecto Historia", date: "28 Feb", time: "23:59" },
  { id: "E3", title: "Torneo de Ajedrez", date: "02 Mar", time: "16:00" },
];
