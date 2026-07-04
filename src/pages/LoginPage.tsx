import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Apenas comportamento visual. Prevenimos o carregamento de tela real
    console.log("Simulação de login. Dados:", { email, password });
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 w-full max-w-sm text-center">
        {/* Título */}
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-2">Unybay</h1>
        <p className="text-xs font-semibold text-gray-500 mb-8 uppercase tracking-widest">Acesse sua conta</p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white"
            />
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-sm text-sm tracking-wide"
            >
              Entrar
            </button>
          </div>
        </form>

        {/* Footer do Card */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link to="/registro" className="text-sm text-gray-400 hover:text-primary transition-colors font-medium">
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}
