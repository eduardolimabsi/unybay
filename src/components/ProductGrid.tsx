import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  title: string;
  count: number;
  showViewAll?: boolean;
}

export function ProductGrid({ title, count, showViewAll = false }: ProductGridProps) {
  const products = Array.from({ length: count }).map((_, i) => ({
    id: i,
    title: "Echo Dot (5ª Geração) - Smart Speaker",
    price: "R$ 700,99",
    imageUrl: "https://images7.kabum.com.br/produtos/fotos/sync_mirakl/538147/xlarge/Caixa-De-Som-Amazon-Echo-Dot-5-Gera-o-Alexa-Bluetooth-Preto_1783019923.jpg", 
  }));

  return (
    <div className="container mx-auto px-4 py-6">
      {title && <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      {showViewAll && (
        <div className="mt-4 text-right">
          <Link to="/produtos" className="text-gray-500 text-sm hover:text-primary transition-colors hover:underline">
            ver todos
          </Link>
        </div>
      )}
    </div>
  );
}
