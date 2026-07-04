import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProductDetailsPage() {
  useParams();
  const imageUrl = "https://images7.kabum.com.br/produtos/fotos/sync_mirakl/538147/xlarge/Caixa-De-Som-Amazon-Echo-Dot-5-Gera-o-Alexa-Bluetooth-Preto_1783019923.jpg";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/produtos" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">
          Voltar
        </Link>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Echo Dot (8ª Geração)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 relative bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-8 min-h-[350px] md:min-h-[450px]">
          <button className="absolute left-4 p-2 text-secondary hover:bg-orange-50 rounded-full transition-colors z-10">
            <ChevronLeft className="h-10 w-10 stroke-[3]" />
          </button>

          <img
            src={imageUrl}
            alt="Echo Dot"
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
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Nome:</span> Loja Eletrônicos BR</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Localização:</span> São Paulo / SP</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">E-mail:</span> contato@eletronicosbr.com.br</p>
              <p className="flex flex-col"><span className="font-semibold text-gray-800">Telefone:</span> (11) 99999-0000</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-gray-500 font-semibold mb-2 self-start w-full text-left text-sm tracking-wide">Preço</h3>
            <div className="text-4xl font-bold text-gray-900 my-4">
              R$ 799,00
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
          <div className="prose max-w-none text-gray-500 text-sm md:text-base leading-relaxed tracking-wide">
            <p className="mb-4">
              Sed blandit ipsum quis ligula finibus venenatis. Nullam fringilla interdum dictum.
              Integer eget tincidunt quam. Proin hendrerit, eros vitae sodales convallis, eros lorem
              varius nisi, non tristique lorem metus nec felis. Phasellus vitae ultrices tellus, nec
              faucibus dui. Sed eu augue convallis, hendrerit est vitae, posuere libero. Sed vulputate
              ante sit amet lectus ornare, at aliquet felis pellentesque. Pellentesque malesuada elit a
              sagittis facilisis. Integer vulputate magna vulputate, pellentesque augue porta, ornare
              quam. Vivamus posuere, orci egestas condimentum ornare, lectus est blandit ex,
              sollicitudin rhoncus augue nisi id neque. Aliquam erat volutpat. In facilisis, ex vel
              imperdiet eleifend, est ligula hendrerit justo, sit amet facilisis ex risus vel erat.
            </p>
            <ul className="list-disc pl-5 space-y-3 mt-8">
              <li>In ut orci nec massa rhoncus rhoncus eget eu purus.</li>
              <li>Sed non leo tristique, efficitur quam non, faucibus libero.</li>
              <li>Nam pulvinar diam non mi venenatis maximus.</li>
              <li>Vivamus tristique ipsum sed neque tincidunt, quis scelerisque enim volutpat.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
