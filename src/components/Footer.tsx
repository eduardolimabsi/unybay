import { Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8 gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-left w-full max-w-4xl">Unybay</h2>
          <div className="w-full h-px bg-white/20 my-4 max-w-4xl"></div>
        </div>
        
        <div className="flex flex-col items-center text-center gap-6 text-sm text-blue-100">
          <p className="max-w-md">
            Unybay ® {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white hover:scale-110 transition-all p-2 bg-white/10 rounded-full">
              <Globe className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white hover:scale-110 transition-all p-2 bg-white/10 rounded-full">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
