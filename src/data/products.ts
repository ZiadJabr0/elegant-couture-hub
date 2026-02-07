import menClothingImg from '@/assets/men-clothing.jpg';
import menBootsImg from '@/assets/men-boots.jpg';
import womenClothingImg from '@/assets/women-clothing.jpg';
import womenBootsImg from '@/assets/women-boots.jpg';
import accessoriesImg from '@/assets/accessories.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'boots' | 'accessories';
  gender: 'men' | 'women';
  image: string;
}

const imageMap = {
  men: {
    clothing: menClothingImg,
    boots: menBootsImg,
    accessories: accessoriesImg,
  },
  women: {
    clothing: womenClothingImg,
    boots: womenBootsImg,
    accessories: accessoriesImg,
  },
};

function createProduct(
  name: string,
  price: number,
  category: 'clothing' | 'boots' | 'accessories',
  gender: 'men' | 'women',
  index: number
): Product {
  return {
    id: `${gender}-${category}-${index}`,
    name,
    price,
    category,
    gender,
    image: imageMap[gender][category],
  };
}

const menClothingData: [string, number][] = [
  ['Midnight Tailored Blazer', 2450],
  ['Cashmere Crew Neck Sweater', 890],
  ['Silk Evening Shirt', 1200],
  ['Double-Breasted Overcoat', 3800],
  ['Slim Fit Chino Trousers', 680],
  ['Merino Wool Turtleneck', 750],
  ['Linen Summer Blazer', 1950],
  ['Structured Wool Vest', 1100],
  ['Italian Cotton Dress Shirt', 580],
  ['Peak Lapel Dinner Jacket', 4200],
  ['Relaxed Cashmere Cardigan', 1350],
  ['Pleated Wide-Leg Trousers', 920],
  ['Brushed Flannel Shirt', 480],
  ['Corduroy Sport Coat', 1780],
  ['Ribbed Knit Polo', 520],
  ['Herringbone Tweed Jacket', 2680],
  ['Stretch Wool Suit Trousers', 780],
  ['Quilted Field Jacket', 2100],
  ['French Cuff Evening Shirt', 680],
  ['Mohair Blend Sweater', 1050],
  ['Single-Breasted Navy Suit', 3500],
  ['Pinstripe Wool Trousers', 850],
  ['Velvet Smoking Jacket', 2900],
  ['Cotton Poplin Shirt', 420],
  ['Shawl Collar Cardigan', 980],
  ['Charcoal Dress Trousers', 720],
  ['Houndstooth Blazer', 2200],
  ['Cable Knit Sweater', 760],
  ['Tailored Bermuda Shorts', 580],
  ['Chambray Weekend Shirt', 450],
];

const menBootsData: [string, number][] = [
  ['Chelsea Leather Boots', 1200],
  ['Suede Desert Boots', 890],
  ['Polished Oxford Shoes', 1450],
  ['Monk Strap Boots', 1350],
  ['Italian Leather Loafers', 980],
  ['Brogue Wing-Tip Boots', 1580],
  ['Jodhpur Ankle Boots', 1250],
  ['Combat Sole Derby', 1100],
  ['Burnished Cap-Toe Boots', 1680],
  ['Zip-Side Ankle Boots', 1050],
  ['Patent Leather Dress Shoes', 1750],
  ['Rugged Hiking Boots', 1400],
  ['Moccasin Driving Shoes', 780],
  ['Lace-Up Military Boots', 1320],
  ['Penny Loafer Classic', 920],
];

const menAccessoriesData: [string, number][] = [
  ['Silk Pocket Square Set', 280],
  ['Italian Leather Belt', 450],
  ['Cashmere Scarf', 520],
  ['Silver Cufflinks', 380],
  ['Leather Card Holder', 320],
  ['Wool Fedora Hat', 480],
  ['Silk Knit Tie', 350],
  ['Leather Weekend Bag', 1800],
  ['Tortoiseshell Sunglasses', 620],
  ['Merino Wool Gloves', 280],
];

const womenClothingData: [string, number][] = [
  ['Silk Draped Evening Gown', 4500],
  ['Tailored Wool Blazer', 2200],
  ['Cashmere Wrap Dress', 1950],
  ['Pleated Midi Skirt', 1100],
  ['Structured Peplum Top', 780],
  ['Organza Ball Gown', 6200],
  ['Wide-Leg Palazzo Pants', 1350],
  ['Off-Shoulder Cocktail Dress', 2800],
  ['Cropped Tweed Jacket', 1880],
  ['High-Waist Tailored Trousers', 920],
  ['Silk Charmeuse Blouse', 850],
  ['Embroidered Tulle Dress', 3600],
  ['Wool Crepe Coat', 3200],
  ['Fitted Sheath Dress', 1680],
  ['Lace Detail Camisole', 580],
  ['Oversized Cashmere Sweater', 1250],
  ['Velvet Wrap Skirt', 980],
  ['Double-Faced Wool Cape', 2800],
  ['Sequin Evening Top', 1100],
  ['Satin Wide-Leg Jumpsuit', 2400],
  ['Bouclé Cropped Jacket', 1950],
  ['Knife-Pleat Maxi Skirt', 1450],
  ['Silk Button-Down Shirt', 680],
  ['Feather-Trim Cocktail Dress', 3800],
  ['Merino Knit Twin Set', 1200],
  ['Leather A-Line Skirt', 1580],
  ['Chiffon Poet Blouse', 720],
  ['Sculpted Shoulder Blazer', 2400],
  ['Bias-Cut Satin Dress', 2200],
  ['Mohair Oversized Cardigan', 980],
];

const womenBootsData: [string, number][] = [
  ['Knee-High Leather Boots', 1800],
  ['Pointed Ankle Boots', 1350],
  ['Suede Over-the-Knee Boots', 2200],
  ['Block Heel Chelsea Boots', 1100],
  ['Stiletto Sock Boots', 1450],
  ['Western Inspired Boots', 1250],
  ['Lug Sole Combat Boots', 1050],
  ['Crystal-Heel Ankle Boots', 2800],
  ['Patent Leather Pumps', 980],
  ['Strappy Heeled Sandals', 1200],
  ['Satin Evening Mules', 880],
  ['Platform Leather Boots', 1650],
  ['Kitten Heel Slingbacks', 920],
  ['Velvet Embroidered Boots', 1780],
  ['Classic Stiletto Pumps', 1100],
];

const womenAccessoriesData: [string, number][] = [
  ['Structured Leather Handbag', 2400],
  ['Silk Print Scarf', 580],
  ['Pearl Drop Earrings', 450],
  ['Leather Clutch Bag', 1200],
  ['Cashmere Wrap Shawl', 780],
  ['Gold Chain Necklace', 680],
  ['Leather Gloves', 380],
  ['Crystal Evening Bag', 1950],
  ['Oversized Sunglasses', 520],
  ['Woven Leather Tote', 2100],
];

export const menProducts: Product[] = [
  ...menClothingData.map(([name, price], i) => createProduct(name, price, 'clothing', 'men', i)),
  ...menBootsData.map(([name, price], i) => createProduct(name, price, 'boots', 'men', i)),
  ...menAccessoriesData.map(([name, price], i) => createProduct(name, price, 'accessories', 'men', i)),
];

export const womenProducts: Product[] = [
  ...womenClothingData.map(([name, price], i) => createProduct(name, price, 'clothing', 'women', i)),
  ...womenBootsData.map(([name, price], i) => createProduct(name, price, 'boots', 'women', i)),
  ...womenAccessoriesData.map(([name, price], i) => createProduct(name, price, 'accessories', 'women', i)),
];