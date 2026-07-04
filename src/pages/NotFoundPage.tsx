import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center flex-grow">
      <Frown className="h-24 w-24 text-primary/20 mb-6" strokeWidth={1.5} />
      <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-4 tracking-tight">Oops! 404</h1>
      <p className="text-gray-500 mb-10 max-w-md text-lg">
        Desculpe, não conseguimos encontrar a página que você está procurando. 
        Ela pode ter sido movida ou o endereço está incorreto.
      </p>
      <Link 
        to="/" 
        className="bg-secondary hover:bg-orange-600 text-white font-bold py-3.5 px-10 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}
