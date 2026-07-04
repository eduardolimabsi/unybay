import { useState } from "react";
import { toast } from "react-toastify";

export function ContactPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensagem enviada", formData);
    toast.success("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 w-full max-w-md text-center">
        {/* Título */}
        <h1 className="text-3xl font-bold text-primary tracking-tight mb-2">Unybay</h1>
        <p className="text-sm font-medium text-gray-500 mb-8">Fale Conosco através do formulário abaixo</p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          
          <div>
            <input 
              type="text" 
              name="nome"
              placeholder="Nome completo" 
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white"
            />
          </div>

          <div>
            <input 
              type="email" 
              name="email"
              placeholder="E-mail" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white"
            />
          </div>

          <div>
            <textarea 
              name="mensagem"
              placeholder="Escreva sua mensagem..." 
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm bg-gray-50 focus:bg-white resize-y"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-sm text-sm tracking-wide"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
