import { Link } from "react-router-dom";

interface ProductCardProps {
  id?: string | number;
  title: string;
  price: string;
  imageUrl: string;
  sponsor?: string;
}

export function ProductCard({ id = 1, title, price, imageUrl, sponsor = "Amazon" }: ProductCardProps) {
  return (
    <Link to={`/produto/${id}`} className="block bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center">
      <div className="w-full flex justify-between text-xs text-gray-500 mb-2">
        <span className="font-medium text-gray-400">{sponsor}</span>
      </div>
      <div className="w-32 h-32 md:w-40 md:h-40 mb-4 relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-contain w-full h-full drop-shadow-md"
        />
      </div>
      <div className="w-full text-center mt-auto">
        <h4 className="text-gray-800 font-medium mb-1 text-sm line-clamp-2">{title}</h4>
        <p className="text-gray-900 font-bold text-lg">{price}</p>
      </div>
    </Link>
  );
}
