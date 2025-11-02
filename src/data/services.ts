import type { Component } from 'vue'
import {
  Briefcase,
  FileSpreadsheet,
  BarChart3,
  ReceiptCent,
  Users,
  ShieldCheck,
  Lightbulb,
  Globe,
  Server,
  Building2,
  FileCheck,
  Scale,
  LineChart,
} from 'lucide-vue-next'

export type Service = {
  icon: Component
  title: string
  slug: string
  description: string
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export const services: Service[] = [
  {
    icon: Briefcase,
    title: 'Servicios Contables y Empresariales',
    slug: slugify('Servicios Contables y Empresariales'),
    description: `Gestión integral de la contabilidad y la administración financiera de tu empresa.

Incluye:
• Organización y registro contable de todas las operaciones.
• Análisis de movimientos financieros y patrimoniales.
• Asesoría permanente en decisiones empresariales.

Beneficios:
✔ Cumplimiento normativo y fiscal.
✔ Información clara para la toma de decisiones.
✔ Optimización de procesos administrativos.`
  },
  {
    icon: FileSpreadsheet,
    title: 'Contabilidad General',
    slug: slugify('Contabilidad General'),
    description: `Registro, clasificación y control de las operaciones económicas según normas NIIF.

Incluye:
• Elaboración y actualización de libros contables.
• Conciliaciones bancarias y control de cuentas por cobrar/pagar.
• Registro mensual de ingresos, gastos y activos.

Beneficios:
✔ Control total de la situación financiera.
✔ Información oportuna y confiable.
✔ Evita sanciones por errores contables.`
  },
  {
    icon: BarChart3,
    title: 'Estados Financieros',
    slug: slugify('Estados Financieros'),
    description: `Preparación e interpretación de estados financieros que reflejan la salud económica del negocio.

Incluye:
• Balance general y estado de resultados.
• Flujo de efectivo y estado de cambios en el patrimonio.
• Análisis e informes financieros periódicos.

Beneficios:
✔ Diagnóstico real del desempeño empresarial.
✔ Soporte para solicitudes de crédito o inversión.
✔ Planeación estratégica basada en cifras reales.`
  },
  {
    icon: ReceiptCent,
    title: 'Declaraciones Tributarias',
    slug: slugify('Declaraciones Tributarias'),
    description: `Cumplimiento de las obligaciones fiscales nacionales y municipales.

Incluye:
• Declaraciones de IVA, renta, retención en la fuente, ICA y otras.
• Revisión de obligaciones tributarias vigentes.
• Presentación ante la DIAN y entes locales.

Beneficios:
✔ Evita sanciones o intereses por incumplimiento.
✔ Cumplimiento oportuno y seguro.
✔ Ahorro mediante planeación fiscal adecuada.`
  },
  {
    icon: Users,
    title: 'Nómina y Seguridad Social',
    slug: slugify('Nómina y Seguridad Social'),
    description: `Gestión completa de nómina y cumplimiento de obligaciones laborales.

Incluye:
• Elaboración y liquidación mensual de nómina.
• Aportes a seguridad social (EPS, ARL, AFP, Caja de Compensación).
• Generación y pago de la planilla PILA.

Beneficios:
✔ Cumplimiento laboral sin errores.
✔ Reducción de carga administrativa.
✔ Seguridad y confianza para empleados y empleadores.`
  },
  {
    icon: ShieldCheck,
    title: 'Auditoría y Revisoría Fiscal',
    slug: slugify('Auditoría y Revisoría Fiscal'),
    description: `Evaluación independiente de la información financiera y cumplimiento legal.

Incluye:
• Auditorías contables, operativas y de control interno.
• Revisión de estados financieros.
• Emisión de informes de Revisoría Fiscal según la Ley 43 de 1990.

Beneficios:
✔ Transparencia y credibilidad empresarial.
✔ Prevención de riesgos y fraudes.
✔ Mejora continua de procesos internos.`
  },
  {
    icon: Lightbulb,
    title: 'Asesoría Tributaria',
    slug: slugify('Asesoría Tributaria'),
    description: `Planeación fiscal estratégica para optimizar recursos y reducir riesgos tributarios.

Incluye:
• Diagnóstico tributario personalizado.
• Planeación y proyección de impuestos.
• Acompañamiento en revisiones de la DIAN.

Beneficios:
✔ Pago justo de impuestos.
✔ Reducción de cargas fiscales.
✔ Cumplimiento normativo con tranquilidad.`
  },
  {
    icon: Globe,
    title: 'Informes Regulatorios',
    slug: slugify('Informes Regulatorios'),
    description: `Elaboración y presentación de informes exigidos por entidades de control.

Incluye:
• Reportes a la DIAN, Supersociedades y Cámara de Comercio.
• Certificaciones contables y de ingresos.
• Actualización de registros y reportes financieros obligatorios.

Beneficios:
✔ Cumplimiento con todas las entidades reguladoras.
✔ Mayor orden documental.
✔ Evita sanciones y requerimientos.`
  },
  {
    icon: Server,
    title: 'Implementación de Software Contable',
    slug: slugify('Implementación de Software Contable'),
    description: `Modernización de los procesos contables mediante herramientas tecnológicas.

Incluye:
• Instalación y configuración de software contable (SIIGO, Alegra, entre otros).
• Capacitación personalizada.
• Migración de datos y soporte técnico.

Beneficios:
✔ Mayor eficiencia en registros contables.
✔ Información disponible en tiempo real.
✔ Control automatizado y reducción de errores.`
  },
  {
    icon: Building2,
    title: 'Creación de Empresas',
    slug: slugify('Creación de Empresas'),
    description: `Acompañamiento completo en el proceso de formalización y registro de tu negocio.

Incluye:
• Asesoría en tipo societario (SAS, LTDA, persona natural, etc.).
• Trámites ante Cámara de Comercio y DIAN (RUT, RUES, resolución de facturación).
• Estructuración de obligaciones contables y tributarias.

Beneficios:
✔ Inicio empresarial sin complicaciones.
✔ Cumplimiento desde el primer día.
✔ Ahorro de tiempo y costos administrativos.`
  },
  {
    icon: FileCheck,
    title: 'Resolución de Facturación Electrónica',
    slug: slugify('Resolución de Facturación Electrónica'),
    description: `Implementación de facturación electrónica cumpliendo las normas de la DIAN.

Incluye:
• Solicitud y habilitación ante la DIAN.
• Configuración del sistema de facturación.
• Soporte y acompañamiento técnico.

Beneficios:
✔ Cumple con la normativa vigente.
✔ Simplifica la gestión de ventas.
✔ Aumenta la confianza con clientes y proveedores.`
  },
  {
    icon: Scale,
    title: 'Régimen Simple y Ordinario',
    slug: slugify('Régimen Simple y Ordinario'),
    description: `Asesoría para elegir y gestionar el régimen tributario más conveniente para tu empresa.

Incluye:
• Evaluación de beneficios y obligaciones de cada régimen.
• Trámites de inscripción o cambio de régimen.
• Control y seguimiento de obligaciones.

Beneficios:
✔ Ahorro fiscal y simplicidad administrativa.
✔ Cumplimiento sin errores.
✔ Evita sanciones y cargas innecesarias.`
  },
  {
    icon: LineChart,
    title: 'Consultoría Financiera',
    slug: slugify('Consultoría Financiera'),
    description: `Análisis financiero estratégico para optimizar los resultados de tu negocio.

Incluye:
• Diagnóstico financiero y de rentabilidad.
• Proyecciones, presupuestos y flujo de caja.
• Estrategias para reducción de costos y aumento de ingresos.

Beneficios:
✔ Mejor control de recursos.
✔ Crecimiento sostenible.
✔ Decisiones empresariales basadas en datos reales.`
  },
]
