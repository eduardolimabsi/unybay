import { useSearchParams } from "react-router-dom";
import { ProductGrid } from "../components/ProductGrid";
import { SearchBar } from "../components/SearchBar";

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <>
      <SearchBar />
      
      <div className="container mx-auto px-4 pt-4 pb-2">
        <h2 className="text-xl font-medium text-gray-600">
          Resultado da busca {query && <span className="font-bold text-gray-800">"{query}"</span>}
        </h2>
      </div>
      <ProductGrid title="" count={4} showViewAll={false} />
      <div className="container mx-auto px-4 text-right mb-8">
        <span className="text-gray-500 text-sm font-medium mr-2">4 itens</span>
      </div>
    </>
  );
}
