import tartar from './tartar_misto.png';
import tataki from './tuna_tataki.png';
import sakedon from './sakedon_mix.png';
import dolci from './tiramisu.png';
import drinks from './sapporo.jpg';

// Import antipasti dishes
import ebi from './ebi_kataifi.png';
import edamame from './edamame.png';
import wakame from './goma_wakame.png';
import polipo from './insalata_polipo.png';
import ravioli from './ravioli_cristallo.png';

export const antipastiDishes = [
  /**
   * Paste one or more documents here
   */
  {
    name: 'Tartar Mix',
    description: 'tartar di pesci misti',
    category: 'primi',
    price: 10.0,
    addedIngredients: '',
    photo: '',
  },

  {
    name: 'Nigiri Mix',
    description: '',
    category: 'secondi',
    price: 8.0,
    addedIngredients: '',
    photo: '',
  },
  {
    name: 'Profiterole Nero',
    description:
      ' bignè riempito di crema pasticcera, crema chantilly, panna o gelato e ricoperto con una crema di cioccolato o di caramello',
    category: 'dessert',
    price: 3.5,
    addedIngredients: '',
    photo: '',
  },
  {
    name: 'Goma Wakame',
    description: 'alghe piccanti marinate con sesamo',
    category: 'antipasti',
    price: 5.0,
    addedIngredients: '',
    photo: wakame,
  },
  {
    name: 'Asahi',
    description: 'birra giapponese',
    category: 'drink',
    price: 3.5,
    addedIngredients: '',
    photo: '',
  },
  {
    name: 'Ravioli Cristallo',
    description: 'ravioli di gamberi',
    category: 'antipasti',
    price: 4.0,
    addedIngredients: '',
    photo: ravioli,
  },
];

export const menuList = [
  {
    name: 'antipasti',
    photo: tartar,
  },
  {
    name: 'primi',
    photo: tataki,
  },
  {
    name: 'secondi',
    photo: sakedon,
  },
  {
    name: 'dessert',
    photo: dolci,
  },
  {
    name: 'drink',
    photo: drinks,
  },
];
