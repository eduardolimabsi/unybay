import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

interface AdminProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  seller: string;
  onDeleteClick?: (id: number) => void;
}

export function AdminProductCard({ id, title, price, imageUrl, seller, onDeleteClick }: AdminProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col relative border border-gray-100 group">
      <Link to={`/produto/${id}`} className="block relative aspect-square mb-4 bg-gray-50 rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="object-contain w-full h-full mix-blend-multiply p-2 transition-transform group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-col flex-grow">
        <Link to={`/produto/${id}`}>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-xs text-gray-400 mb-2">{seller}</p>
        
        <div className="mt-auto flex items-end justify-between">
          <div className="font-bold text-lg text-gray-800">
            R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <button className="hover:text-primary transition-colors p-1" title="Editar">
              <Pencil className="h-4 w-4" />
            </button>
            <button 
              className="hover:text-red-500 transition-colors p-1" 
              title="Excluir"
              onClick={() => onDeleteClick && onDeleteClick(id)}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
