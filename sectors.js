window.SECTOR_PROFILES = {
  construccion: {
    id: 'construccion',
    selectorLabel: '🏗️ Construcción y Reformas',
    appName: 'CONSTRUFACTU',
    tagline: 'Gestión de Obra y Veri*factu',
    dbName: 'ConstruFactuDB',
    prefijoLicencia: 'CF-PRO',
    icon: '🏗️',
    theme: {
      primaryBg: 'bg-slate-900',
      accentText: 'text-amber-400',
      accentBorder: 'border-amber-500',
      taglineText: 'text-amber-600'
    },
    labels: {
      presupuestoSingular: 'Presupuesto',
      presupuestoPlural: 'Presupuestos',
      presupuestoSub: 'Valoraciones y partidas de obra',
      albaranSingular: 'Albarán',
      albaranPlural: 'Albaranes',
      albaranSub: 'Entregas, partes y agrupación',
      albaranIcon: '🚚',
      referenciaLabel: 'Nombre de la Obra / Referencia',
      referenciaPlaceholder: 'Ej: Reforma vivienda C/ Real 18 / Nave Fase 2',
      referenciaIcon: '🏗️',
      gastoCategorias: ['Materiales de obra', 'Subcontratas', 'Combustible / Vehículo', 'Herramienta / Maquinaria', 'Seguros / Gestoría', 'Otros gastos']
    },
    camposExtraDoc: [
      { key: 'ubicacionObra', label: 'Dirección de Obra', placeholder: 'C/ Mayor 12, Planta 2', uppercase: false, demoValue: 'C/ Real 18, Sevilla' }
    ],
    unidades: ['ud', 'm²', 'ml', 'm³', 'h', 'pa', 'kg', 'día'],
    empresaDemo: {
      nombre: 'Construcciones García S.L.',
      nif: 'B41987654',
      direccion: 'Pol. Ind. El Pino, Nave 12 · 41016 Sevilla',
      email: 'admin@construcciones-garcia.es',
      referenciaDemo: 'Reforma integral baño y cocina',
      referenciaDemo2: 'Adecuación local comercial Fase 1'
    },
    tarifarioInicial: [
      { capitulo: 'Revestimientos', concepto: 'Alicatado porcelánico baño/cocina con cemento cola C2TE', unidad: 'm²', precio: 32.00 },
      { capitulo: 'Albañilería', concepto: 'Enfoscado maestreado con mortero de cemento M-7,5', unidad: 'm²', precio: 18.00 },
      { capitulo: 'Albañilería', concepto: 'Tabique de ladrillo hueco doble 7 cm recibido con mortero', unidad: 'm²', precio: 24.50 },
      { capitulo: 'Mano de Obra', concepto: 'Hora oficial 1ª albañilería / reforma', unidad: 'h', precio: 26.00 },
      { capitulo: 'Electricidad', concepto: 'Punto de luz o base de enchufe empotrado completo', unidad: 'ud', precio: 45.00 },
      { capitulo: 'Fontanería', concepto: 'Toma de agua fría/caliente en tubería multicapa', unidad: 'ud', precio: 58.00 }
    ]
  },

  taller: {
    id: 'taller',
    selectorLabel: '🚗 Talleres Mecánicos y Chapa',
    appName: 'TALLERFACTU',
    tagline: 'Gestión de Talleres y Veri*factu',
    dbName: 'TallerFactuDB',
    prefijoLicencia: 'TF-PRO',
    icon: '🚗',
    theme: {
      primaryBg: 'bg-zinc-900',
      accentText: 'text-red-400',
      accentBorder: 'border-red-500',
      taglineText: 'text-red-600'
    },
    labels: {
      presupuestoSingular: 'Valoración / Peritación',
      presupuestoPlural: 'Valoraciones',
      presupuestoSub: 'Presupuestos de reparación y peritación',
      albaranSingular: 'Orden de Reparación',
      albaranPlural: 'Órdenes Reparación',
      albaranSub: 'Partes de taller y agrupación a factura',
      albaranIcon: '🔧',
      referenciaLabel: 'Vehículo (Marca y Modelo)',
      referenciaPlaceholder: 'Ej: Seat León 1.6 TDI / Kia Sportage',
      referenciaIcon: '🚗',
      gastoCategorias: ['Recambios y piezas', 'Aceites y lubricantes', 'Neumáticos', 'Pintura y chapa', 'Diagnosis / Herramienta', 'Gestión residuos (SIGAUS)']
    },
    camposExtraDoc: [
      { key: 'matricula', label: 'Matrícula *', placeholder: '1234 ABC', uppercase: true, demoValue: '4821 KLM' },
      { key: 'km', label: 'Kilómetros', placeholder: '145.200 km', uppercase: false, demoValue: '142.500 km' },
      { key: 'bastidor', label: 'Nº Bastidor (VIN)', placeholder: 'VSSZZZ...', uppercase: true, demoValue: 'VSSZZZ5FZJR019283' }
    ],
    unidades: ['ud', 'h', 'l', 'juego', 'kit', 'pa'],
    empresaDemo: {
      nombre: 'Automoción Aljarafe Motor S.L.',
      nif: 'B41778899',
      direccion: 'Pol. Ind. Solúcar, Calle B Nave 4 · Sanlúcar la Mayor',
      email: 'taller@aljarafemotor.es',
      referenciaDemo: 'Seat León 1.6 TDI - Revisión y distribución',
      referenciaDemo2: 'Volkswagen Passat 2.0 TDI - Embrague'
    },
    tarifarioInicial: [
      { capitulo: 'Mano de Obra', concepto: 'Hora mano de obra mecánica general', unidad: 'h', precio: 42.00 },
      { capitulo: 'Mano de Obra', concepto: 'Hora mano de obra chapa y bancada', unidad: 'h', precio: 46.00 },
      { capitulo: 'Mano de Obra', concepto: 'Hora cabina pintura y materiales anexos', unidad: 'h', precio: 52.00 },
      { capitulo: 'Mantenimiento', concepto: 'Cambio aceite sintético 5W30 + filtro aceite', unidad: 'kit', precio: 89.00 },
      { capitulo: 'Frenos', concepto: 'Sustitución juego pastillas de freno delanteras', unidad: 'juego', precio: 78.00 },
      { capitulo: 'Neumáticos', concepto: 'Montaje, equilibrado y válvula neumático turismo', unidad: 'ud', precio: 15.00 },
      { capitulo: 'Diagnosis', concepto: 'Lectura y borrado de averías con equipo diagnosis', unidad: 'ud', precio: 30.00 }
    ]
  },

  sat: {
    id: 'sat',
    selectorLabel: '❄️ Instaladores SAT y Climatización',
    appName: 'INSTAFACTU',
    tagline: 'Climatización, SAT y Veri*factu',
    dbName: 'InstaFactuDB',
    prefijoLicencia: 'IF-PRO',
    icon: '❄️',
    theme: {
      primaryBg: 'bg-slate-900',
      accentText: 'text-cyan-400',
      accentBorder: 'border-cyan-500',
      taglineText: 'text-cyan-600'
    },
    labels: {
      presupuestoSingular: 'Presupuesto Instalación',
      presupuestoPlural: 'Presupuestos',
      presupuestoSub: 'Ofertas de equipos e instalaciones',
      albaranSingular: 'Parte Asistencia SAT',
      albaranPlural: 'Partes SAT',
      albaranSub: 'Avisos técnicos, salidas y agrupación',
      albaranIcon: '🛠️',
      referenciaLabel: 'Instalación / Equipo',
      referenciaPlaceholder: 'Ej: Split Mitsubishi MSZ-AP35 Salón',
      referenciaIcon: '❄️',
      gastoCategorias: ['Equipos y máquinas', 'Gases refrigerantes', 'Tubería cobre y aislamiento', 'Material eléctrico', 'Combustible / Furgoneta', 'Seguros / Certificaciones']
    },
    camposExtraDoc: [
      { key: 'numSerie', label: 'Nº Serie Equipo', placeholder: 'SN-998212', uppercase: true, demoValue: 'SN-2026-88412' },
      { key: 'gasTipo', label: 'Gas / Refrigerante', placeholder: 'R-32 / R-410A', uppercase: true, demoValue: 'R-32 (0,85 kg)' }
    ],
    unidades: ['ud', 'h', 'ml', 'kg', 'despl.', 'pa'],
    empresaDemo: {
      nombre: 'ClimaSur Instalaciones Técnicas S.L.',
      nif: 'B41332211',
      direccion: 'C/ Industria 22 · 41900 Camas (Sevilla)',
      email: 'sat@climasurtecnica.es',
      referenciaDemo: 'Split Inverter 3000 fg Mitsubishi Electric',
      referenciaDemo2: 'Caldera condensación Junkers Cerapur'
    },
    tarifarioInicial: [
      { capitulo: 'Asistencia SAT', concepto: 'Desplazamiento y primera hora técnico SAT', unidad: 'despl.', precio: 55.00 },
      { capitulo: 'Asistencia SAT', concepto: 'Hora adicional técnico frigorista / gas', unidad: 'h', precio: 38.00 },
      { capitulo: 'Climatización', concepto: 'Instalación básica Split 1x1 hasta 3 m de línea frigorífica', unidad: 'ud', precio: 240.00 },
      { capitulo: 'Climatización', concepto: 'Metro adicional línea frigorífica bitubo aislada + desagüe', unidad: 'ml', precio: 28.00 },
      { capitulo: 'Mantenimiento', concepto: 'Revisión anual caldera / equipo clima y limpieza filtros', unidad: 'ud', precio: 65.00 }
    ]
  },

  jardineria: {
    id: 'jardineria',
    selectorLabel: '🌿 Jardinería y Mantenimiento Piscinas',
    appName: 'VERDEFACTU',
    tagline: 'Jardinería, Piscinas y Veri*factu',
    dbName: 'VerdeFactuDB',
    prefijoLicencia: 'VF-PRO',
    icon: '🌿',
    theme: {
      primaryBg: 'bg-emerald-950',
      accentText: 'text-emerald-400',
      accentBorder: 'border-emerald-500',
      taglineText: 'text-emerald-700'
    },
    labels: {
      presupuestoSingular: 'Propuesta Servicio',
      presupuestoPlural: 'Propuestas',
      presupuestoSub: 'Presupuestos de poda, riego y piscinas',
      albaranSingular: 'Parte de Visita',
      albaranPlural: 'Partes de Visita',
      albaranSub: 'Visitas semanales agrupables al mes',
      albaranIcon: '🌱',
      referenciaLabel: 'Finca / Comunidad / Piscina',
      referenciaPlaceholder: 'Ej: Urbanización Los Olivos · Fase II',
      referenciaIcon: '🌿',
      gastoCategorias: ['Productos químicos piscina', 'Plantas, abonos y sustratos', 'Material de riego', 'Combustible maquinaria', 'Reparación cortacésped/motosierra', 'Gestión restos vegetales']
    },
    camposExtraDoc: [
      { key: 'superficie', label: 'Superficie / Volumen', placeholder: '450 m² / 60 m³', uppercase: false, demoValue: '650 m² jardín + piscina 55 m³' },
      { key: 'periodicidad', label: 'Frecuencia', placeholder: 'Semanal / Quincenal', uppercase: false, demoValue: 'Visita semanal' }
    ],
    unidades: ['visita', 'h', 'm²', 'ml', 'garrafa', 'ud'],
    empresaDemo: {
      nombre: 'Jardines y Piscinas Aljarafe Verde S.L.',
      nif: 'B41665544',
      direccion: 'Avda. de Andalucía 88 · Espartinas (Sevilla)',
      email: 'info@aljarafeverde.es',
      referenciaDemo: 'Mantenimiento integral jardín y piscina privada',
      referenciaDemo2: 'Poda setos y puesta a punto riego automático'
    },
    tarifarioInicial: [
      { capitulo: 'Piscinas', concepto: 'Visita mantenimiento piscina (limpieza fondo, niveles pH/Cl)', unidad: 'visita', precio: 35.00 },
      { capitulo: 'Piscinas', concepto: 'Garrafa cloro líquido o reductor pH 20 litros', unidad: 'garrafa', precio: 29.50 },
      { capitulo: 'Jardinería', concepto: 'Hora operario jardinería con maquinaria (corte césped/setos)', unidad: 'h', precio: 28.00 },
      { capitulo: 'Poda', concepto: 'Poda de palmera washingtonia / datilera en altura', unidad: 'ud', precio: 65.00 },
      { capitulo: 'Riego', concepto: 'Sustitución electroválvula o programador riego 4 zonas', unidad: 'ud', precio: 75.00 }
    ]
  },

  metal: {
    id: 'metal',
    selectorLabel: '🪟 Carpintería Metálica, Aluminio y Cerrajería',
    appName: 'METALFACTU',
    tagline: 'Aluminio, PVC, Cerrajería y Veri*factu',
    dbName: 'MetalFactuDB',
    prefijoLicencia: 'MF-PRO',
    icon: '🪟',
    theme: {
      primaryBg: 'bg-slate-900',
      accentText: 'text-sky-400',
      accentBorder: 'border-sky-500',
      taglineText: 'text-sky-600'
    },
    labels: {
      presupuestoSingular: 'Medición / Oferta',
      presupuestoPlural: 'Mediciones',
      presupuestoSub: 'Presupuestos de cerramientos y cerrajería',
      albaranSingular: 'Parte de Montaje',
      albaranPlural: 'Partes Montaje',
      albaranSub: 'Instalaciones en obra y avisos cerrajería',
      albaranIcon: '🔩',
      referenciaLabel: 'Obra / Huecos / Vivienda',
      referenciaPlaceholder: 'Ej: Chalet C/ Pinos 4 · Cerramiento terraza',
      referenciaIcon: '🪟',
      gastoCategorias: ['Perfilería aluminio / PVC', 'Vidrios y cámaras Climalit', 'Herrajes y cerraduras', 'Persianas y motores', 'Consumibles taller / soldadura', 'Transporte / Grúa']
    },
    camposExtraDoc: [
      { key: 'acabado', label: 'Acabado / Color RAL', placeholder: 'Blanco / RAL 7016 Texturado', uppercase: true, demoValue: 'ANTRACITA RAL 7016' },
      { key: 'vidrio', label: 'Acristalamiento', placeholder: '4/16/4 Bajo Emisivo', uppercase: false, demoValue: '4/16/4 Guardian Sun' }
    ],
    unidades: ['ud', 'm²', 'ml', 'h', 'pa'],
    empresaDemo: {
      nombre: 'Aluminios y Cerrajería del Sur S.L.',
      nif: 'B41223344',
      direccion: 'Pol. Ind. La Red, Calle 7 Nave 15 · Alcalá de Guadaíra',
      email: 'presupuestos@aluminiosdelsur.es',
      referenciaDemo: 'Sustitución ventanas PVC oscilobatientes vivienda',
      referenciaDemo2: 'Motorización persiana y cerradura seguridad'
    },
    tarifarioInicial: [
      { capitulo: 'Ventanas PVC/Aluminio', concepto: 'Ventana oscilobatiente 2 hojas RPT 1200x1200 mm con vidrio doble', unidad: 'ud', precio: 420.00 },
      { capitulo: 'Persianas', concepto: 'Suministro e instalación motor tubular persiana con pulsador', unidad: 'ud', precio: 165.00 },
      { capitulo: 'Cerrajería', concepto: 'Apertura de puerta blindada/acorazada sin rotura + desplazamiento', unidad: 'ud', precio: 85.00 },
      { capitulo: 'Cerrajería', concepto: 'Sustitución bombillo antibumping alta seguridad con 5 llaves', unidad: 'ud', precio: 110.00 },
      { capitulo: 'Mano de Obra', concepto: 'Hora pareja montadores cerramientos en obra', unidad: 'h', precio: 54.00 }
    ]
  }
};
