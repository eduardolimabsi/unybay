import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Banner() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="w-full rounded-xl overflow-hidden relative shadow-lg h-56 md:h-72 lg:h-80">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          className="h-full w-full"
        >
          <div className="h-56 md:h-72 lg:h-80 relative bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images7.kabum.com.br/produtos/fotos/sync_mirakl/538147/xlarge/Caixa-De-Som-Amazon-Echo-Dot-5-Gera-o-Alexa-Bluetooth-Preto_1783019923.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
              <div className="flex items-center gap-8 md:gap-16">
                <div className="text-center md:text-left flex-1">
                   <h2 className="text-4xl md:text-7xl font-black text-white mb-2 tracking-wider drop-shadow-md italic">MEGA OFERTA</h2>
                   <div className="bg-white/20 backdrop-blur-sm rounded-full py-1.5 px-6 inline-block mb-6 border border-white/30">
                     <p className="text-white font-semibold tracking-widest text-xs md:text-sm">POR TEMPO LIMITADO</p>
                   </div>
                   <div>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                        Comprar Agora
                      </button>
                   </div>
                </div>
                
                <div className="hidden md:flex bg-secondary text-white font-bold rounded-full h-28 w-28 flex-col items-center justify-center shadow-xl transform rotate-12 border-4 border-white">
                  <span className="text-3xl leading-none">50%</span>
                  <span className="text-sm">OFF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-56 md:h-72 lg:h-80 relative bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wider drop-shadow-md">NOVIDADES</h2>
              <p className="text-white text-lg md:text-xl font-medium mb-6">Confira os últimos lançamentos em tecnologia</p>
              <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:bg-gray-100">
                Ver Lançamentos
              </button>
            </div>
          </div>
          <div className="h-56 md:h-72 lg:h-80 relative bg-gradient-to-r from-teal-500 to-emerald-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-wider drop-shadow-md">FRETE GRÁTIS</h2>
              <p className="text-white text-lg md:text-xl font-medium mb-6">Para compras acima de R$ 200,00</p>
              <button className="bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:bg-orange-600">
                Aproveitar
              </button>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}
