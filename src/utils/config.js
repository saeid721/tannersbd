/**
 * Application-wide configuration
 * All env vars are centralized here — never read process.env directly in components
 */

const config = {
  api: {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.tannersbd.com/v1',
    timeout: 10000,
  },
  site: {
    name: import.meta.env.VITE_APP_NAME || 'Bangladesh Tanners Association',
    tagline: "Empowering Bangladesh's Leather Industry Since 1963",
    email: 'tanners@net2bd.com',
    telephone: '02223312024, 02223312025',
    phone: '+8801703-248923',
    address: 'Concord Sohel Square, 9-A, 9th Floor, Plot # 775(old), 75(new), Satmasjid Road, Dhanmondi-27, Dhaka-1209.',
    foundedYear: 1963,
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
