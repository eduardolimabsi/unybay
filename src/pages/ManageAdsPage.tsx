import { useState, useEffect } from "react";
import axios from "axios";
import { AdminProductCard } from "../components/AdminProductCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface ApiProduct {
  _id: string;
  name: string;
  price: number;
  url1: string;
  manufacturer: string;
  createdAt: string;
}

export function ManageAdsPage() {
  const [ads, setAds] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  useEffect(() => {
    axios.get("https://api-projeto-integrador.vercel.app/products")
      .then((response) => {
        const sortedProducts = response.data.sort((a: ApiProduct, b: ApiProduct) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setAds(sortedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar os anúncios", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleDeleteConfirm = () => {
    if (itemToDelete !== null) {
      setAds(ads.filter(ad => ad._id !== itemToDelete));
      setItemToDelete(null);
      toast.success("Produto excluído com sucesso!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl relative">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-600 tracking-tight lowercase">
          anúncios
        </h1>
        <Link to="/meus-anuncios/novo" className="bg-secondary hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition-colors shadow-sm text-sm inline-block">
          Adicionar
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Carregando seus anúncios...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">Erro ao carregar anúncios.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
            {ads.map((product) => (
              <AdminProductCard 
                key={product._id}
                id={product._id}
                title={product.name}
                price={product.price}
                imageUrl={product.url1}
                seller={product.manufacturer}
                onDeleteClick={(id) => setItemToDelete(id)}
              />
            ))}
          </div>

          <div className="text-right text-sm text-gray-500 font-medium">
            {ads.length} itens
          </div>
        </>
      )}

      {/* Modal de Exclusão */}
      {itemToDelete !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] max-w-[90%] text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Excluir Produto</h2>
            <p className="text-gray-500 text-sm mb-8">Deseja realmente excluir o item?</p>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleDeleteConfirm}
                className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-lg transition-colors text-sm shadow-sm"
              >
                Sim
              </button>
              <button 
                onClick={() => setItemToDelete(null)}
                className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-300 font-semibold py-2 px-10 rounded-lg transition-colors text-sm"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
