export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'soda' | 'water' | 'energy' | 'juice';
  description: string;
  longDescription: string;
  price: number;
  image: string;
  heroImage: string;
  color: string;
  nutrition: {
    calories: number;
    sugar: string;
    fat: string;
    sodium: string;
  };
  ingredients: string[];
  tags: string[];
  featured?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
