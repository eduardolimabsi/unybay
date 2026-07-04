import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductGrid } from "../components/ProductGrid";

export function ProductsPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/busca?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Itens Recentes</h2>
          <div className="flex items-center text-sm text-gray-500">
             <span>Ordenar por: </span>
             <button className="text-primary hover:underline font-medium ml-1">menor preço</button>
             <span className="mx-2 text-gray-300">|</span>
             <button className="hover:text-primary hover:underline transition-colors">maior preço</button>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <form onSubmit={handleSearch} className="relative max-w-sm md:ml-auto w-full md:min-w-[280px]">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Estou buscando por..." 
              className="w-full pl-5 pr-10 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm bg-gray-50 focus:bg-white"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
      <ProductGrid title="" count={12} showViewAll={false} />
    </div>
  );
}
