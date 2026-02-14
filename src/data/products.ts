import menClothingImg1 from '@/assets/men-clothing.jpg';
import menClothingImg2 from '@/assets/men-clothing-2.jpg';
import menClothingImg3 from '@/assets/men-clothing-3.jpg';
import menClothingImg4 from '@/assets/men-clothing-4.jpg';
import menClothingImg5 from '@/assets/men-clothing-5.jpg';
import menClothingImg6 from '@/assets/men-clothing-6.jpg';
import menClothingImg7 from '@/assets/men-clothing-7.jpg';
import menClothingImg8 from '@/assets/men-clothing-8.jpg';
import menClothingImg9 from '@/assets/men-clothing-9.jpg';
import menClothingImg10 from '@/assets/men-clothing-10.jpg';
import menClothingImg11 from '@/assets/men-clothing-11.jpg';
import menClothingImg12 from '@/assets/men-clothing-12.jpg';
import menClothingImg13 from '@/assets/men-clothing-13.jpg';
import menClothingImg14 from '@/assets/men-clothing-14.jpg';
import menClothingImg15 from '@/assets/men-clothing-15.jpg';
import menClothingImg16 from '@/assets/men-clothing-16.jpg';
import menClothingImg17 from '@/assets/men-clothing-17.jpg';
import menClothingImg18 from '@/assets/men-clothing-18.jpg';
import menClothingImg19 from '@/assets/men-clothing-19.jpg';
import menClothingImg20 from '@/assets/men-clothing-20.jpg';
import menBootsImg1 from '@/assets/men-boots.jpg';
import menBootsImg2 from '@/assets/men-boots-2.jpg';
import menBootsImg3 from '@/assets/men-boots-3.jpg';
import menBootsImg4 from '@/assets/men-boots-4.jpg';
import menBootsImg5 from '@/assets/men-boots-5.jpg';
import menBootsImg6 from '@/assets/men-boots-6.jpg';
import menBootsImg7 from '@/assets/men-boots-7.jpg';
import menBootsImg8 from '@/assets/men-boots-8.jpg';
import menBootsImg9 from '@/assets/men-boots-9.jpg';
import menBootsImg10 from '@/assets/men-boots-10.jpg';
import menBootsImg11 from '@/assets/men-boots-11.jpg';
import menBootsImg12 from '@/assets/men-boots-12.jpg';
import menBootsImg13 from '@/assets/men-boots-13.jpg';
import menAccessoriesImg1 from '@/assets/accessories.jpg';
import menAccessoriesImg2 from '@/assets/men-accessories-2.jpg';
import menAccessoriesImg3 from '@/assets/men-accessories-3.jpg';
import menAccessoriesImg4 from '@/assets/men-accessories-4.jpg';
import menAccessoriesImg5 from '@/assets/men-accessories-5.jpg';
import menAccessoriesImg6 from '@/assets/men-accessories-6.jpg';
import menAccessoriesImg7 from '@/assets/men-accessories-7.jpg';
import womenClothingImg1 from '@/assets/women-clothing.jpg';
import womenClothingImg2 from '@/assets/women-clothing-2.jpg';
import womenClothingImg3 from '@/assets/women-clothing-3.jpg';
import womenClothingImg4 from '@/assets/women-clothing-4.jpg';
import womenClothingImg5 from '@/assets/women-clothing-5.jpg';
import womenClothingImg6 from '@/assets/women-clothing-6.jpg';
import womenClothingImg7 from '@/assets/women-clothing-7.jpg';
import womenClothingImg8 from '@/assets/women-clothing-8.jpg';
import womenClothingImg9 from '@/assets/women-clothing-9.jpg';
import womenClothingImg10 from '@/assets/women-clothing-10.jpg';
import womenClothingImg11 from '@/assets/women-clothing-11.jpg';
import womenClothingImg12 from '@/assets/women-clothing-12.jpg';
import womenClothingImg13 from '@/assets/women-clothing-13.jpg';
import womenClothingImg14 from '@/assets/women-clothing-14.jpg';
import womenClothingImg15 from '@/assets/women-clothing-15.jpg';
import womenClothingImg16 from '@/assets/women-clothing-16.jpg';
import womenClothingImg17 from '@/assets/women-clothing-17.jpg';
import womenClothingImg18 from '@/assets/women-clothing-18.jpg';
import womenClothingImg19 from '@/assets/women-clothing-19.jpg';
import womenClothingImg20 from '@/assets/women-clothing-20.jpg';
import womenBootsImg1 from '@/assets/women-boots.jpg';
import womenBootsImg2 from '@/assets/women-boots-2.jpg';
import womenBootsImg3 from '@/assets/women-boots-3.jpg';
import womenBootsImg4 from '@/assets/women-boots-4.jpg';
import womenBootsImg5 from '@/assets/women-boots-5.jpg';
import womenBootsImg6 from '@/assets/women-boots-6.jpg';
import womenBootsImg7 from '@/assets/women-boots-7.jpg';
import womenBootsImg8 from '@/assets/women-boots-8.jpg';
import womenBootsImg9 from '@/assets/women-boots-9.jpg';
import womenBootsImg10 from '@/assets/women-boots-10.jpg';
import womenBootsImg11 from '@/assets/women-boots-11.jpg';
import womenBootsImg12 from '@/assets/women-boots-12.jpg';
import womenBootsImg13 from '@/assets/women-boots-13.jpg';
import womenAccessoriesImg1 from '@/assets/accessories.jpg';
import womenAccessoriesImg2 from '@/assets/women-accessories-2.jpg';
import womenAccessoriesImg3 from '@/assets/women-accessories-3.jpg';
import womenAccessoriesImg4 from '@/assets/women-accessories-4.jpg';
import womenAccessoriesImg5 from '@/assets/women-accessories-5.jpg';
import womenAccessoriesImg6 from '@/assets/women-accessories-6.jpg';
import womenAccessoriesImg7 from '@/assets/women-accessories-7.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'boots' | 'accessories';
  gender: 'men' | 'women';
  image: string;
}

const menClothingImages = [
  menClothingImg1, menClothingImg2, menClothingImg3, menClothingImg4, menClothingImg5,
  menClothingImg6, menClothingImg7, menClothingImg8, menClothingImg9, menClothingImg10,
  menClothingImg11, menClothingImg12, menClothingImg13, menClothingImg14, menClothingImg15,
  menClothingImg16, menClothingImg17, menClothingImg18, menClothingImg19, menClothingImg20,
];

const menBootsImages = [
  menBootsImg1, menBootsImg2, menBootsImg3, menBootsImg4, menBootsImg5,
  menBootsImg6, menBootsImg7, menBootsImg8, menBootsImg9, menBootsImg10,
  menBootsImg11, menBootsImg12, menBootsImg13,
];

const menAccessoriesImages = [
  menAccessoriesImg1, menAccessoriesImg2, menAccessoriesImg3, menAccessoriesImg4, menAccessoriesImg5,
  menAccessoriesImg6, menAccessoriesImg7,
];

const womenClothingImages = [
  womenClothingImg1, womenClothingImg2, womenClothingImg3, womenClothingImg4, womenClothingImg5,
  womenClothingImg6, womenClothingImg7, womenClothingImg8, womenClothingImg9, womenClothingImg10,
  womenClothingImg11, womenClothingImg12, womenClothingImg13, womenClothingImg14, womenClothingImg15,
  womenClothingImg16, womenClothingImg17, womenClothingImg18, womenClothingImg19, womenClothingImg20,
];

const womenBootsImages = [
  womenBootsImg1, womenBootsImg2, womenBootsImg3, womenBootsImg4, womenBootsImg5,
  womenBootsImg6, womenBootsImg7, womenBootsImg8, womenBootsImg9, womenBootsImg10,
  womenBootsImg11, womenBootsImg12, womenBootsImg13,
];

const womenAccessoriesImages = [
  womenAccessoriesImg1, womenAccessoriesImg2, womenAccessoriesImg3, womenAccessoriesImg4, womenAccessoriesImg5,
  womenAccessoriesImg6, womenAccessoriesImg7,
];

// Men's Collection — 20 clothing, 13 boots, 7 accessories = 40 products
const menClothingData: [string, number][] = [
  ['Midnight Tailored Blazer', 2450],
  ['Cashmere Crew Neck Sweater', 890],
  ['Silk Evening Shirt', 1200],
  ['Double-Breasted Overcoat', 3800],
  ['Navy Double-Breasted Blazer', 1950],
  ['Camel Cashmere Overcoat', 3200],
  ['Charcoal Wool Turtleneck', 750],
  ['Linen Summer Blazer', 1950],
  ['Velvet Dinner Jacket', 2900],
  ['Herringbone Tweed Jacket', 2680],
  ['Quilted Field Jacket', 2100],
  ['Black Three-Piece Suit', 3500],
  ['Cable Knit Sweater', 760],
  ['Italian Cotton Dress Shirt', 580],
  ['Pinstripe Wool Suit', 4200],
  ['Navy Wool Peacoat', 2850],
  ['Suede Bomber Jacket', 2200],
  ['Cashmere V-Neck Cardigan', 920],
  ['Olive Tailored Trousers', 680],
  ['Linen Pleated Dress Pants', 750],
];

const menBootsData: [string, number][] = [
  ['Chelsea Leather Boots', 1200],
  ['Suede Desert Boots', 890],
  ['Polished Oxford Shoes', 1450],
  ['Monk Strap Shoes', 1350],
  ['Italian Leather Loafers', 980],
  ['Brogue Wing-Tip Boots', 1580],
  ['Jodhpur Ankle Boots', 1250],
  ['Combat Sole Derby', 1100],
  ['Burnished Cap-Toe Boots', 1680],
  ['Patent Leather Dress Shoes', 1750],
  ['Cognac Wingtip Boots', 1620],
  ['Navy Suede Chukka Boots', 1050],
  ['Black Polished Dress Boots', 1480],
];

const menAccessoriesData: [string, number][] = [
  ['Silk Pocket Square Set', 280],
  ['Italian Leather Belt', 450],
  ['Wool Fedora Hat', 480],
  ['Leather Weekend Bag', 1800],
  ['Silk Bow Tie', 620],
  ['Leather Messenger Bag', 1650],
  ['Cashmere Scarf', 380],
];

// Women's Collection — 20 clothing, 13 boots, 7 accessories = 40 products
const womenClothingData: [string, number][] = [
  ['Silk Draped Evening Gown', 4500],
  ['Tailored Wool Blazer', 2200],
  ['Cashmere Wrap Dress', 1950],
  ['Pleated Midi Skirt', 1100],
  ['Emerald Silk Evening Gown', 5200],
  ['Ivory Cashmere Wrap Coat', 3200],
  ['Tailored Black Jumpsuit', 2400],
  ['Blush Pleated Midi Skirt', 1350],
  ['Cropped Tweed Jacket', 1880],
  ['Off-Shoulder Cocktail Dress', 2800],
  ['Wide-Leg Palazzo Pants', 1350],
  ['Oversized Cashmere Sweater', 1250],
  ['Velvet Wrap Skirt', 980],
  ['Silk Charmeuse Blouse', 850],
  ['Sequin Evening Top', 1100],
  ['Emerald Silk Wrap Blouse', 1450],
  ['Camel Tailored Wool Coat', 3400],
  ['Champagne Satin Midi Dress', 2650],
  ['Ivory Cashmere Turtleneck', 980],
  ['Black Blazer Dress', 2100],
];

const womenBootsData: [string, number][] = [
  ['Knee-High Leather Boots', 1800],
  ['Pointed Ankle Boots', 1350],
  ['Suede Tall Boots', 2200],
  ['Block Heel Chelsea Boots', 1100],
  ['Pointed Ankle Boots Nude', 1450],
  ['Western Inspired Boots', 1250],
  ['Lug Sole Combat Boots', 1050],
  ['Crystal-Heel Ankle Boots', 2800],
  ['Classic Leather Pumps', 980],
  ['Velvet Platform Boots', 1650],
  ['Burgundy Stiletto Boots', 1780],
  ['Over-the-Knee Suede Boots', 2450],
  ['Pearl Platform Shoes', 1150],
];

const womenAccessoriesData: [string, number][] = [
  ['Structured Leather Handbag', 2400],
  ['Silk Print Scarf', 580],
  ['Structured Black Handbag', 2100],
  ['Crystal Evening Clutch', 1950],
  ['Pearl Strand Necklace', 520],
  ['Cognac Leather Tote', 1850],
  ['Floral Silk Scarf', 650],
];

function createProduct(
  name: string,
  price: number,
  category: 'clothing' | 'boots' | 'accessories',
  gender: 'men' | 'women',
  image: string,
  index: number
): Product {
  return {
    id: `${gender}-${category}-${index}`,
    name,
    price,
    category,
    gender,
    image,
  };
}

export const menProducts: Product[] = [
  ...menClothingData.map(([name, price], i) =>
    createProduct(name, price, 'clothing', 'men', menClothingImages[i], i)
  ),
  ...menBootsData.map(([name, price], i) =>
    createProduct(name, price, 'boots', 'men', menBootsImages[i], i)
  ),
  ...menAccessoriesData.map(([name, price], i) =>
    createProduct(name, price, 'accessories', 'men', menAccessoriesImages[i], i)
  ),
];

export const womenProducts: Product[] = [
  ...womenClothingData.map(([name, price], i) =>
    createProduct(name, price, 'clothing', 'women', womenClothingImages[i], i)
  ),
  ...womenBootsData.map(([name, price], i) =>
    createProduct(name, price, 'boots', 'women', womenBootsImages[i], i)
  ),
  ...womenAccessoriesData.map(([name, price], i) =>
    createProduct(name, price, 'accessories', 'women', womenAccessoriesImages[i], i)
  ),
];
