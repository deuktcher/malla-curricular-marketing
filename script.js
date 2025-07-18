// script.js
const materias = {
  // Primer Año - I Semestre
  "Introducción a la economía": { creditos: 4, prereqs: [], abre: ["Microeconomía I", "Macroeconomía"] },
  "Innovación y creatividad": { creditos: 3, prereqs: [], abre: [] },
  "Matemáticas I": { creditos: 4, prereqs: [], abre: ["Microeconomía I", "Macroeconomía", "Estadística I"] },
  "Computación I": { creditos: 3, prereqs: [], abre: [] },
  "Contabilidad básica": { creditos: 4, prereqs: [], abre: ["Contabilidad de Costos I"] },
  "Administración de empresas": { creditos: 3, prereqs: [], abre: ["Mercadotecnia I", "Gestión del talento Humano"] },
  "Técnicas de comunicación escrita": { creditos: 3, prereqs: [], abre: ["Métodos y Técnicas de Investigación"] },
  "English Beginners": { creditos: 6, prereqs: [], abre: ["English Intermediate"] },

  // Primer Año - II Semestre
  "Microeconomía I": { creditos: 3, prereqs: ["Introducción a la economía", "Matemáticas I"], abre: [] },
  "Macroeconomía": { creditos: 3, prereqs: ["Introducción a la economía", "Matemáticas I"], abre: ["Comercio Exterior"] },
  "Mercadotecnia I": { creditos: 3, prereqs: ["Administración de empresas"], abre: ["Mercadotecnia II", "Comportamiento del Consumidor I"] },
  "Estadística I": { creditos: 3, prereqs: ["Matemáticas I"], abre: ["Estadística II"] },
  "Contabilidad de Costos I": { creditos: 4, prereqs: ["Contabilidad básica"], abre: ["Contabilidad Administrativa", "Presupuestos"] },
  "Gestión del talento Humano": { creditos: 3, prereqs: ["Administración de empresas"], abre: [] },
  "Métodos y Técnicas de Investigación": { creditos: 3, prereqs: ["Técnicas de comunicación escrita"], abre: [] },
  "English Intermediate": { creditos: 6, prereqs: ["English Beginners"], abre: ["English High Intermediate"] },

  // Segundo Año - III Semestre
  "Administración de la Cadena de Suministros": { creditos: 3, prereqs: [], abre: ["Administración de Canales de Distribución"] },
  "Análisis del entorno": { creditos: 3, prereqs: [], abre: [] },
  "Mercadotecnia II": { creditos: 3, prereqs: ["Mercadotecnia I"], abre: ["Administración de Canales de Distribución", "Administración de Ventas", "Calidad y Servicio al Cliente"] },
  "Estadística II": { creditos: 3, prereqs: ["Estadística I"], abre: ["Análisis Multivariable", "Modelos Cuantitativos I"] },
  "Matemática Financiera I": { creditos: 3, prereqs: [], abre: ["Administración Financiera"] },
  "Liderazgo y Ética": { creditos: 3, prereqs: [], abre: [] },
  "Herramientas publicitarias": { creditos: 3, prereqs: [], abre: [] },
  "English High Intermediate": { creditos: 6, prereqs: ["English Intermediate"], abre: ["English Advanced"] },

  // Segundo Año - IV Semestre
  "Administración de Canales de Distribución": { creditos: 3, prereqs: ["Administración de la Cadena de Suministros", "Mercadotecnia II"], abre: [] },
  "Comportamiento del Consumidor I": { creditos: 3, prereqs: ["Mercadotecnia I"], abre: ["Semiótica"] },
  "Calidad y Servicio al Cliente": { creditos: 3, prereqs: ["Mercadotecnia II"], abre: ["Comunicación Integrada de Marketing"] },
  "Análisis Multivariable": { creditos: 3, prereqs: ["Estadística II"], abre: ["Investigación de Mercados I"] },
  "Contabilidad Administrativa": { creditos: 4, prereqs: ["Contabilidad de Costos I"], abre: [] },
  "Presupuestos": { creditos: 3, prereqs: ["Contabilidad de Costos I"], abre: ["Estrategia y Política de Precios"] },
  "Introducción al Derecho Empresarial": { creditos: 3, prereqs: [], abre: ["Franquicias"] },
  "English Advanced": { creditos: 6, prereqs: ["English High Intermediate"], abre: [] },

  // Tercer Año - V Semestre
  "Administración de Ventas": { creditos: 3, prereqs: ["Mercadotecnia II"], abre: ["Estrategia Logística"] },
  "Comercio Exterior": { creditos: 3, prereqs: ["Macroeconomía"], abre: ["Mercadotecnia Internacional"] },
  "Semiótica": { creditos: 3, prereqs: ["Comportamiento del Consumidor I"], abre: ["Comportamiento del Consumidor II"] },
  "Investigación de Mercados I": { creditos: 3, prereqs: ["Análisis Multivariable"], abre: ["Investigación de Mercados II", "Merchandising", "Comunicación Integrada de Marketing"] },
  "Modelos Cuantitativos I": { creditos: 4, prereqs: ["Estadística II"], abre: [] },
  "Administración Financiera": { creditos: 4, prereqs: ["Matemática Financiera I"], abre: ["Preparación y Evaluación de Proyectos I"] },
  "Packaging": { creditos: 3, prereqs: [], abre: [] },
  "Franquicias": { creditos: 3, prereqs: ["Introducción al Derecho Empresarial"], abre: [] },
  "Práctica Profesional I": { creditos: 0, prereqs: [], abre: ["Práctica Profesional II"] },

  // Tercer Año - VI Semestre
  "Estrategia Logística": { creditos: 3, prereqs: ["Administración de Ventas"], abre: ["Trade Marketing"] },
  "Mercadotecnia Internacional": { creditos: 3, prereqs: ["Comercio Exterior"], abre: [] },
  "Comportamiento del Consumidor II": { creditos: 3, prereqs: ["Semiótica"], abre: ["Comportamiento del Consumidor III"] },
  "Investigación de Mercados II": { creditos: 3, prereqs: ["Investigación de Mercados I"], abre: ["Sistema de Inteligencia de Mercados", "Innovación y desarrollo del producto"] },
  "Merchandising": { creditos: 3, prereqs: ["Investigación de Mercados I"], abre: [] },
  "Estrategia y Política de Precios": { creditos: 3, prereqs: ["Presupuestos"], abre: [] },
  "Marketing Interno": { creditos: 3, prereqs: [], abre: [] },
  "Comunicación Integrada de Marketing": { creditos: 3, prereqs: ["Calidad y Servicio al Cliente", "Investigación de Mercados I"], abre: ["Marketing Digital"] },
  "Fotografía I - Electiva I": { creditos: 3, prereqs: [], abre: [] },

  // Cuarto Año - VII Semestre
  "Trade Marketing": { creditos: 3, prereqs: ["Estrategia Logística"], abre: [] },
  "Comportamiento del Consumidor III": { creditos: 3, prereqs: ["Comportamiento del Consumidor II"], abre: [] },
  "Sistema de Inteligencia de Mercados": { creditos: 3, prereqs: ["Investigación de Mercados II"], abre: ["Marketing Estratégico"] },
  "Innovación y desarrollo del producto": { creditos: 3, prereqs: ["Investigación de Mercados II"], abre: [] },
  "Preparación y Evaluación de Proyectos I": { creditos: 3, prereqs: ["Administración Financiera"], abre: [] },
  "Asesoría de Marcas Personales": { creditos: 3, prereqs: [], abre: [] },
  "Marketing Digital": { creditos: 3, prereqs: ["Comunicación Integrada de Marketing"], abre: ["Gerencia de Promoción y Publicidad"] },
  "Organización de Eventos": { creditos: 3, prereqs: [], abre: [] },
  "Práctica Profesional II": { creditos: 0, prereqs: ["Práctica Profesional I"], abre: ["Seminario de Grado"] },

  // Cuarto Año - VIII Semestre
  "Electiva II": { creditos: 3, prereqs: [], abre: [] },
  "Electiva III": { creditos: 3, prereqs: [], abre: [] },
  "Marketing Estratégico": { creditos: 3, prereqs: ["Sistema de Inteligencia de Mercados"], abre: [] },
  "Electiva IV": { creditos: 3, prereqs: [], abre: [] },
  "Electiva V": { creditos: 3, prereqs: [], abre: [] },
  "Plan de Marketing": { creditos: 3, prereqs: [], abre: [] },
  "Gestión de Marcas": { creditos: 3, prereqs: [], abre: [] },
  "Gerencia de Promoción y Publicidad": { creditos: 3, prereqs: ["Marketing Digital"], abre: [] },
  "Seminario de Grado": { creditos: 0, prereqs: ["Práctica Profesional II"], abre: [] }
};

                  
