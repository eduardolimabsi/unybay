import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

interface ApiProduct {
  _id: string;
  name: string;
  price: number;
  url1: string;
  url2: string;
  manufacturer: string;
  description: string;
  createdAt: string;
}

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("https://api-projeto-integrador.vercel.app/products")
      .then((response) => {
        const foundProduct = response.data.find((p: ApiProduct) => p._id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produto", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-gray-500 py-20">
        Carregando detalhes do produto...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500 py-20">
        Produto não encontrado ou erro de conexão.
      </div>
    );
  }

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">
          Voltar
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">{product.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 relative bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-8 min-h-[350px] md:min-h-[450px]">
          <button className="absolute left-4 p-2 text-secondary hover:bg-orange-50 rounded-full transition-colors z-10">
            <ChevronLeft className="h-10 w-10 stroke-[3]" />
          </button>

          <img
            src={product.url1}
            alt={product.name}
            className="w-full max-w-sm object-contain relative z-0 drop-shadow-xl"
          />

          <button className="absolute right-4 p-2 text-secondary hover:bg-orange-50 rounded-full transition-colors z-10">
            <ChevronRight className="h-10 w-10 stroke-[3]" />
          </button>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-gray-800 font-bold mb-4 text-sm tracking-wide">Informações do Vendedor</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Nome:</span> Loja {product.manufacturer}</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Localização:</span> São Paulo / SP</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">E-mail:</span> contato@{product.manufacturer.toLowerCase().replace(/\s/g, '')}.com.br</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Telefone:</span> (11) 99999-0000</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-gray-500 font-semibold mb-2 self-start w-full text-left text-sm tracking-wide">Preço</h3>
            <div className="text-4xl font-bold text-gray-900 my-4">
              {typeof product.price === 'number' ? `R$ ${product.price.toFixed(2).replace('.', ',')}` : `R$ ${product.price}`}
            </div>
            <button className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-lg transition-colors mt-4 text-lg shadow-md">
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Descrição</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div 
            className="prose max-w-none text-gray-500 text-sm md:text-base leading-relaxed tracking-wide"
            dangerouslySetInnerHTML={createMarkup(product.description || "Nenhuma descrição fornecida.")}
          />
        </div>
      </div>
    </div>
  );
}
