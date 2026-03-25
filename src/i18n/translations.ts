export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      products: 'Productos',
      blog: 'Blog',
      contact: 'Contacto',
    },
    hero: {
      title: 'Marcapáginas hechos con alma',
      subtitle: 'Acuarela, flores secas y palabras que permanecen',
      cta: 'Haz tu pedido',
      ctaWhatsapp: 'Escríbenos',
    },
    about: {
      title: 'Sobre Mí',
      p1: 'Cada marcapáginas nace de un momento de calma. Pinto con acuarela sobre papel de algodón, eligiendo colores que evocan la naturaleza y la serenidad.',
      p2: 'Las flores secas que utilizo son recogidas y prensadas a mano, conservando su delicadeza original. Cada pieza es única e irrepetible.',
      p3: 'Creo estos marcapáginas para que tus palabras más especiales tengan un lugar donde vivir para siempre.',
    },
    product: {
      title: 'Nuestro Producto',
      subtitle: 'Un regalo que cuenta tu historia',
      features: [
        { title: 'Pintado a mano', desc: 'Cada pieza es única, pintada con acuarela artesanal sobre papel de algodón de alta calidad.' },
        { title: 'Flores secas naturales', desc: 'Flores prensadas y preservadas que aportan textura y belleza orgánica.' },
        { title: 'Personalización', desc: 'Escribe tu propia frase, verso o dedicatoria. También puedo elegir una frase especial para ti.' },
        { title: 'Plastificado duradero', desc: 'Laminado protector que preserva la belleza del marcapáginas durante años.' },
      ],
    },
    personalization: {
      title: 'Hazlo Tuyo',
      subtitle: 'Personaliza tu marcapáginas con las palabras que más importan',
      option1: 'Escribe tu propia frase, verso o dedicatoria personal',
      option2: 'Déjame elegir una frase poética especial para ti',
    },
    pricing: {
      title: 'Precios',
      subtitle: 'Elige la cantidad que necesitas',
      tiers: [
        { name: 'Personal', range: '1 – 10 uds.', price: '8€', unit: '/unidad', desc: 'Perfecto para un regalo especial o un detalle personal.' },
        { name: 'Evento', range: '10 – 50 uds.', price: '6€', unit: '/unidad', desc: 'Ideal para bodas, comuniones, bautizos y celebraciones.' },
        { name: 'Mayorista', range: '50+ uds.', price: '4€', unit: '/unidad', desc: 'Para grandes eventos, tiendas o proyectos especiales.' },
      ],
      cta: 'Solicitar presupuesto',
    },
    occasions: {
      title: 'Para Cada Momento',
      items: ['Bodas', 'Comuniones', 'Bautizos', 'Cumpleaños', 'Aniversarios', 'Navidad', 'Día de la Madre', 'Regalos corporativos'],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Inspiración y novedades',
      readMore: 'Leer más',
      posts: [
        { title: 'El arte de regalar con significado', excerpt: 'Descubre por qué un marcapáginas personalizado es el regalo perfecto para quienes aman la lectura y los detalles únicos.', date: '15 Mar 2026' },
        { title: 'Flores secas: belleza que perdura', excerpt: 'Cada flor prensada guarda la esencia de un momento. Conoce el proceso artesanal detrás de nuestros marcapáginas.', date: '8 Mar 2026' },
        { title: 'Marcapáginas para tu boda', excerpt: 'Ideas inspiradoras para usar marcapáginas artesanales como detalles de boda que tus invitados guardarán para siempre.', date: '1 Mar 2026' },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Cuéntanos tu idea y crearemos algo especial para ti',
      name: 'Nombre',
      phone: 'Teléfono',
      message: 'Tu mensaje (incluye tu frase personalizada)',
      send: 'Enviar mensaje',
      whatsapp: 'Contactar por WhatsApp',
      success: '¡Mensaje enviado! Te responderemos pronto.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      tagline: 'Hecho con amor y acuarela',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'Bookmarks made with soul',
      subtitle: 'Watercolor, dried flowers and words that last',
      cta: 'Place your order',
      ctaWhatsapp: 'Write to us',
    },
    about: {
      title: 'About Me',
      p1: 'Each bookmark is born from a moment of calm. I paint with watercolor on cotton paper, choosing colors that evoke nature and serenity.',
      p2: 'The dried flowers I use are hand-picked and pressed, preserving their original delicacy. Each piece is unique and unrepeatable.',
      p3: 'I create these bookmarks so your most special words have a place to live forever.',
    },
    product: {
      title: 'Our Product',
      subtitle: 'A gift that tells your story',
      features: [
        { title: 'Hand-painted', desc: 'Each piece is unique, painted with artisan watercolor on high-quality cotton paper.' },
        { title: 'Natural dried flowers', desc: 'Pressed and preserved flowers that add texture and organic beauty.' },
        { title: 'Customization', desc: 'Write your own phrase, verse or dedication. I can also choose a special phrase for you.' },
        { title: 'Durable lamination', desc: 'Protective lamination that preserves the beauty of the bookmark for years.' },
      ],
    },
    personalization: {
      title: 'Make It Yours',
      subtitle: 'Personalize your bookmark with the words that matter most',
      option1: 'Write your own phrase, verse or personal dedication',
      option2: 'Let me choose a special poetic phrase for you',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose the quantity you need',
      tiers: [
        { name: 'Personal', range: '1 – 10 units', price: '8€', unit: '/unit', desc: 'Perfect for a special gift or personal detail.' },
        { name: 'Event', range: '10 – 50 units', price: '6€', unit: '/unit', desc: 'Ideal for weddings, communions, baptisms and celebrations.' },
        { name: 'Wholesale', range: '50+ units', price: '4€', unit: '/unit', desc: 'For large events, shops or special projects.' },
      ],
      cta: 'Request a quote',
    },
    occasions: {
      title: 'For Every Moment',
      items: ['Weddings', 'Communions', 'Baptisms', 'Birthdays', 'Anniversaries', 'Christmas', "Mother's Day", 'Corporate gifts'],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Inspiration and news',
      readMore: 'Read more',
      posts: [
        { title: 'The art of meaningful gifting', excerpt: 'Discover why a personalized bookmark is the perfect gift for those who love reading and unique details.', date: 'Mar 15, 2026' },
        { title: 'Dried flowers: enduring beauty', excerpt: 'Each pressed flower holds the essence of a moment. Learn about the artisan process behind our bookmarks.', date: 'Mar 8, 2026' },
        { title: 'Bookmarks for your wedding', excerpt: 'Inspiring ideas for using artisan bookmarks as wedding favors your guests will treasure forever.', date: 'Mar 1, 2026' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Tell us your idea and we will create something special for you',
      name: 'Name',
      phone: 'Phone',
      message: 'Your message (include your personalized phrase)',
      send: 'Send message',
      whatsapp: 'Contact via WhatsApp',
      success: 'Message sent! We will reply soon.',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Made with love and watercolor',
    },
  },
} as const;
