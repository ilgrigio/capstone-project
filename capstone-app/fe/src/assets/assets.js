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
  {
    // id: 1,
    name: 'Ebi Kataifi',
    description: 'gamberi avvolti dalla pasta kataifi fritta',
    category: 'antipasti',
    price: 6,
    addedIngredients: '',
    photo: ebi,
  },
  {
    // id: 2,
    name: 'Edamame',
    description: 'baccelli di soia',
    category: 'antipasti',
    price: 4,
    addedIngredients: '',
    photo: edamame,
  },
  {
    // id: 3,
    name: 'Goma Wakame',
    description: 'alghe piccanti marinate con sesamo',
    category: 'antipasti',
    price: 5,
    addedIngredients: '',
    photo: wakame,
  },
  {
    // id: 4,
    name: 'Insalata di Polipo',
    description: 'insalata di polipo e rucola',
    category: 'antipasti',
    price: 8,
    addedIngredients: '',
    photo: polipo,
  },
  {
    // id: 5,
    name: 'Ravioli Cristallo',
    description: 'ravioli di gamberi',
    category: 'antipasti',
    price: 4,
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
