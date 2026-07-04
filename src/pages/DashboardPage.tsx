import { Banner } from "../components/Banner";
import { SearchBar } from "../components/SearchBar";
import { CategoryBar } from "../components/CategoryBar";
import { ProductGrid } from "../components/ProductGrid";

export function DashboardPage() {
  return (
    <div className="flex-grow">
      <Banner />
      
      <div className="container mx-auto px-4 py-6">
        <SearchBar />
      </div>

      <div className="container mx-auto px-4 py-6">
        <ProductGrid title="Itens Recentes" count={4} showViewAll={true} />
      </div>

      <div className="container mx-auto px-4 py-6">
        <CategoryBar />
      </div>

      <div className="container mx-auto px-4 py-6">
        <ProductGrid title="Anúncios" count={8} showViewAll={true} />
      </div>
    </div>
  );
}
