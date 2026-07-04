import { useState } from "react";
import { AdminProductCard } from "../components/AdminProductCard";
import { Link } from "react-router-dom";

export function ManageAdsPage() {
  const [ads, setAds] = useState(
    Array(4).fill(null).map((_, i) => ({
      id: i + 1,
      title: "Echo Dot (8ª Geração)",
      price: 700.99,
      imageUrl: "https://images7.kabum.com.br/produtos/fotos/sync_mirakl/538147/xlarge/Caixa-De-Som-Amazon-Echo-Dot-5-Gera-o-Alexa-Bluetooth-Preto_1783019923.jpg",
      seller: "Amazon"
    }))
  );

  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleDeleteConfirm = () => {
    if (itemToDelete !== null) {
      setAds(ads.filter(ad => ad.id !== itemToDelete));
      setItemToDelete(null);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {ads.map((product) => (
          <AdminProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            seller={product.seller}
            onDeleteClick={(id) => setItemToDelete(id)}
          />
        ))}
      </div>

      <div className="text-right text-sm text-gray-500 font-medium">
        {ads.length} itens
      </div>

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
