import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/busca?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <form onSubmit={handleSearch} className="relative max-w-4xl mx-auto">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar produtos..." 
          className="w-full pl-6 pr-14 py-3.5 rounded-full border-2 border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700 bg-gray-50/50 focus:bg-white"
        />
        <button 
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
