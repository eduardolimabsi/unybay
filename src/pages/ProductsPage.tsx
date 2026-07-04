import { Search } from "lucide-react";
import { useState } from "react";
import { ProductGrid } from "../components/ProductGrid";

export function ProductsPage() {
  const [queryInput, setQueryInput] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("recentes");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveQuery(queryInput.trim());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Itens Recentes</h2>
          <div className="flex items-center text-sm text-gray-500">
             <span>Ordenar por: </span>
             <button 
               onClick={() => setSortOrder("menor_preco")}
               className={`${sortOrder === "menor_preco" ? "text-primary font-bold" : "hover:text-primary"} hover:underline font-medium ml-1 transition-colors`}
             >
               menor preço
             </button>
             <span className="mx-2 text-gray-300">|</span>
             <button 
               onClick={() => setSortOrder("maior_preco")}
               className={`${sortOrder === "maior_preco" ? "text-primary font-bold" : "hover:text-primary"} hover:underline transition-colors`}
             >
               maior preço
             </button>
             <span className="mx-2 text-gray-300">|</span>
             <button 
               onClick={() => setSortOrder("recentes")}
               className={`${sortOrder === "recentes" ? "text-primary font-bold" : "hover:text-primary"} hover:underline transition-colors`}
             >
               mais recentes
             </button>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <form onSubmit={handleSearch} className="relative max-w-sm md:ml-auto w-full md:min-w-[280px]">
            <input 
              type="text" 
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder="Estou buscando por..." 
              className="w-full pl-5 pr-10 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm bg-gray-50 focus:bg-white"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
      
      {activeQuery && (
        <div className="mb-4 text-gray-600 text-sm">
          Exibindo resultados para: <span className="font-bold">"{activeQuery}"</span>
          <button 
            onClick={() => { setQueryInput(""); setActiveQuery(""); }}
            className="ml-4 text-red-500 hover:underline"
          >
            Limpar busca
          </button>
        </div>
      )}

      <ProductGrid 
        title="" 
        count={50} 
        showViewAll={false} 
        sortOrder={sortOrder}
        searchQuery={activeQuery}
      />
    </div>
  );
}
