import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    senha: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Campo obrigatório";
    
    if (!formData.email.trim()) {
       newErrors.email = "Campo obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
       newErrors.email = "Digite um e-mail válido";
    }

    if (!formData.telefone.trim()) newErrors.telefone = "Campo obrigatório";
    if (!formData.cidade.trim()) newErrors.cidade = "Campo obrigatório";
    if (!formData.estado.trim()) newErrors.estado = "Campo obrigatório";
    
    if (!formData.senha) {
      newErrors.senha = "Campo obrigatório";
    } else if (formData.senha.length < 6) {
      newErrors.senha = "Senha deve possuir pelo menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Simulação de cadastro. Dados:", formData);
      toast.success("Conta criada com sucesso! Faça login.");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 w-full max-w-md text-center">
        {/* Título */}
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-2">Unybay</h1>
        <p className="text-xs font-semibold text-gray-500 mb-8 uppercase tracking-widest">Cadastre-se</p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div>
            <input 
              type="text" 
              name="nome"
              placeholder="Nome" 
              value={formData.nome}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.nome ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white`}
            />
            {errors.nome && <p className="text-red-500 text-xs mt-1 ml-1">{errors.nome}</p>}
          </div>

          <div>
            <input 
              type="email" 
              name="email"
              placeholder="E-mail" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          <div>
            <input 
              type="tel" 
              name="telefone"
              placeholder="Telefone" 
              value={formData.telefone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.telefone ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white`}
            />
            {errors.telefone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.telefone}</p>}
          </div>

          <div>
            <input 
              type="text" 
              name="cidade"
              placeholder="Cidade" 
              value={formData.cidade}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.cidade ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white`}
            />
            {errors.cidade && <p className="text-red-500 text-xs mt-1 ml-1">{errors.cidade}</p>}
          </div>

          <div>
            <input 
              type="text" 
              name="estado"
              placeholder="Estado" 
              value={formData.estado}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.estado ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white`}
            />
            {errors.estado && <p className="text-red-500 text-xs mt-1 ml-1">{errors.estado}</p>}
          </div>

          <div>
            <input 
              type="password" 
              name="senha"
              placeholder="Senha" 
              value={formData.senha}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.senha ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white`}
            />
            {errors.senha && <p className="text-red-500 text-xs mt-1 ml-1">{errors.senha}</p>}
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-sm text-sm tracking-wide"
            >
              Cadastrar
            </button>
          </div>
        </form>

        {/* Footer do Card */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link to="/login" className="text-sm text-gray-400 hover:text-primary transition-colors font-medium">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
}
