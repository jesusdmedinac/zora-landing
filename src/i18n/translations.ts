export interface TranslationDictionary {
  nav: {
    howItWorks: string;
    forYonkes: string;
    virtualGarage: string;
    reverseBidding: string;
    searchCTA: string;
    yardAccess: string;
  };
  hero: {
    badgeAi: string;
    badgeNetwork: string;
    badgeAuction: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    searchBtn: string;
    searchChipsLabel: string;
    chips: string[];
    metrics: {
      value: string;
      label: string;
    }[];
  };
  agents: {
    badge: string;
    title: string;
    subtitle: string;
    driverAgent: {
      title: string;
      role: string;
      description: string;
      points: string[];
      samplePrompt: string;
      parsedOutput: string;
    };
    yonkeAgent: {
      title: string;
      role: string;
      description: string;
      points: string[];
      sampleAlert: string;
      fastestQuote: string;
    };
  };
  phoneMockup: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      copilot: string;
      garage: string;
      parts: string;
    };
    copilotTab: {
      driverQuery: string;
      aiResponse: string;
      diagBadge: string;
      partCode: string;
    };
    garageTab: {
      vehicle: string;
      healthScore: string;
      telemetryNotice: string;
      fluidsStatus: string;
      nextCheck: string;
    };
    partsTab: {
      partName: string;
      status: string;
      yardName: string;
      price: string;
      savings: string;
    };
  };
  reverseAuction: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      stepNumber: string;
      title: string;
      desc: string;
    }[];
  };
  yonkes: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
    }[];
    ctaYardRegister: string;
    metrics: {
      val: string;
      lbl: string;
    }[];
  };
  crossBorder: {
    badge: string;
    title: string;
    subtitle: string;
    highlights: {
      title: string;
      desc: string;
    }[];
  };
  trust: {
    badge: string;
    title: string;
    subtitle: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    driverAction: string;
    yardAction: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeWith: string;
    author: string;
    disclaimer: string;
  };
}

export const translations: Record<'es' | 'en', TranslationDictionary> = {
  es: {
    nav: {
      howItWorks: "¿Cómo Funciona?",
      forYonkes: "Para Yonkes",
      virtualGarage: "Garaje Virtual",
      reverseBidding: "Licitación Inversa",
      searchCTA: "Buscar Refacción",
      yardAccess: "Acceso a Yonkes",
    },
    hero: {
      badgeAi: "Inteligencia Artificial Automotriz",
      badgeNetwork: "Red Binacional de Yonkes Certificados",
      badgeAuction: "Licitación Inversa en Tiempo Real",
      headline: "Encuentra la refacción exacta de tu auto",
      headlineHighlight: "sin recorrer la ciudad ni llamar a 20 yonkes.",
      subtitle: "Describe tu problema en tus propias palabras. Nuestro copiloto de IA diagnostica tu falla, alerta simultáneamente a los yonkes de la región y activa una subasta inversa donde los negocios compiten por darte la mejor pieza al mejor precio.",
      searchPlaceholder: "¿Qué refacción o síntoma tiene tu vehículo? (ej. Sentra 2017 transmisión zumba)",
      searchBtn: "Localizar Pieza",
      searchChipsLabel: "Búsquedas frecuentes:",
      chips: [
        "Transmisión Nissan Sentra 2017",
        "Faro delantero LED Honda Civic 2019",
        "Cofre y Salpicadera Toyota Tacoma 2020",
        "Compresor A/C VW Jetta A6",
      ],
      metrics: [
        { value: "0%", label: "Jerga Técnica Requerida" },
        { value: "< 15 min", label: "Primeras Ofertas en Radar" },
        { value: "100%", label: "Yonkes y Recicladores Verificados" },
        { value: "Tijuana - SD", label: "Corredor Binacional Activo" },
      ],
    },
    agents: {
      badge: "Arquitectura de Dos Agentes",
      title: "La inteligencia que conecta conductores con inventario real",
      subtitle: "A diferencia de los directorios estáticos con inventario fantasma, Zora opera mediante dos agentes de IA sincronizados en tiempo real.",
      driverAgent: {
        title: "Agente del Conductor",
        role: "Copiloto B2C Conversacional",
        description: "Traduce descripciones informales o síntomas de manejo a especificaciones técnicas precisas de fabricante (OEM).",
        points: [
          "Comprensión de lenguaje coloquial ('se me amoló la flecha derecha')",
          "Resolución proactiva de modelo, motorización y año exacto",
          "Generación automática de ficha técnica de búsqueda estructurada",
        ],
        samplePrompt: "\"Oye Zora, choqué la puerta del copiloto de mi Sentra 2015 versión americana\"",
        parsedOutput: "OEM Match: Puerta delantera derecha | Chasis B17 US-Spec | Compatible 2013-2019 | Requiere elevador eléctrico.",
      },
      yonkeAgent: {
        title: "Agente del Yonke",
        role: "Motor Logístico y Radar B2B",
        description: "Emite alertas de demanda en vivo a los negocios registrados bajo la mecánica 'el más rápido gana'.",
        points: [
          "Radar en tiempo real sin obligar al yonke a catalogar miles de piezas",
          "Notificación masiva simultánea a los patios de la zona con donantes compatibles",
          "Modelo 'Fastest-Finger-First': el negocio con stock fija precio en 1 clic y gana prioridad",
        ],
        sampleAlert: "Alerta Radar #4092: Puerta delantera derecha Sentra 2015 en radio de 15 km.",
        fastestQuote: "Yonke El Águila: '¡La tengo en patio! $120 USD lista para desmontar.'",
      },
    },
    phoneMockup: {
      badge: "Experiencia en Vivo",
      title: "El poder de Zora en la palma de tu mano",
      subtitle: "Diseñado para máxima velocidad y simplicidad: desde el diagnóstico en chat hasta el resguardo de tu vehículo.",
      tabs: {
        copilot: "Copiloto Chat",
        garage: "Garaje Virtual",
        parts: "Refacciones y Radar",
      },
      copilotTab: {
        driverQuery: "Siento un tronido en la llanta delantera al dar la vuelta a la izquierda en mi Honda CR-V 2016.",
        aiResponse: "Diagnóstico de alta probabilidad: Junta homocinética o flecha de tracción izquierda con bota rota. He verificado compatibilidad con tu motor 2.4L Earth Dreams.",
        diagBadge: "DIAGNÓSTICO DIRECTO",
        partCode: "Refacción requerida: Flecha / Semieje Delantero Izquierdo (OEM: 44306-T0A-A00)",
      },
      garageTab: {
        vehicle: "Honda CR-V EX-L 2016 (AWD)",
        healthScore: "94% Salud General",
        telemetryNotice: "Bóveda de Telemetría Local Activa",
        fluidsStatus: "Fluidos & Frenos: OK (Inspección hace 12 días)",
        nextCheck: "Próximo servicio: Cambio de aceite sintético 0W-20 en 2,400 km",
      },
      partsTab: {
        partName: "Flecha Delantera Izquierda OEM (Seminueva)",
        status: "EN STOCK LOCAL",
        yardName: "Autopartes La Mesa - Tijuana, B.C.",
        price: "$85 USD ($1,550 MXN)",
        savings: "Ahorro vs Agencia: 68%",
      },
    },
    reverseAuction: {
      badge: "Competencia Dinámica",
      title: "¿Cómo funciona la Licitación Inversa?",
      subtitle: "En lugar de que tú persigas al yonke llamando por teléfono, Zora hace que los yonkes compitan por atenderte a ti.",
      steps: [
        {
          stepNumber: "01",
          title: "Describes tu necesidad",
          desc: "Escribe en el chat o sube una foto de la pieza rota. El copiloto Zora interpreta el número de parte y vehículos donantes compatibles.",
        },
        {
          stepNumber: "02",
          title: "Alerta Radar Simultánea",
          desc: "Tu solicitud se difunde al instante a toda la red de yonkes certificados en Tijuana, Mexicali y San Diego.",
        },
        {
          stepNumber: "03",
          title: "Ofertas en Tiempo Real",
          desc: "Los encargados de los yonkes confirman disponibilidad física en su patio y mandan su precio con foto de la pieza desmontada.",
        },
        {
          stepNumber: "04",
          title: "Eliges la mejor opción",
          desc: "Revisas fotos, garantía, cercanía y precio. Pagas con protección y recoges en mostrador o solicitas entrega a tu taller.",
        },
      ],
    },
    yonkes: {
      badge: "Portal para Yonkes y Deshuesaderos",
      title: "Monetiza el patio sin inventariar una sola pieza a mano",
      subtitle: "El mayor dolor de un yonke es el 'inventario fantasma'. Zora te conecta directamente con compradores calificados que buscan exactamente los autos que tienes en el corralón.",
      cards: [
        {
          title: "Cero Tiempo Catalogando",
          desc: "No pierdas semanas capturando tornillos y piezas sueltas en una computadora. Registras los autos donantes que entran a tu patio y Zora se encarga del resto.",
        },
        {
          title: "Radar de Demanda en Vivo",
          desc: "Recibe notificaciones en tu teléfono únicamente cuando un cliente busca una pieza de un vehículo que tienes físicamente disponible.",
        },
        {
          title: "Responde en 1 Clic ('¡La tengo!')",
          desc: "Sin negociaciones eternas ni mensajes de curiosos. Pones tu precio neto, adjuntas foto del estado de la pieza y cierras la venta al instante.",
        },
        {
          title: "Ventas Cruzadas Binacionales",
          desc: "Accede a la demanda de clientes de San Diego, California que cruzan por piezas más económicas, y talleres mecánicos locales en B.C.",
        },
      ],
      ctaYardRegister: "Registrar mi Yonke en la Red",
      metrics: [
        { val: "3x", lbl: "Rotación de Autos Donantes" },
        { val: "10 seg", lbl: "Tiempo para Cotizar una Demanda" },
        { val: "+45%", lbl: "Ventas Adicionales por Mostrador Digital" },
      ],
    },
    crossBorder: {
      badge: "Ventaja Binacional",
      title: "El corredor de autopartes más dinámico del continente",
      subtitle: "Operando estratégicamente entre Tijuana y San Diego, Zora resuelve la asimetría entre autos ensamblados para el mercado estadounidense y versiones mexicanas.",
      highlights: [
        {
          title: "Compatibilidad Chasis US vs Nacional",
          desc: "Nuestra base de datos de IA distingue diferencias en sensores de emisiones de California (CARB), arneses eléctricos y motorizaciones entre versiones importadas y nacionales.",
        },
        {
          title: "Ahorro de hasta el 75%",
          desc: "Acceso a la gigantesca disponibilidad de vehículos donantes de aseguradoras de California con desmontaje y entrega en la franja fronteriza.",
        },
        {
          title: "Red de Talleres Asociados",
          desc: "Si no tienes mecánico para instalar la pieza, te conectamos con talleres verificados en Otay, La Mesa, Playas y Zona Río.",
        },
      ],
    },
    trust: {
      badge: "Confianza y Blindaje",
      title: "Compra piezas usadas con total certeza",
      subtitle: "Eliminamos las estafas y la incertidumbre común en compras de segunda mano.",
      features: [
        {
          title: "Inspección Fotográfica Previa",
          desc: "El yonke está obligado a enviar foto real del donante y del número de serie o código de troquelado antes de autorizar cualquier transacción.",
        },
        {
          title: "Garantía de Ajuste (Direct Fit)",
          desc: "Si la pieza no encaja en tu chasis exactamente como indicó el diagnóstico de Zora, se gestiona el cambio inmediato o devolución sin penalizaciones.",
        },
        {
          title: "Yonkes 100% Verificados",
          desc: "Solo trabajamos con negocios legalmente constituidos y recicladores autorizados con instalaciones físicas verificables.",
        },
      ],
    },
    cta: {
      title: "¿Listo para encontrar la pieza de tu auto?",
      subtitle: "Deja de gastar gasolina y horas en llamadas. Únete a la red Zora y encuentra refacciones originales de desguace en minutos.",
      driverAction: "Iniciar Búsqueda con IA",
      yardAction: "Soy Dueño de un Yonke",
    },
    footer: {
      tagline: "Ecosistema inteligente de refacciones automotrices y licitación inversa para conductores y yonkes.",
      rights: "Todos los derechos reservados.",
      madeWith: "Desarrollado con arquitectura de alta precisión y artesanía de ingeniería.",
      author: "Creado por Jesús Daniel Medina Cruz — Staff Mobile Platform Architect.",
      disclaimer: "Zora no es propietario de los patios de yonkes; opera como el puente tecnológico y de inteligencia que conecta la demanda de conductores con los inventarios de recicladores automotrices certificados.",
    },
  },
  en: {
    nav: {
      howItWorks: "How It Works",
      forYonkes: "For Salvage Yards",
      virtualGarage: "Virtual Garage",
      reverseBidding: "Reverse Auction",
      searchCTA: "Find Auto Part",
      yardAccess: "Yard Portal",
    },
    hero: {
      badgeAi: "Automotive Artificial Intelligence",
      badgeNetwork: "Certified Binational Salvage Network",
      badgeAuction: "Real-Time Reverse Bidding",
      headline: "Find the exact auto part for your car",
      headlineHighlight: "without driving across town or calling 20 salvage yards.",
      subtitle: "Describe what you need in plain words. Our AI copilot diagnoses your mechanical issue, alerts certified salvage yards simultaneously, and sparks a reverse auction where yards compete to offer you the right part at the best price.",
      searchPlaceholder: "What part or symptom does your car have? (e.g. 2017 Sentra humming transmission)",
      searchBtn: "Locate Part",
      searchChipsLabel: "Popular searches:",
      chips: [
        "2017 Nissan Sentra Transmission",
        "2019 Honda Civic LED Headlight",
        "2020 Toyota Tacoma Hood & Fender",
        "VW Jetta A6 A/C Compressor",
      ],
      metrics: [
        { value: "0%", label: "Technical Jargon Required" },
        { value: "< 15 min", label: "First Offers on Radar" },
        { value: "100%", label: "Verified Recyclers & Yards" },
        { value: "Tijuana - SD", label: "Active Binational Corridor" },
      ],
    },
    agents: {
      badge: "Two-Agent Architecture",
      title: "The intelligence connecting drivers with real salvage inventory",
      subtitle: "Unlike static scrap directories riddled with ghost inventory, Zora runs on two specialized AI agents synchronized in real time.",
      driverAgent: {
        title: "Driver Assistant",
        role: "Conversational B2C Copilot",
        description: "Translates everyday driver descriptions and steering sensations into precise manufacturer (OEM) part numbers.",
        points: [
          "Natural language parsing ('my front passenger axle is clicking on sharp turns')",
          "Proactive disambiguation of trim, engine displacement, and exact model year",
          "Automatic generation of a structured technical search request",
        ],
        samplePrompt: "\"Hey Zora, I dented the passenger door on my 2015 Sentra US-spec\"",
        parsedOutput: "OEM Match: Front Right Door Shell | B17 US Chassis | Fits 2013-2019 | Electric window regulator required.",
      },
      yonkeAgent: {
        title: "Yard Radar Agent",
        role: "B2B Logistics & Demand Engine",
        description: "Dispatches live demand alerts to registered salvage businesses under a 'fastest-finger-first' protocol.",
        points: [
          "Real-time radar without requiring yards to manually inventory thousands of loose bolts",
          "Simultaneous push notification to local yards with matching donor inventory",
          "Fastest-Finger-First model: the yard with verified stock quotes in 1 click and earns top buyer visibility",
        ],
        sampleAlert: "Radar Alert #4092: 2015 Sentra Front Right Door within 15 km radius.",
        fastestQuote: "Eagle Auto Salvage: 'In stock on donor vehicle! $120 USD ready for pull.'",
      },
    },
    phoneMockup: {
      badge: "Live Product Experience",
      title: "The power of Zora in the palm of your hand",
      subtitle: "Built for speed and zero friction: from AI conversational diagnosis to full vehicle telemetry care.",
      tabs: {
        copilot: "Copilot Chat",
        garage: "Virtual Garage",
        parts: "Parts & Radar",
      },
      copilotTab: {
        driverQuery: "I hear a popping sound around the front tire whenever I take a sharp left in my 2016 Honda CR-V.",
        aiResponse: "High probability diagnosis: Worn CV joint or torn left front drive axle boot. Verified fitment for your 2.4L Earth Dreams engine.",
        diagBadge: "DIRECT DIAGNOSIS",
        partCode: "Required Part: Front Left CV Axle Half-Shaft (OEM: 44306-T0A-A00)",
      },
      garageTab: {
        vehicle: "2016 Honda CR-V EX-L (AWD)",
        healthScore: "94% Health Score",
        telemetryNotice: "Local Telemetry Vault Active",
        fluidsStatus: "Fluids & Brakes: OK (Inspected 12 days ago)",
        nextCheck: "Next Service: Synthetic 0W-20 Oil Change in 2,400 km",
      },
      partsTab: {
        partName: "Front Left CV Axle Assembly OEM (Grade A Recycled)",
        status: "IN LOCAL YARD",
        yardName: "La Mesa Auto Recyclers - Tijuana / San Diego",
        price: "$85 USD ($1,550 MXN)",
        savings: "Savings vs Dealership: 68%",
      },
    },
    reverseAuction: {
      badge: "Dynamic Competition",
      title: "How Reverse Bidding Works",
      subtitle: "Instead of you chasing down 15 salvage yards over the phone, Zora turns the tables: salvage yards compete for your business.",
      steps: [
        {
          stepNumber: "01",
          title: "Describe your breakdown",
          desc: "Type in plain words or upload a photo of the damaged part. Zora's copilot identifies exact OEM part numbers and cross-compatible donor vehicles.",
        },
        {
          stepNumber: "02",
          title: "Simultaneous Radar Broadcast",
          desc: "Your request is immediately broadcasted to all certified auto recyclers across Tijuana, Mexicali, and San Diego.",
        },
        {
          stepNumber: "03",
          title: "Real-Time Bids Arrive",
          desc: "Yard managers verify physical yard stock and submit net pricing along with clear photos of the pulled part.",
        },
        {
          stepNumber: "04",
          title: "Choose the Best Offer",
          desc: "Compare photos, warranty terms, distance, and price. Complete purchase securely and pick up at the yard or request direct shop delivery.",
        },
      ],
    },
    yonkes: {
      badge: "Salvage Yard & Recycler Portal",
      title: "Monetize yard donor inventory without cataloging a single bolt",
      subtitle: "The number one bottleneck in auto recycling is 'ghost inventory'. Zora connects you directly with ready-to-buy drivers looking for the exact donor cars sitting in your yard right now.",
      cards: [
        {
          title: "Zero Manual Cataloging",
          desc: "Stop wasting weeks manually entering parts into old spreadsheets. Simply log donor vehicles as they roll into your facility—Zora does the rest.",
        },
        {
          title: "Live Demand Radar",
          desc: "Get notified on your phone only when a driver or shop needs a specific component from a vehicle you physically have in stock.",
        },
        {
          title: "1-Click Response ('Got It!')",
          desc: "No endlessly haggling with tire-kickers. Set your net price, snap a quick photo of the component, and close the sale immediately.",
        },
        {
          title: "Binational Cross-Border Reach",
          desc: "Unlock demand from California drivers crossing the border for cost-effective parts, plus hundreds of regional independent repair shops.",
        },
      ],
      ctaYardRegister: "Register My Yard in the Network",
      metrics: [
        { val: "3x", lbl: "Donor Vehicle Turnaround Speed" },
        { val: "10 sec", lbl: "Average Quote Dispatch Time" },
        { val: "+45%", lbl: "Incremental Countertop Sales" },
      ],
    },
    crossBorder: {
      badge: "Binational Advantage",
      title: "The continent's most dynamic automotive corridor",
      subtitle: "Operating strategically between Tijuana and San Diego, Zora bridges the gap between US-spec donor auctions and regional automotive needs.",
      highlights: [
        {
          title: "US vs Mexican Trim Cross-Compatibility",
          desc: "Our AI database automatically reconciles California emissions (CARB) sensors, electrical harness variations, and trim differences.",
        },
        {
          title: "Up to 75% Savings",
          desc: "Gain immediate access to clean donor vehicles from California insurance auctions, pulled and delivered right at the border.",
        },
        {
          title: "Partner Repair Shop Network",
          desc: "Need installation? We connect you with certified repair bays in Otay, La Mesa, Playas, and Zona Río.",
        },
      ],
    },
    trust: {
      badge: "Trust & Buyer Protection",
      title: "Buy recycled OEM parts with absolute peace of mind",
      subtitle: "We eradicate the fraud, counterfeit items, and uncertainty traditional salvage purchases are known for.",
      features: [
        {
          title: "Mandatory Photo Inspection",
          desc: "Yards are required to submit live photos of the donor vehicle and stamped OEM part numbers before any transaction is approved.",
        },
        {
          title: "Guaranteed Fitment (Direct Fit)",
          desc: "If the component does not fit your chassis exactly as diagnosed by Zora, get an instant replacement or a 100% penalty-free refund.",
        },
        {
          title: "100% Certified Physical Yards",
          desc: "We exclusively onboard officially licensed automotive recyclers with legitimate brick-and-mortar facilities.",
        },
      ],
    },
    cta: {
      title: "Ready to find the right part for your car?",
      subtitle: "Stop wasting fuel and hours making frustrating phone calls. Experience Zora's AI copilot and locate authentic recycled OEM parts in minutes.",
      driverAction: "Start AI Part Search",
      yardAction: "I Own a Salvage Yard",
    },
    footer: {
      tagline: "Intelligent automotive parts ecosystem and reverse bidding network for drivers and licensed recyclers.",
      rights: "All rights reserved.",
      madeWith: "Crafted with precision engineering and human architectural standards.",
      author: "Created by Jesús Daniel Medina Cruz — Staff Mobile Platform Architect.",
      disclaimer: "Zora is an AI software platform and does not own salvage yards directly; it operates as the intelligence and transactional bridge linking driver demand with certified automotive recyclers.",
    },
  },
};
