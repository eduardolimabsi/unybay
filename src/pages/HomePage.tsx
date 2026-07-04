import { Banner } from "../components/Banner";
import { SearchBar } from "../components/SearchBar";
import { CategoryBar } from "../components/CategoryBar";
import { ProductGrid } from "../components/ProductGrid";

export function HomePage() {
  return (
    <>
      <SearchBar />
      <Banner />
      <ProductGrid title="Itens Recentes" count={4} showViewAll={true} />
      <CategoryBar />
      <ProductGrid title="Anúncios" count={8} showViewAll={true} />
    </>
  );
}
