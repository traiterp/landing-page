const dictionary = {
  pageTitle: "Noodle ERP - The Flexible and Affordable ERP for SMEs", // More descriptive title for SEO and tab

  navbar: {
    button: "Contact Us",
  },

  hero: {
    title: "The ERP Your SME Needs", // Selected main title
    subheading: "Leave behind rigid and costly systems. Noodle ERP offers you the management technology that boosts your competitiveness, at a fair price.", // Selected subheading
    badge: "FOR SMES", // More relevant badge than "NEW"
    recap: "Adapted to Your Growth", // Short and relevant text instead of the annual summary
    ctaButton: "Request a Free Demo", // Selected main CTA
  },

  companies: {
    title: "Trusted by SMEs like yours",
  },

  features: {
    title: "Why Choose Noodle ERP?", // Selected features section title
    description: "Discover tools designed to adapt to your business, simplify management, and boost your growth.", // Adapted introductory description
    featureList: [
      { id: 'f1', name: 'Modular and Scalable', details: 'Start with the essentials and add functionalities (sales, inventory, HR...) as your business grows. Pay only for what you use.' },
      { id: 'f2', name: 'Cloud-Based', details: 'Access your management from anywhere. Fast implementation, automatic updates, and reduced costs.' },
      { id: 'f3', name: 'Fully Customizable', details: 'Combine the best of vertical and horizontal ERPs. Adapt the system to the specific needs of your sector and company.' },
      { id: 'f4', name: 'Affordable for SMEs', details: 'Forget about large investments. We offer top-level ERP technology at a price adapted to the reality of small and medium-sized businesses.' },
      { id: 'f5', name: 'Boost Your Competitiveness', details: 'Digitize your processes, gain total control over your management, and make better decisions to compete in today\'s market.' },
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
    title: "Flexible Plans for Every Need", // Keep the general title
    description: "Choose the plan that best suits the current size and needs of your SME. You can always scale or add modules.", // Adapted description
    plans: [
      // --- Plan 1: Esencial ---
      {
        id: "esencial", // Keeping original ID
        title: "Essential SME",
        desc: "Ideal for digitizing your core management. Focus on sales, invoicing, and customers.",
        monthlyPrice: 69, // Invented monthly price (adjust according to your strategy)
        annuallyPrice: 690, // Invented annual price (with discount)
        buttonText: "Select Essential", // Specific plan button text
        features: [
          "HR Module (Basic CRM)", // Relevant features for ERP
          "Invoicing Module",
          "Customer and Contact Management",
          "Basic Dashboard",
          "Updates Included",
          "2 Users Included",
          "Email Support"
        ],
      },
      {
        id: "crecimiento", // Keeping original ID
        title: "Growth",
        desc: "Optimize your complete operations. Add inventory, purchasing, and advanced analytics.",
        monthlyPrice: 149, // Invented monthly price (higher than Essential)
        annuallyPrice: 1490, // Invented annual price (with discount)
        buttonText: "Select Growth",
        features: [
          "Everything in the Essential SME Plan", // Indicates it includes the previous plan
          "Purchasing and Supplier Module",
          "Inventory Control Module",
          "Advanced CRM (Opportunities)",
          "Detailed Reports and Analysis",
          "5 Users Included",
          "Priority Support (Email/Chat)",
          "Possibility of Additional Modules (Inquire)" // Indicates extensibility
        ],
      }
    ],
  },

  // --- Final Call to Action Section ---
  cta: {
    title: "Ready to Transform Your SME's Management?", // Selected final CTA title
    description: "Discover how Noodle ERP can simplify your operations, improve your efficiency, and help you grow.", // Selected final CTA description
    mainButton: "Request Your Free Demo", // Consistent main button
  },

  // --- Common terms (useful for generic buttons/links) ---
  footer: {
    title: "Noodle ERP",
    description: "The ERP Your SME Needs",
    learnMore: "Learn More",
    tryNow: "Request Demo", // Changed to be consistent, if no automatic trial
    contactUs: "Contact Us",
    getStarted: "Get Started Now",
    features: "Features",
    pricing: "Pricing"
  }
};

export type Dictionary = typeof dictionary;
export default dictionary;
