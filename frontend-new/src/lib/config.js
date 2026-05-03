import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
  baseURL: API,
  withCredentials: true,
});

// Attach token from localStorage (fallback when cookies blocked cross-domain)
api.interceptors.request.use((cfg) => {
  const t = typeof window !== 'undefined' ? window.localStorage.getItem('dbm-token') : null;
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

export const IMAGES = {
  heroPort:
    'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=80',
  heroPortAlt:
    'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1600&q=80',
  aboutOffice:
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
  coffee:
    'https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1200&q=80',
  customs:
    'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80',
  warehouse:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  container:
    'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80',
  cpo:
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
  trade:
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
  team:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  logistics:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
  // Commodity sector images
  coffeeImg: 'https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=800&q=80',
  cpoImg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
  fertilizerImg: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  vegetableImg: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80',
  applianceImg: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=800&q=80',
  generalImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
};

export const COMPANY = {
  name: 'PT. Dira Baraka Mulia',
  short: 'DBM',
  phone: '+62 812-6488-2678',
  phoneDigits: '6281264882678',
  email: 'info@dira.co.id',
  address: 'Grand Jati Junction Mall, Level P1 No. 3A, Jl. Perintis Kemerdekaan, Medan Timur 20231',
  nib: '2103230032415',
  npwp: '40.280.287.0-113.000',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Grand+Jati+Junction+Mall+Medan&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Grand+Jati+Junction+Mall,+Medan+Timur',
};
