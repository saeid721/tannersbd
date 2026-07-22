/**
 * Application-wide configuration
 * All env vars are centralized here — never read process.env directly in components
 */

const config = {
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.noakhaliclub.org/v1',
    timeout: 10000,
  },
  site: {
    name: import.meta.env.VITE_APP_NAME || 'Noakhali Club Dhaka Ltd.',
    tagline: 'Excellence on the Water Since 2017',
    email: 'noakhlaiclubdhaka@yahoo.com',
    telephone: '+880-2-9337933, 9330963, 9353854',
    phone: '+88 01713005821, +88 01973005821',
    address: 'Gaus-E-Pak Bhaban, 17th Floor, 28/G/1 Toyenbee Circular Road, Motijheel C/A, Dhaka-1000',
    foundedYear: 2017,
  },
  features: {
    onlineReservation: true,
    galleryLightbox: true,
  },
  social: {
    facebook: 'https://facebook.com/noakhaliclubdhaka',
    instagram: 'https://instagram.com/noakhaliclubdhaka',
    linkedin: 'https://linkedin.com/company/noakhaliclubdhaka',
    twitter: 'https://twitter.com/noakhaliclubdhaka',
  },
};

export default config;
