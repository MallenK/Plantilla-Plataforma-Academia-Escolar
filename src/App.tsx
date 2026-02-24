import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard, 
  FileText, 
  Settings,
  LogOut,
  ChevronRight,
  Search,
  Bell,
  Plus,
  Filter,
  ArrowUpRight,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Clock,
  MoreVertical
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { cn } from './lib/utils';
import { 
  MOCK_STUDENTS, 
  MOCK_PAYMENTS, 
  REVENUE_DATA, 
  ATTENDANCE_DATA, 
  MOCK_TEACHERS, 
  MOCK_CLASSES, 
  MOCK_DOCS,
  MOCK_GRADES,
  MOCK_SCHEDULE,
  MOCK_NOTIFICATIONS,
  MOCK_EVENTS
} from './mockData';

// --- Components ---

const Button = ({ className, variant = 'primary', size = 'md', ...props }: any) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-slate-800',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    accent: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50',
        variants[variant as keyof typeof variants],
        sizes[size as keyof typeof sizes],
        className
      )}
      {...props}
    />
  );
};

const Card = ({ children, className, noPadding = false }: any) => (
  <div className={cn('bg-white rounded-xl border border-slate-200 card-shadow', !noPadding && 'p-6', className)}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }: any) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-rose-100 text-rose-700',
  };
  return (
    <span className={cn('px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider', variants[variant as keyof typeof variants])}>
      {children}
    </span>
  );
};

const Toast = ({ message, type = 'success', onClose }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className={cn(
      "fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border",
      type === 'success' ? "bg-emerald-600 border-emerald-500 text-white" : "bg-brand-primary border-slate-700 text-white"
    )}
  >
    {type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
    <span className="text-sm font-medium">{message}</span>
    <button onClick={onClose} className="ml-2 hover:opacity-70">
      <Plus className="w-4 h-4 rotate-45" />
    </button>
  </motion.div>
);

const Modal = ({ isOpen, onClose, title, children }: any) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-[120] overflow-hidden"
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-brand-primary">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Plus className="w-6 h-6 rotate-45 text-slate-400" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

// --- Views ---

const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-brand-primary">EduControl</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-brand-primary">Producto</a>
              <a href="#" className="hover:text-brand-primary">Soluciones</a>
              <a href="#" className="hover:text-brand-primary">Precios</a>
              <a href="#" className="hover:text-brand-primary">Recursos</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onEnter}>Iniciar Sesión</Button>
              <Button variant="primary" onClick={onEnter}>Ver Plataforma</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="default">Nueva Versión 2.0 Disponible</Badge>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-brand-primary leading-[1.1]">
              La Plataforma que Centraliza <span className="text-blue-600">Toda tu Escuela</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Gestiona alumnos, profesores, pagos y documentación desde un único panel intuitivo. Diseñado para directivos que buscan control y eficiencia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={onEnter}>Ver Plataforma Demo</Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">Solicitar Demo Personalizada</Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Mockup */}
        <motion.div 
          className="mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/dashboard/1600/900" 
              alt="Dashboard Mockup" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary">+350</div>
              <div className="text-sm text-slate-500 mt-1">Alumnos Gestionados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">98%</div>
              <div className="text-sm text-slate-500 mt-1">Asistencia Media</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">-60%</div>
              <div className="text-sm text-slate-500 mt-1">Tiempo Administrativo</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">24/7</div>
              <div className="text-sm text-slate-500 mt-1">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary">Todo lo que necesitas en un solo lugar</h2>
            <p className="text-slate-600 mt-4">Herramientas potentes diseñadas para la educación moderna.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Gestión de Alumnos', desc: 'Expedientes completos, seguimiento de progreso y comunicación directa.' },
              { icon: BookOpen, title: 'Control Académico', desc: 'Gestión de horarios, asignaturas y evaluaciones automatizadas.' },
              { icon: Bell, title: 'Comunicación Interna', desc: 'Notificaciones push, emails y circulares para toda la comunidad.' },
              { icon: CreditCard, title: 'Facturación y Pagos', desc: 'Control de recibos, pasarela de pagos y reportes financieros.' },
              { icon: LayoutDashboard, title: 'Panel Directivo', desc: 'Métricas en tiempo real para la toma de decisiones estratégicas.' },
              { icon: FileText, title: 'Documentación', desc: 'Almacenamiento seguro de expedientes y certificados oficiales.' },
            ].map((item, i) => (
              <Card key={i} className="card-shadow-hover border-none bg-slate-50/50">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">EduControl</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Liderando la transformación digital de las instituciones educativas en todo el mundo.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Producto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">Características</a></li>
              <li><a href="#" className="hover:text-white">Seguridad</a></li>
              <li><a href="#" className="hover:text-white">Integraciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Compañía</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm flex justify-between">
          <p>© 2024 EduControl. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const DashboardView = ({ onAction, onOpenModal, role }: any) => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  if (role === 'student') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-brand-primary">Mi Panel de Estudiante</h1>
            <p className="text-slate-500 text-sm">Bienvenido de nuevo, Alejandro.</p>
          </div>
          <Button variant="accent" size="sm" onClick={() => onOpenModal('message')}>
            Contactar Tutor
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Promedio Actual</p>
              <h3 className="text-2xl font-bold text-brand-primary">8.4</h3>
            </div>
          </Card>
          <Card className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Asistencia</p>
              <h3 className="text-2xl font-bold text-brand-primary">96%</h3>
            </div>
          </Card>
          <Card className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
              <CreditCard className="text-rose-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pagos Pendientes</p>
              <h3 className="text-2xl font-bold text-brand-primary">1</h3>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-bold text-brand-primary mb-4">Mis Calificaciones Recientes</h3>
            <div className="space-y-4">
              {MOCK_GRADES.map((g) => (
                <div key={g.id} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div>
                    <p className="text-sm font-bold text-brand-primary">{g.subject}</p>
                    <p className="text-xs text-slate-500">{g.teacher}</p>
                  </div>
                  <Badge variant={g.grade >= 8 ? 'success' : g.grade >= 5 ? 'warning' : 'danger'}>
                    {g.grade}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-bold text-brand-primary mb-4">Próximas Clases</h3>
            <div className="space-y-4">
              {MOCK_SCHEDULE[0].classes.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-blue-600 shadow-sm">
                    {c.time}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-primary">{c.name}</p>
                    <p className="text-xs text-slate-500">Aula {c.room}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (role === 'teacher') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-brand-primary">Panel del Profesor</h1>
            <p className="text-slate-500 text-sm">Hola, Dr. Roberto Silva. Tienes 2 clases hoy.</p>
          </div>
          <Button variant="accent" size="sm" onClick={() => onOpenModal('class')}>
            <Plus className="w-4 h-4 mr-2" />
            Nueva Actividad
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Users className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Alumnos</p>
              <h3 className="text-2xl font-bold text-brand-primary">124</h3>
            </div>
          </Card>
          <Card className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <BookOpen className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Clases Semanales</p>
              <h3 className="text-2xl font-bold text-brand-primary">18</h3>
            </div>
          </Card>
          <Card className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <Clock className="text-amber-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Horas Lectivas</p>
              <h3 className="text-2xl font-bold text-brand-primary">24h</h3>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-bold text-brand-primary mb-4">Mis Clases de Hoy</h3>
            <div className="space-y-4">
              {MOCK_CLASSES.slice(0, 2).map((cls) => (
                <div key={cls.id} className="p-4 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-brand-primary">{cls.name}</h4>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{cls.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {cls.students} alumnos</span>
                    <span className="flex items-center gap-1"><Badge variant="default">{cls.room}</Badge></span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="secondary" size="sm" className="w-full" onClick={() => onAction('Abriendo lista de asistencia...')}>Asistencia</Button>
                    <Button variant="secondary" size="sm" className="w-full" onClick={() => onAction('Abriendo registro de notas...')}>Calificar</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-bold text-brand-primary mb-4">Notificaciones Académicas</h3>
            <div className="space-y-4">
              {MOCK_NOTIFICATIONS.slice(0, 3).map((notif) => (
                <div key={notif.id} className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                    <Bell className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">{notif.message}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Resumen General</h1>
          <p className="text-slate-500 text-sm">Bienvenido de nuevo, Administrador.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm" onClick={() => onAction('Filtrando por últimos 30 días...')}>
            <Calendar className="w-4 h-4 mr-2" />
            Últimos 30 días
          </Button>
          <Button variant="accent" size="sm" onClick={() => onOpenModal('student')}>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Registro
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Alumnos Activos', value: '342', trend: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Ingresos Mensuales', value: '€67,400', trend: '+8%', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Asistencia Media', value: '94.2%', trend: '-2%', icon: CheckCircle2, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Rendimiento', value: '8.4', trend: '+0.3', icon: GraduationCap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ].map((kpi, i) => (
          <Card key={i} className="flex items-center gap-4">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', kpi.bg)}>
              <kpi.icon className={cn('w-6 h-6', kpi.color)} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{kpi.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-brand-primary">{kpi.value}</span>
                <span className={cn('text-xs font-medium', kpi.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600')}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-brand-primary">Ingresos Mensuales</h3>
            <TrendingUp className="w-5 h-5 text-slate-400" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Attendance Chart */}
        <Card>
          <h3 className="font-bold text-brand-primary mb-6">Estado de Asistencia</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ATTENDANCE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ATTENDANCE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3">
            {ATTENDANCE_DATA.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-bold text-brand-primary">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card>
          <h3 className="font-bold text-brand-primary mb-6">Últimas Notificaciones</h3>
          <div className="space-y-4">
            {[
              { title: 'Pago recibido', desc: 'Sofía García ha completado el pago de Febrero.', time: 'Hace 5 min', icon: CheckCircle2, color: 'text-emerald-500' },
              { title: 'Nueva inscripción', desc: 'Mateo Rodríguez se ha unido a 4º ESO B.', time: 'Hace 2 horas', icon: Plus, color: 'text-blue-500' },
              { title: 'Alerta de asistencia', desc: 'Alejandro López ha faltado 3 días seguidos.', time: 'Hace 4 horas', icon: Clock, color: 'text-rose-500' },
            ].map((notif, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div className={cn('w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm')}>
                  <notif.icon className={cn('w-5 h-5', notif.color)} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-brand-primary">{notif.title}</h4>
                    <span className="text-[10px] text-slate-400 font-medium uppercase">{notif.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{notif.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4 text-xs">Ver todas las notificaciones</Button>
        </Card>

        {/* Events */}
        <Card>
          <h3 className="font-bold text-brand-primary mb-6">Próximos Eventos</h3>
          <div className="space-y-4">
            {[
              { date: '25 Feb', title: 'Reunión de Padres', time: '17:30 - 19:00', type: 'Reunión' },
              { date: '28 Feb', title: 'Examen Global Matemáticas', time: '09:00 - 11:00', type: 'Académico' },
              { date: '02 Mar', title: 'Excursión Museo de Ciencias', time: 'Todo el día', type: 'Actividad' },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-4 p-3 border border-slate-100 rounded-xl">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{event.date.split(' ')[1]}</span>
                  <span className="text-lg font-bold text-brand-primary leading-none">{event.date.split(' ')[0]}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-brand-primary">{event.title}</h4>
                  <p className="text-xs text-slate-500">{event.time}</p>
                </div>
                <Badge>{event.type}</Badge>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4 text-xs">Ver calendario completo</Button>
        </Card>
      </div>
    </div>
  );
};

const StudentsView = ({ onSelectStudent, onAction, onOpenModal }: any) => {
  const [search, setSearch] = React.useState('');
  
  const filteredStudents = MOCK_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Gestión de Alumnos</h1>
          <p className="text-slate-500 text-sm">Visualiza y gestiona el expediente de todos los estudiantes.</p>
        </div>
        <Button variant="accent" onClick={() => onOpenModal('student')}>
          <Plus className="w-4 h-4 mr-2" />
          Añadir Alumno
        </Button>
      </div>

      <Card noPadding>
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por nombre o curso..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="secondary" size="sm" className="flex-1 sm:flex-none" onClick={() => onAction('Abriendo filtros avanzados...')}>
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="secondary" size="sm" className="flex-1 sm:flex-none" onClick={() => onAction('Exportando lista de alumnos a Excel...')}>
              Exportar
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="px-6 py-4">Alumno</th>
                <th className="px-6 py-4">Curso</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Progreso</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={student.photo} alt={student.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                      <div>
                        <p className="text-sm font-bold text-brand-primary">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{student.course}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={student.status === 'Activo' ? 'success' : 'danger'}>
                      {student.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-slate-400">{student.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={cn('h-full rounded-full transition-all duration-1000', student.progress > 80 ? 'bg-emerald-500' : student.progress > 50 ? 'bg-blue-500' : 'bg-rose-500')} 
                          style={{ width: `${student.progress}%` }} 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="secondary" size="sm" onClick={() => onSelectStudent(student)}>
                      Ver Perfil
                    </Button>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic text-sm">
                    No se encontraron alumnos que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
          <p>Mostrando {filteredStudents.length} de 342 alumnos</p>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={() => onAction('Cargando página anterior...')}>Anterior</Button>
            <Button variant="secondary" size="sm" onClick={() => onAction('Cargando página siguiente...')}>Siguiente</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ProfileView = ({ student, onBack, onAction }: any) => {
  if (!student) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
          Volver
        </Button>
        <h1 className="text-2xl font-bold text-brand-primary">Perfil del Alumno</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column: Info */}
        <div className="space-y-6">
          <Card className="text-center">
            <div className="relative inline-block">
              <img src={student.photo} alt={student.name} className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg" referrerPolicy="no-referrer" />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-brand-primary">{student.name}</h2>
            <p className="text-slate-500 text-sm">{student.course}</p>
            <div className="mt-6 flex justify-center gap-2">
              <Button variant="accent" size="sm" onClick={() => onAction('Abriendo editor de perfil...')}>Editar Perfil</Button>
              <Button variant="secondary" size="sm" onClick={() => onAction(`Enviando mensaje a ${student.name.split(' ')[0]}...`)}>Mensaje</Button>
            </div>
          </Card>

          <Card>
            <h3 className="font-bold text-brand-primary mb-4">Datos Personales</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Email</span>
                <span className="font-medium text-brand-primary">{student.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fecha Ingreso</span>
                <span className="font-medium text-brand-primary">{student.joinDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Asistencia</span>
                <span className="font-medium text-emerald-600">{student.attendance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estado Pago</span>
                <Badge variant={student.lastPayment === 'Pagado' ? 'success' : 'warning'}>
                  {student.lastPayment}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-bold text-brand-primary mb-6">Progreso Académico</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { subject: 'Mat', score: 8.5 },
                    { subject: 'Len', score: 7.2 },
                    { subject: 'Ing', score: 9.4 },
                    { subject: 'His', score: 6.8 },
                    { subject: 'Fis', score: 8.0 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold text-brand-primary mb-6">Documentos Subidos</h3>
              <div className="space-y-3">
                {[
                  { name: 'DNI_Frontal.pdf', size: '1.2 MB', date: '12/09/23' },
                  { name: 'Certificado_Medico.pdf', size: '0.8 MB', date: '15/09/23' },
                  { name: 'Notas_Anterior.pdf', size: '2.4 MB', date: '20/09/23' },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg group cursor-pointer hover:bg-slate-100 transition-colors">
                    <FileText className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-brand-primary">{doc.name}</p>
                      <p className="text-[10px] text-slate-500">{doc.size} • {doc.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="w-full mt-4 text-xs">Añadir Documento</Button>
            </Card>
          </div>

          <Card>
            <h3 className="font-bold text-brand-primary mb-6">Historial de Pagos</h3>
            <div className="space-y-4">
              {MOCK_PAYMENTS.filter(p => p.student === student.name).map((payment, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-primary">Mensualidad Febrero 2024</p>
                      <p className="text-xs text-slate-500">{payment.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-brand-primary">€{payment.amount}</p>
                    <Badge variant={payment.status === 'Pagado' ? 'success' : 'warning'}>{payment.status}</Badge>
                  </div>
                </div>
              ))}
              {MOCK_PAYMENTS.filter(p => p.student === student.name).length === 0 && (
                <p className="text-center text-slate-400 py-8 text-sm italic">No hay pagos registrados recientemente.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PaymentsView = ({ onAction, onOpenModal }: any) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Facturación y Pagos</h1>
          <p className="text-slate-500 text-sm">Control financiero y seguimiento de cobros.</p>
        </div>
        <Button variant="accent" onClick={() => onOpenModal('invoice')}>
          <Plus className="w-4 h-4 mr-2" />
          Nueva Factura
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-brand-primary text-white border-none">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Recaudado (Mes)</p>
          <h2 className="text-3xl font-bold mt-2">€67,400</h2>
          <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5% vs mes anterior</span>
          </div>
        </Card>
        <Card>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Pendiente de Cobro</p>
          <h2 className="text-3xl font-bold mt-2 text-brand-primary">€12,250</h2>
          <div className="mt-4 flex items-center gap-2 text-rose-500 text-xs">
            <Clock className="w-4 h-4" />
            <span>15 facturas vencidas</span>
          </div>
        </Card>
        <Card>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Tasa de Morosidad</p>
          <h2 className="text-3xl font-bold mt-2 text-brand-primary">3.2%</h2>
          <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs">
            <CheckCircle2 className="w-4 h-4" />
            <span>-1.5% este trimestre</span>
          </div>
        </Card>
      </div>

      <Card noPadding>
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-brand-primary">Últimas Transacciones</h3>
          <Button variant="secondary" size="sm">Ver Todo</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="px-6 py-4">ID Factura</th>
                <th className="px-6 py-4">Alumno</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Importe</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PAYMENTS.map((payment) => (
                <tr key={payment.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">{payment.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-primary">{payment.student}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{payment.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-primary">€{payment.amount}</td>
                  <td className="px-6 py-4">
                    <Badge variant={payment.status === 'Pagado' ? 'success' : payment.status === 'Pendiente' ? 'warning' : 'danger'}>
                      {payment.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const TeachersView = ({ onAction, onOpenModal }: any) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Gestión de Profesores</h1>
          <p className="text-slate-500 text-sm">Administra el cuerpo docente y sus asignaciones.</p>
        </div>
        <Button variant="accent" onClick={() => onOpenModal('teacher')}>
          <Plus className="w-4 h-4 mr-2" />
          Añadir Profesor
        </Button>
      </div>

      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="px-6 py-4">Profesor</th>
                <th className="px-6 py-4">Especialidad</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Clases</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_TEACHERS.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={teacher.photo} alt={teacher.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <p className="text-sm font-bold text-brand-primary">{teacher.name}</p>
                        <p className="text-xs text-slate-500">{teacher.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{teacher.subject}</td>
                  <td className="px-6 py-4">
                    <Badge variant={teacher.status === 'Activo' ? 'success' : 'danger'}>{teacher.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{teacher.classes} asignadas</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="secondary" size="sm" onClick={() => onAction(`Gestionando perfil de ${teacher.name}...`)}>Gestionar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const ClassesView = ({ onAction, onOpenModal }: any) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Control de Clases</h1>
          <p className="text-slate-500 text-sm">Horarios y asignación de aulas en tiempo real.</p>
        </div>
        <Button variant="accent" onClick={() => onOpenModal('class')}>
          <Plus className="w-4 h-4 mr-2" />
          Nueva Clase
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CLASSES.map((cls) => (
          <Card key={cls.id} className="card-shadow-hover">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="default">{cls.room}</Badge>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{cls.time}</span>
            </div>
            <h3 className="text-lg font-bold text-brand-primary mb-1">{cls.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{cls.teacher}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-medium text-slate-600">{cls.students} alumnos</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => onAction(`Viendo detalles de la clase: ${cls.name}`)}>Detalles</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const DocsView = ({ onAction, onOpenModal }: any) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Documentación Institucional</h1>
          <p className="text-slate-500 text-sm">Repositorio centralizado de archivos y normativas.</p>
        </div>
        <Button variant="accent" onClick={() => onOpenModal('upload')}>
          <Plus className="w-4 h-4 mr-2" />
          Subir Archivo
        </Button>
      </div>

      <Card noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="px-6 py-4">Nombre del Archivo</th>
                <th className="px-6 py-4">Categoría</th>
                <th className="px-6 py-4">Tamaño</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_DOCS.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <span className="text-sm font-bold text-brand-primary">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="default">{doc.category}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{doc.size}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{doc.date}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" onClick={() => onAction(`Descargando ${doc.name}...`)}>Descargar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const SettingsView = ({ onAction }: any) => {
  const [toggles, setToggles] = React.useState([true, true, false]);

  const handleToggle = (i: number) => {
    const newToggles = [...toggles];
    newToggles[i] = !newToggles[i];
    setToggles(newToggles);
    onAction(`Preferencia actualizada: ${newToggles[i] ? 'Activada' : 'Desactivada'}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-primary">Configuración del Sistema</h1>
        <p className="text-slate-500 text-sm">Personaliza la plataforma y gestiona permisos.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="font-bold text-brand-primary mb-6">Información de la Institución</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Nombre de la Escuela</label>
                <input type="text" defaultValue="Escuela Internacional EduControl" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Email de Contacto</label>
                <input type="email" defaultValue="info@escuela.com" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Dirección</label>
                <input type="text" defaultValue="Calle Principal 123, Madrid, España" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              </div>
            </div>
            <Button className="mt-6" onClick={() => onAction('Cambios guardados correctamente.')}>Guardar Cambios</Button>
          </Card>

          <Card>
            <h3 className="font-bold text-brand-primary mb-6">Preferencias de Notificaciones</h3>
            <div className="space-y-4">
              {[
                { label: 'Alertas de Asistencia', desc: 'Notificar cuando un alumno falta más de 3 días.' },
                { label: 'Confirmaciones de Pago', desc: 'Enviar recibo automático al completar un pago.' },
                { label: 'Recordatorios de Eventos', desc: 'Avisar 24h antes de una reunión programada.' },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-bold text-brand-primary">{pref.label}</p>
                    <p className="text-xs text-slate-500">{pref.desc}</p>
                  </div>
                  <div 
                    onClick={() => handleToggle(i)}
                    className={cn(
                      "w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-200",
                      toggles[i] ? "bg-blue-600" : "bg-slate-200"
                    )}
                  >
                    <motion.div 
                      animate={{ x: toggles[i] ? 20 : 2 }}
                      className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="font-bold text-brand-primary mb-4">Seguridad</h3>
            <div className="space-y-4">
              <Button variant="secondary" className="w-full justify-start" onClick={() => onAction('Abriendo cambio de contraseña...')}>
                <Settings className="w-4 h-4 mr-2" />
                Cambiar Contraseña
              </Button>
              <Button variant="secondary" className="w-full justify-start" onClick={() => onAction('Gestionando roles de usuario...')}>
                <Users className="w-4 h-4 mr-2" />
                Gestionar Roles
              </Button>
              <Button variant="secondary" className="w-full justify-start text-rose-600" onClick={() => onAction('Sesiones cerradas en otros dispositivos.')}>
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar todas las sesiones
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// --- Main App Layout ---

export default function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [selectedStudent, setSelectedStudent] = React.useState<any>(null);
  const [toasts, setToasts] = React.useState<any[]>([]);
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [userRole, setUserRole] = React.useState<'admin' | 'teacher' | 'student'>('admin');

  const addToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'teacher', 'student'] },
    { id: 'students', label: 'Alumnos', icon: Users, roles: ['admin', 'teacher'] },
    { id: 'teachers', label: 'Profesores', icon: GraduationCap, roles: ['admin'] },
    { id: 'classes', label: 'Clases', icon: BookOpen, roles: ['admin', 'teacher', 'student'] },
    { id: 'payments', label: 'Pagos', icon: CreditCard, roles: ['admin', 'student'] },
    { id: 'docs', label: 'Documentación', icon: FileText, roles: ['admin', 'teacher', 'student'] },
    { id: 'settings', label: 'Ajustes', icon: Settings, roles: ['admin'] },
  ];

  const filteredSidebarItems = sidebarItems.filter(item => item.roles.includes(userRole));

  const renderContent = () => {
    if (selectedStudent) {
      return <ProfileView student={selectedStudent} onBack={() => setSelectedStudent(null)} onAction={addToast} />;
    }

    switch (activeTab) {
      case 'dashboard': return <DashboardView onAction={addToast} onOpenModal={setActiveModal} role={userRole} />;
      case 'students': return <StudentsView onSelectStudent={setSelectedStudent} onAction={addToast} onOpenModal={setActiveModal} />;
      case 'teachers': return <TeachersView onAction={addToast} onOpenModal={setActiveModal} />;
      case 'classes': return <ClassesView onAction={addToast} onOpenModal={setActiveModal} />;
      case 'payments': return <PaymentsView onAction={addToast} onOpenModal={setActiveModal} />;
      case 'docs': return <DocsView onAction={addToast} onOpenModal={setActiveModal} />;
      case 'settings': return <SettingsView onAction={addToast} />;
      default: return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold">Vista en Desarrollo</h2>
          <p className="text-sm">Esta sección de la demo visual estará disponible pronto.</p>
        </div>
      );
    }
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'student':
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); addToast('Alumno creado correctamente'); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Nombre Completo</label>
                <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Ej: Juan Pérez" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                <input required type="email" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="juan@email.com" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Curso</label>
                <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                  <option>1º Bachillerato A</option>
                  <option>2º Bachillerato B</option>
                  <option>3º ESO C</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Fecha Nacimiento</label>
                <input type="date" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              </div>
            </div>
            <Button className="w-full mt-4">Registrar Alumno</Button>
          </form>
        );
      case 'teacher':
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); addToast('Profesor añadido correctamente'); }}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Nombre del Profesor</label>
              <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Ej: Dr. Roberto Silva" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Especialidad</label>
              <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Ej: Matemáticas Avanzadas" />
            </div>
            <Button className="w-full mt-4">Añadir Profesor</Button>
          </form>
        );
      case 'invoice':
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); addToast('Factura generada y enviada'); }}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Seleccionar Alumno</label>
              <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                {MOCK_STUDENTS.map(s => <option key={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Monto (€)</label>
                <input required type="number" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="150.00" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Concepto</label>
                <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Matrícula Marzo" />
              </div>
            </div>
            <Button className="w-full mt-4">Generar Factura</Button>
          </form>
        );
      case 'upload':
        return (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm font-bold text-brand-primary">Haz clic o arrastra un archivo</p>
              <p className="text-xs text-slate-500 mt-1">PDF, DOCX, XLSX hasta 10MB</p>
            </div>
            <Button className="w-full" onClick={() => { setActiveModal(null); addToast('Archivo subido correctamente'); }}>Confirmar Subida</Button>
          </div>
        );
      case 'message':
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); addToast('Mensaje enviado correctamente'); }}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Asunto</label>
              <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Consulta sobre..." />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Mensaje</label>
              <textarea required rows={4} className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm resize-none" placeholder="Escribe tu mensaje aquí..." />
            </div>
            <Button className="w-full mt-4">Enviar Mensaje</Button>
          </form>
        );
      case 'class':
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); addToast('Clase programada correctamente'); }}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Nombre de la Clase</label>
              <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Ej: Física Cuántica" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Aula</label>
                <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Aula 101" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Horario</label>
                <input required type="text" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="08:00 - 10:00" />
              </div>
            </div>
            <Button className="w-full mt-4">Programar Clase</Button>
          </form>
        );
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast 
            key={toast.id} 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} 
          />
        ))}
      </AnimatePresence>

      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        title={
          activeModal === 'student' ? 'Nuevo Alumno' :
          activeModal === 'teacher' ? 'Añadir Profesor' :
          activeModal === 'invoice' ? 'Nueva Factura' :
          activeModal === 'upload' ? 'Subir Documento' :
          activeModal === 'message' ? 'Enviar Mensaje' :
          activeModal === 'class' ? 'Programar Clase' : ''
        }
      >
        {renderModalContent()}
      </Modal>

      {/* Sidebar */}
      <aside className="w-64 bg-brand-primary text-white flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">EduControl</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {filteredSidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSelectedStudent(null);
              }}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group',
                activeTab === item.id && !selectedStudent
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon className={cn('w-5 h-5', activeTab === item.id && !selectedStudent ? 'text-white' : 'text-slate-500 group-hover:text-slate-300')} />
              {item.label}
              {item.id === 'payments' && (
                <span className="ml-auto bg-rose-500 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold">3</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5 space-y-2">
          <div className="px-3 py-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Cambiar Rol (Demo)</p>
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              {(['admin', 'teacher', 'student'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setUserRole(r);
                    setActiveTab('dashboard');
                    setSelectedStudent(null);
                    addToast(`Cambiado a rol: ${r.toUpperCase()}`, 'info');
                  }}
                  className={cn(
                    "flex-1 text-[9px] font-bold py-1 rounded transition-all",
                    userRole === r ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  {r.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <button 
            onClick={() => addToast('Cerrando sesión...', 'info')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96 hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar en la plataforma..." 
                onKeyDown={(e) => e.key === 'Enter' && addToast(`Buscando: "${(e.target as HTMLInputElement).value}"`)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => addToast('No tienes notificaciones pendientes.')}
              className="relative p-2 text-slate-400 hover:text-brand-primary transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => addToast(`Perfil de ${userRole}`)}>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-brand-primary leading-none">
                  {userRole === 'admin' ? 'Admin User' : userRole === 'teacher' ? 'Dr. Roberto Silva' : 'Alejandro G.'}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                  {userRole === 'admin' ? 'Director General' : userRole === 'teacher' ? 'Profesor Titular' : 'Alumno 2º Bach'}
                </p>
              </div>
              <img 
                src={`https://picsum.photos/seed/${userRole}/100/100`} 
                alt="User" 
                className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-blue-500 transition-colors"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <motion.div
            key={activeTab + (selectedStudent ? '-profile' : '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
