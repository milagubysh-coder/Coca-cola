import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Coca-Cola Classic',
    slug: 'coca-cola-classic',
    category: 'soda',
    description: 'The real thing. Refreshing since 1886.',
    longDescription: 'The world’s favorite soft drink. Coca-Cola Classic is the original sparkling beverage that has been sharing happiness for generations. With its unique, crisp taste and iconic red branding, it is the ultimate refreshment.',
    price: 1.89,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1600&auto=format&fit=crop',
    color: '#F40009',
    nutrition: {
      calories: 140,
      sugar: '39g',
      fat: '0g',
      sodium: '45mg'
    },
    ingredients: ['Carbonated Water', 'High Fructose Corn Syrup', 'Caramel Color', 'Phosphoric Acid', 'Natural Flavors', 'Caffeine'],
    tags: ['Iconic', 'Original', 'Sparkling'],
    featured: true
  },
  {
    id: '2',
    name: 'Coca-Cola Zero Sugar',
    slug: 'coca-cola-zero-sugar',
    category: 'soda',
    description: 'Same great taste, zero sugar.',
    longDescription: 'Coca-Cola Zero Sugar offers the great taste of Coca-Cola without the sugar. Optimized for a taste that is even closer to the original, it’s refreshing, crisp, and calorie-free.',
    price: 1.89,
    image: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?q=80&w=1000&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1594498653385-d5172b532c00?q=80&w=1600&auto=format&fit=crop',
    color: '#000000',
    nutrition: {
      calories: 0,
      sugar: '0g',
      fat: '0g',
      sodium: '40mg'
    },
    ingredients: ['Carbonated Water', 'Caramel Color', 'Phosphoric Acid', 'Aspartame', 'Potassium Benzoate', 'Natural Flavors', 'Potassium Citrate', 'Ace-K', 'Caffeine'],
    tags: ['Zero Sugar', 'Zero Calories', 'Refreshing'],
    featured: true
  },
  {
    id: '3',
    name: 'Sprite',
    slug: 'sprite',
    category: 'soda',
    description: 'Crisp, clean, lemon-lime refreshment.',
    longDescription: 'Sprite is the world’s leading lemon-lime flavored soft drink. It contains 100% natural flavors and no caffeine, offering a cool, refreshing hit to your thirst.',
    price: 1.79,
    image: 'https://images.unsplash.com/photo-1625772290748-390b1df0f031?q=80&w=1000&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1625772290748-390b1df0f031?q=80&w=1600&auto=format&fit=crop',
    color: '#008B45',
    nutrition: {
      calories: 140,
      sugar: '38g',
      fat: '0g',
      sodium: '65mg'
    },
    ingredients: ['Carbonated Water', 'High Fructose Corn Syrup', 'Citric Acid', 'Natural Flavors', 'Sodium Citrate', 'Sodium Benzoate'],
    tags: ['Lemon-Lime', 'Caffeine-Free', 'Crisp'],
    featured: true
  },
  {
    id: '4',
    name: 'Smartwater',
    slug: 'smartwater',
    category: 'water',
    description: 'Vapor-distilled water with electrolytes for taste.',
    longDescription: 'Smartwater is inspired by the clouds. Vapor-distilled for purity and enhanced with electrolytes for a crisp, clean taste. Stay smart, stay hydrated.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1559839914-16aae1941df3?q=80&w=1000&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1559839914-16aae1941df3?q=80&w=1600&auto=format&fit=crop',
    color: '#00AEEF',
    nutrition: {
      calories: 0,
      sugar: '0g',
      fat: '0g',
      sodium: '0mg'
    },
    ingredients: ['Vapor Distilled Water', 'Calcium Chloride', 'Magnesium Chloride', 'Potassium Bicarbonate'],
    tags: ['Pure', 'Distilled', 'Hydration'],
    featured: false
  }
];
