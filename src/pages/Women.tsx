import CollectionPage from '@/components/collection/CollectionPage';
import { womenProducts } from '@/data/products';
import womenHero from '@/assets/women-collection.jpg';

const Women = () => (
  <CollectionPage
    title="Women"
    subtitle="Collection"
    heroImage={womenHero}
    products={womenProducts}
  />
);

export default Women;