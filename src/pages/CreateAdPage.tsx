import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bold, Italic, Underline, Type, AlignLeft, AlignCenter, AlignRight, List } from "lucide-react";
import { toast } from "react-toastify";

export function CreateAdPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    fabricante: "",
    categoria: "",
    preco: "",
    url1: "",
    url2: "",
    descricao: "Lorem ipsum dolor sit amet...\n\n## Subtitle\n- Unordered List\n- Lorem Ipsum\n- Dolor Sit\n- Amet\n\n---\n\nContent after Division"
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Campo obrigatório";
    if (!formData.fabricante.trim()) newErrors.fabricante = "Campo obrigatório";
    if (!formData.categoria.trim()) newErrors.categoria = "Campo obrigatório";
    
    if (!formData.preco.trim()) {
      newErrors.preco = "Campo obrigatório";
    } else if (isNaN(Number(formData.preco.replace(',', '.')))) {
      newErrors.preco = "Valor deve ser numérico";
    }

    if (!formData.url1.trim()) newErrors.url1 = "Campo obrigatório";
    if (!formData.url2.trim()) newErrors.url2 = "Campo obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Salvar produto", formData);
      toast.success("Anúncio criado com sucesso!");
      navigate("/meus-anuncios");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-2xl font-medium text-gray-600 mb-6">Novo Produto</h1>

      <div className="bg-white border-[3px] border-primary rounded-xl p-8 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-6">Preencha todos os campos abaixo:</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid Superior 2 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome do Produto"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.nome ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.nome && <p className="text-red-500 text-xs mt-1 ml-1">{errors.nome}</p>}
            </div>

            <div>
              <input
                type="text"
                name="fabricante"
                placeholder="Fabricante"
                value={formData.fabricante}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.fabricante ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.fabricante && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fabricante}</p>}
            </div>

            <div>
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.categoria ? 'border-red-400' : 'border-gray-200'} text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary appearance-none bg-white`}
              >
                <option value="" disabled>Categoria</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="roupas">Roupas</option>
                <option value="livros">Livros</option>
              </select>
              {errors.categoria && <p className="text-red-500 text-xs mt-1 ml-1">{errors.categoria}</p>}
            </div>

            <div>
              <input
                type="text"
                name="preco"
                placeholder="Preço"
                value={formData.preco}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.preco ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.preco && <p className="text-red-500 text-xs mt-1 ml-1">{errors.preco}</p>}
            </div>

            <div>
              <input
                type="text"
                name="url1"
                placeholder="Url 1 da imagem"
                value={formData.url1}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.url1 ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.url1 && <p className="text-red-500 text-xs mt-1 ml-1">{errors.url1}</p>}
            </div>

            <div>
              <input
                type="text"
                name="url2"
                placeholder="Url 2 da imagem"
                value={formData.url2}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.url2 ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-1 focus:ring-primary`}
              />
              {errors.url2 && <p className="text-red-500 text-xs mt-1 ml-1">{errors.url2}</p>}
            </div>
          </div>

          {/* Área de Texto (Editor Fake) */}
          <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
            <div className="bg-gray-100 p-2 flex items-center space-x-3 text-gray-500 border-b border-gray-200">
              <button type="button" className="p-1 hover:text-gray-800 bg-white rounded"><Bold size={16}/></button>
              <button type="button" className="p-1 hover:text-gray-800"><Italic size={16}/></button>
              <button type="button" className="p-1 hover:text-gray-800"><Underline size={16}/></button>
              <div className="w-px h-4 bg-gray-300 mx-2"></div>
              <button type="button" className="p-1 hover:text-gray-800"><Type size={16}/></button>
              <div className="w-px h-4 bg-gray-300 mx-2"></div>
              <button type="button" className="p-1 hover:text-gray-800"><AlignLeft size={16}/></button>
              <button type="button" className="p-1 hover:text-gray-800"><AlignCenter size={16}/></button>
              <button type="button" className="p-1 hover:text-gray-800"><AlignRight size={16}/></button>
              <div className="w-px h-4 bg-gray-300 mx-2"></div>
              <button type="button" className="p-1 hover:text-gray-800"><List size={16}/></button>
            </div>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              rows={12}
              className="w-full p-4 focus:outline-none text-gray-500 font-mono text-sm resize-y"
            ></textarea>
          </div>
          
          <div className="flex items-center justify-between mt-8">
            {/* Erro global na parte inferior esquerda */}
            <div className="w-1/2">
               {Object.keys(errors).length > 0 && (
                <p className="text-red-500 text-xs font-medium">Campo obrigatório</p>
               )}
            </div>

            {/* Botões */}
            <div className="flex justify-end items-center space-x-4">
              <button 
                type="submit" 
                className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition-colors shadow-sm text-sm"
              >
                Salvar
              </button>
              <Link 
                to="/meus-anuncios" 
                className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-300 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
              >
                Cancelar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
