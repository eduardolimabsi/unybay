import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Estados do Frete
  const [cepInput, setCepInput] = useState("");
  const [calculatingFreight, setCalculatingFreight] = useState(false);
  const [freightResult, setFreightResult] = useState<{ price: number; days: number } | null>(null);

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

  const images = [product.url1, product.url2].filter(url => url && url.trim() !== "");

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Simulação de cálculo de frete simples
  const handleCalculateFreight = () => {
    const rawCep = cepInput.replace(/\D/g, "");
    if (rawCep.length !== 8) {
      toast.error("Digite um CEP válido (8 dígitos).");
      return;
    }
    
    setCalculatingFreight(true);
    setFreightResult(null);

    // Mockup: Simula delay de requisição e sorteia um frete aleatório
    setTimeout(() => {
      setFreightResult({
        price: Math.floor(Math.random() * 40) + 10, // Entre R$10 e R$50
        days: Math.floor(Math.random() * 8) + 3     // Entre 3 e 10 dias
      });
      setCalculatingFreight(false);
      toast.success("Frete calculado!");
    }, 1200);
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
          
          {images.length > 1 && (
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 p-2 text-secondary hover:bg-orange-50 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="h-10 w-10 stroke-[3]" />
            </button>
          )}

          <img
            src={images[currentImageIndex]}
            alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
            className="w-full max-w-sm object-contain relative z-0 drop-shadow-xl transition-opacity duration-300"
          />

          {images.length > 1 && (
            <button 
              onClick={handleNextImage}
              className="absolute right-4 p-2 text-secondary hover:bg-orange-50 rounded-full transition-colors z-10"
            >
              <ChevronRight className="h-10 w-10 stroke-[3]" />
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 flex space-x-2">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full ${idx === currentImageIndex ? 'bg-primary' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Lado Direito */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-gray-500 font-semibold mb-2 self-start w-full text-left text-sm tracking-wide">Preço</h3>
            <div className="text-4xl font-bold text-gray-900 my-4">
              {typeof product.price === 'number' ? `R$ ${product.price.toFixed(2).replace('.', ',')}` : `R$ ${product.price}`}
            </div>
            <button className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-lg transition-colors mt-4 text-lg shadow-md">
              Comprar
            </button>
          </div>

          {/* Módulo de Frete */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-2 text-gray-800 font-bold mb-4 text-sm tracking-wide">
              <Truck className="h-5 w-5 text-secondary" />
              <h3>Calcular Frete e Prazo</h3>
            </div>
            
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Enviado da <span className="font-semibold text-primary">Sede Unyleya</span><br />
              (SCN Q. 01 Bl. D - Brasília/DF, CEP: 70.711-040)
            </p>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="00000-000"
                value={cepInput}
                onChange={(e) => setCepInput(e.target.value)}
                maxLength={9}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-sm bg-gray-50"
              />
              <button 
                onClick={handleCalculateFreight}
                disabled={calculatingFreight}
                className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-70 whitespace-nowrap"
              >
                {calculatingFreight ? "Calculando..." : "Calcular"}
              </button>
            </div>

            {/* Resultado do Frete */}
            {freightResult && !calculatingFreight && (
              <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-lg text-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-green-800 font-semibold">Entrega Padrão</span>
                  <span className="text-green-800 font-bold">R$ {freightResult.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <p className="text-green-700 text-xs">Receba em até {freightResult.days} dias úteis</p>
              </div>
            )}
          </div>

          {/* Vendedor info movida para baixo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-gray-800 font-bold mb-4 text-sm tracking-wide">Informações do Vendedor</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Nome:</span> Loja {product.manufacturer}</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Localização:</span> São Paulo / SP</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">E-mail:</span> contato@{product.manufacturer.toLowerCase().replace(/\s/g, '')}.com.br</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Telefone:</span> (11) 99999-0000</p>
            </div>
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
