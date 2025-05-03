const dictionary = {
  pageTitle: "Noodle ERP - El ERP Flexible y Asequible para PYMES", // Título más descriptivo para SEO y pestaña

  navbar: {
    button: "Contactar",
  },

  hero: {
    title: "El ERP que tu PYME Necesita", // Título principal seleccionado
    subheading: "Deja atrás los sistemas rígidos y costosos. Noodle ERP te ofrece la tecnología de gestión que impulsa tu competitividad, a un precio justo.", // Subtítulo seleccionado
    badge: "PARA PYMES", // Badge más relevante que "NUEVO"
    recap: "Adaptado a tu Crecimiento", // Texto corto y relevante en lugar del resumen anual
    ctaButton: "Solicita una Demo Gratuita", // CTA principal seleccionada
  },

  companies: {
    title: "Con la confianza de PYMES como la tuya", 
  },

  features: {
    title: "¿Por qué elegir Noodle ERP?", // Título de la sección de características seleccionado
    description: "Descubre las herramientas diseñadas para adaptarse a tu negocio, simplificar la gestión y potenciar tu crecimiento.", // Descripción introductoria adaptada
    featureList: [
      { id: 'f1', name: 'Modular y Escalable', details: 'Empieza con lo esencial y añade funcionalidades (ventas, inventario, RRHH...) a medida que tu negocio crece. Paga solo por lo que usas.' },
      { id: 'f2', name: 'Basado en la Nube', details: 'Accede a tu gestión desde cualquier lugar. Implantación rápida, actualizaciones automáticas y costes reducidos.' },
      { id: 'f3', name: 'Totalmente Personalizable', details: 'Combina lo mejor de los ERPs verticales y horizontales. Adapta el sistema a las necesidades específicas de tu sector y empresa.' },
      { id: 'f4', name: 'Asequible para PYMES', details: 'Olvídate de las grandes inversiones. Ofrecemos tecnología ERP de primer nivel a un precio adaptado a la realidad de las pequeñas y medianas empresas.' },
      { id: 'f5', name: 'Impulsa tu Competitividad', details: 'Digitaliza tus procesos, obtén control total sobre tu gestión y toma mejores decisiones para competir en el mercado actual.' },
    ],
  },

  analysis: {
    title: "Clear Vision of Your Business", // Keep existing title
    description: "Make informed decisions with centralized data and easy-to-understand reports on all areas of your company.", // Keep existing description
    cards: [
      {
        id: 'salesOverview', // Updated ID for ERP context
        cardTitle: 'Sales Overview', // Updated title for ERP context
        cardDescription: 'Monitor your sales performance with real-time data and key metrics.', // Updated description for ERP context
        tableHeaders: ['Sales Order', 'Customer', 'Status', 'Amount', 'Profit'], // Updated headers for ERP sales data
        tableExampleData: [ // <-- Added the example data array here
          { name: "Sales", status: "Active", reach: "45K", roi: "+32%" },
          { name: "Emails", status: "Done", reach: "28K", roi: "+18%" },
          { name: "Ads", status: "Active", reach: "62K", roi: "+45%" },
        ],
        // Note: These keys (name, reach, roi) don't fully align with the new ERP headers (Customer, Amount, Profit)
        // This is example data copied directly from the component code's original context.
      },
      {
        id: 'inventoryOverview', // Updated ID for ERP context
        cardTitle: 'Inventory Overview', // Updated title for ERP context
        cardDescription: 'Track stock levels, movements, and value across your warehouses.', // Updated description for ERP context
        tableHeaders: ['Product', 'Warehouse', 'Stock Level', 'Last Movement', 'Value'], // Updated headers for ERP inventory data
        tableExampleData: [
          { name: "Widget A", warehouse: "Main", stock: 150, movement: "2023-10-26", value: "€1,500" },
          { name: "Gadget B", warehouse: "Branch", stock: 75, movement: "2023-10-25", value: "€2,250" },
        ],
      }
    ],
    // Static text next to dynamic metrics (adapted for ERP)
    fromLastPeriodLabel: "from last period", // e.g., "+10% from last period"
    growthLabel: "growth", // e.g., "+10% growth"
    // Button text used in this section (standard for reporting)
    filterButton: "Filter",
    downloadButton: "Download",
  },

  pricing: {
    title: "Planes Flexibles para Cada Necesidad", // Mantenemos el título general
    description: "Elige el plan que mejor se adapta al tamaño y las necesidades actuales de tu PYME. Siempre puedes escalar o añadir módulos.", // Descripción adaptada
    plans: [
      // --- Plan 1: Esencial ---
      {
        id: "esencial", // ID en minúsculas
        title: "Esencial PYME",
        desc: "Ideal para digitalizar tu gestión central. Enfócate en ventas, facturación y clientes.",
        monthlyPrice: 69, // Precio mensual inventado (ajusta según tu estrategia)
        annuallyPrice: 690, // Precio anual inventado (con descuento)
        buttonText: "Seleccionar Esencial", // Texto del botón específico del plan
        features: [
          "Módulo de RRHH (CRM Básico)", // Características relevantes para ERP
          "Módulo de Facturación",
          "Gestión de Clientes y Contactos",
          "Panel de Control Básico",
          "Actualizaciones Incluidas",
          "2 Usuarios Incluidos",
          "Soporte por Email"
        ],
      },
      {
        id: "crecimiento",
        title: "Crecimiento",
        desc: "Optimiza tus operaciones completas. Añade inventario, compras y análisis avanzado.",
        monthlyPrice: 149, // Precio mensual inventado (mayor que Esencial)
        annuallyPrice: 1490, // Precio anual inventado (con descuento)
        buttonText: "Seleccionar Crecimiento",
        features: [
          "Todo lo del Plan Esencial PYME", // Indica que incluye lo anterior
          "Módulo de Compras y Proveedores",
          "Módulo de Control de Inventario",
          "CRM Avanzado (Oportunidades)",
          "Reportes y Análisis Detallados",
          "5 Usuarios Incluidos",
          "Soporte Prioritario (Email/Chat)",
          "Posibilidad de Módulos Adicionales (Consultar)" // Indica extensibilidad
        ],
      }
    ],
  },

  // --- Sección de Llamada a la Acción Final ---
  cta: {
    title: "¿Listo para Transformar la Gestión de tu PYME?", // Título CTA final seleccionado
    description: "Descubre cómo Noodle ERP puede simplificar tus operaciones, mejorar tu eficiencia y ayudarte a crecer.", // Descripción CTA final seleccionada
    mainButton: "Solicita tu Demo Gratuita", // Botón principal consistente
  },

  // --- Términos comunes (útiles para botones/enlaces genéricos) ---
  footer: {
    title: "Noodle ERP",
    description: "El ERP que tu PYME Necesita",
    learnMore: "Saber más",
    tryNow: "Solicitar Demo", // Cambiado para ser consistente, si no hay prueba automática
    contactUs: "Contáctanos",
    getStarted: "Empezar Ahora",
    features: "Características",
    pricing: "Precios"
  }
};

export type Dictionary = typeof dictionary;
export default dictionary;
