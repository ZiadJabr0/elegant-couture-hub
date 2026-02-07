import CollectionPage from '@/components/collection/CollectionPage';
import { menProducts } from '@/data/products';
import menHero from '@/assets/men-collection.jpg';

const Men = () => (
  <CollectionPage
    title="Men"
    subtitle="Collection"
    heroImage={menHero}
    products={menProducts}
  />
);

export default Men;