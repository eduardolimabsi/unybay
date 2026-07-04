import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "./ProductCard";

interface ApiProduct {
  _id: string;
  name: string;
  price: number;
  url1: string;
  manufacturer: string;
  createdAt: string;
}

interface ProductGridProps {
  title?: string;
  count?: number;
  showViewAll?: boolean;
  searchQuery?: string;
  sortOrder?: string;
}

export function ProductGrid({ 
  title = "Mais Recentes", 
  count = 8, 
  showViewAll = false,
  searchQuery = "",
  sortOrder = "recentes" 
}: ProductGridProps) {
  const [allProducts, setAllProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("https://api-projeto-integrador.vercel.app/products")
      .then((response: any) => {
        setAllProducts(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error("Erro ao buscar produtos:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 py-10">
        Carregando produtos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-6 text-center text-red-500 py-10">
        Erro ao carregar produtos.
      </div>
    );
  }

  // Filtragem e Ordenação locais
  let displayedProducts = [...allProducts];

  if (searchQuery.trim()) {
    displayedProducts = displayedProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortOrder === "menor_preco") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "maior_preco") {
    displayedProducts.sort((a, b) => b.price - a.price);
  } else {
    // Recentes (padrão)
    displayedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // Limitando pela prop count
  displayedProducts = displayedProducts.slice(0, count);

  return (
    <div className="container mx-auto px-4 py-6">
      {title && <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">{title}</h2>}
      
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product: ApiProduct) => (
            <ProductCard 
              key={product._id}
              id={product._id}
              title={product.name}
              price={product.price}
              imageUrl={product.url1}
              seller={product.manufacturer}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-gray-100">
          Nenhum produto encontrado.
        </div>
      )}

      {showViewAll && displayedProducts.length > 0 && (
        <div className="mt-4 text-right">
          <Link to="/produtos" className="text-gray-500 text-sm hover:text-primary transition-colors hover:underline">
            ver todos
          </Link>
        </div>
      )}
    </div>
  );
}
