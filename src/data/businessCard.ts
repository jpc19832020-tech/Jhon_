const basePath = import.meta.env.BASE_URL;

export type ContactActionKey = "phone" | "email" | "website";
export type ContactActionIcon = "Phone" | "Mail" | "Globe";
export type TagIconKey = "MapPin" | "CalendarClock";

export interface ContactActionConfig {
  key: ContactActionKey;
  label: string;
  detail: string;
  icon: ContactActionIcon;
  feedback: string;
}

export interface HeroConfig {
  badge: string;
  name: string;
  title: string;
  companyName: string;
  companyDescription: string;
  addresses: Array<{ label: string; value: string }>;
  tags: Array<{ label: string; variant: "default" | "outline"; icon?: TagIconKey }>;
  specialization: {
    label: string;
    items: Array<{ label: string; description: string }>;
  };
}

export interface ContactConfig {
  sectionLabel: string;
  actions: ContactActionConfig[];
  whatsappNumber: string;
  whatsappMessage: string;
  email: {
    address: string;
    subject: string;
    body: string;
  };
  websiteUrl: string;
  quickActions: {
    downloadLabel: string;
    shareLabel: string;
  };
  shareMetadata: {
    title: string;
    text: string;
  };
  feedback: {
    download: string;
    shareSuccess: string;
    shareClipboard: string;
    sharePrompt: string;
    shareError: string;
  };
}

export interface GallerySlide {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryConfig {
  overlayLabel: string;
  sectionTitle: string;
  slides: GallerySlide[];
  cta?: {
    label: string;
    url: string;
  };
}

export interface InsightsConfig {
  company: {
    subtitle: string;
    title: string;
    bullets: string[];
  };
}

export interface ClosingConfig {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface VCardConfig {
  lastName: string;
  firstName: string;
  fullName: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  url: string;
  address: string;
  note: string;
  downloadName: string;
}

export interface BusinessCardConfig {
  assets: {
    backgroundImage: string;
    logoImage: string;
    profileImage: {
      src: string;
      alt: string;
    };
  };
  hero: HeroConfig;
  contact: ContactConfig;
  gallery: GalleryConfig;
  insights: InsightsConfig;
  closing: ClosingConfig;
  vcard: VCardConfig;
}

export const businessCardConfig: BusinessCardConfig = {
  assets: {
    backgroundImage: `${basePath}imagenes/09.jpeg`,
    logoImage: `${basePath}imagenes/Foton-logo-01.png`,
    profileImage: {
      src: `${basePath}imagenes/otras fotos/JP.1.png`,
      alt: "Foto de perfil de Jhon Carlos",
    },
  },
  hero: {
    badge: "FOTON Perú",
    name: "Jhon Carlos P├⌐rez Cubas",
    title: "Gerente comercial - Per├║ | FOTON",
    companyName: "Foton International Trade Co., Ltd.",
    companyDescription:
      "Estrategia comercial & Representaci├│n de Marca.",
    addresses: [
      { label: "Direcci├│n Beijing", value: "No.15, Shayang Rd., Changping, Beijing 102206, China" },
      { label: "Direcci├│n Lima", value: "Av. Guardia Civil 1321, Int. 802, Surquillo, Lima, Per├║" },
    ],
    tags: [
      { label: "Per├║", variant: "default" },
      { label: "Lima", variant: "outline", icon: "MapPin" },
    ],
    specialization: {
      label: "Representante",
      items: [
        { label: "PICKUP", description: "" },
        { label: "VAN", description: "" },
        { label: "MINIBUS", description: "" },
        { label: "MINITRUCK", description: "" },
        { label: "LDT", description: "" },
      ],
    },
  },
  contact: {
    sectionLabel: "Canales de contacto",
    actions: [
      {
        key: "phone",
        label: "Tel├⌐fono",
        detail: "+51 937 375 605",
        icon: "Phone",
        feedback: "Abriendo WhatsApp",
      },
      {
        key: "email",
        label: "Correo",
        detail: "jhoncarlosperezcubas@gmail.com",
        icon: "Mail",
        feedback: "Redactando correo",
      },
      {
        key: "website",
        label: "Sitio web",
        detail: "www.fotonmotor.com",
        icon: "Globe",
        feedback: "Abriendo sitio web",
      },
    ],
    whatsappNumber: "51937375605",
    whatsappMessage:
      "Hola Jhon, vi tu tarjeta de presentaci├│n y me gustar├¡a contactarte.",
    email: {
      address: "jhoncarlosperezcubas@gmail.com",
      subject: "Consulta - Tarjeta FOTON",
      body: "Hola Jhon,\n\nTe contacto desde tu tarjeta de presentaci├│n.\n\nGracias,",
    },
    websiteUrl: "https://www.fotonmotor.com",
    quickActions: {
      downloadLabel: "Descargar vCard",
      shareLabel: "Compartir tarjeta",
    },
    shareMetadata: {
      title: "Tarjeta Virtual FOTON - Jhon Carlos P├⌐rez Cubas",
      text: "Conoce la tarjeta de presentaci├│n virtual de Jhon Carlos P├⌐rez Cubas (FOTON).",
    },
    feedback: {
      download: "Descargando vCard de Jhon Carlos",
      shareSuccess: "Tarjeta compartida correctamente",
      shareClipboard: "Enlace copiado al portapapeles",
      sharePrompt: "Comparte el enlace copiado",
      shareError: "No fue posible compartir en este dispositivo",
    },
  },
  gallery: {
    overlayLabel: "Galer├¡a corporativa FOTON",
    sectionTitle: "Galer├¡a",
    slides: [
      {
        src: `${basePath}imagenes/otras fotos/F1.jpeg`,
        alt: "Camiones FOTON alineados frente a un centro log├¡stico",
        caption: "Soluciones de carga pesada adaptadas al mercado peruano.",
      },
      {
        src: `${basePath}imagenes/otras fotos/F2.jpg`,
        alt: "Flota de veh├¡culos ligeros FOTON en exhibici├│n",
        caption: "Eficiencia para transporte urbano y distribuci├│n de ├║ltima milla.",
      },
      {
        src: `${basePath}imagenes/otras fotos/F3.jpg`,
        alt: "Cami├│n FOTON en carretera andina",
        caption: "Rendimiento comprobado en rutas de alta exigencia.",
      },
    ],
    cta: {
      label: "Probar vista 720┬░",
      url: "https://zhanting2023.foton.com.cn/p4_9/",
    },
  },
  insights: {
    company: {
      subtitle: "FOTON",
      title: "Innovaci├│n y soporte integral",
      bullets: [
        "Cadena de suministro optimizada para proyectos industriales, miner├¡a y construcci├│n.",
        "Soporte t├⌐cnico y capacitaci├│n personalizada para flotas en operaci├│n en Per├║.",
        "Red global de repuestos y servicios con presencia en m├ís de 110 pa├¡ses.",
      ],
    },
  },
  closing: {
    title: "Compromiso con cada entrega",
    description: "Construyamos juntos soluciones de transporte confiables para tu negocio.",
    image: {
      src: `${basePath}imagenes/otras fotos/GF1.jpeg`,
      alt: "Equipo comercial de FOTON internacional reunido",
    },
  },
  vcard: {
    lastName: "P├⌐rez Cubas",
    firstName: "Jhon Carlos",
    fullName: "Jhon Carlos P├⌐rez Cubas",
    organization: "Foton International Trade Co., Ltd.",
    title: "Business Manager",
    email: "jhoncarlosperezcubas@gmail.com",
    phone: "+51937375605",
    url: "https://www.fotonmotor.com",
    address: "No.15, Shayang Road, Shahe, Changping District, Beijing 102206, China",
    note: "Tarjeta virtual de Jhon Carlos P├⌐rez Cubas - Foton International Trade Co., Ltd.",
    downloadName: "Jhon_Carlos_Perez_Cubas.vcf",
  },
};




