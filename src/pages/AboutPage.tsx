import { Target, Eye, ShieldCheck } from "lucide-react";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 tracking-tight">
          Sobre a <span className="text-primary">Unybay</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Somos mais do que apenas um marketplace. Nossa paixão é conectar pessoas
          às melhores ofertas, unindo tecnologia de ponta com um atendimento humanizado.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nossa História</h2>
        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
          <p>
            Fundada com a premissa de simplificar o comércio eletrônico, a Unybay 
            começou como uma pequena ideia de tornar as compras online mais seguras e rápidas. 
            Hoje, nos orgulhamos de ser um ecossistema completo onde vendedores podem expandir 
            seus negócios e consumidores encontram exatamente o que precisam com apenas alguns cliques.
          </p>
          <p>
            Nossa plataforma foi construída com foco na experiência do usuário, garantindo uma 
            navegação limpa, suporte dedicado e transações transparentes. Continuamos evoluindo 
            todos os dias para entregar não apenas produtos, mas também confiança.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-blue-50 p-4 rounded-full mb-6">
            <Target className="h-10 w-10 text-primary stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Missão</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Proporcionar a melhor experiência de compra e venda online, conectando produtos
            de qualidade a clientes exigentes através de uma plataforma rápida e segura.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-orange-50 p-4 rounded-full mb-6">
            <Eye className="h-10 w-10 text-secondary stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Visão</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Ser reconhecida como o marketplace mais inovador e confiável do mercado, 
            ditando tendências e transformando a maneira como as pessoas consomem na internet.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-blue-50 p-4 rounded-full mb-6">
            <ShieldCheck className="h-10 w-10 text-primary stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Valores</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Transparência em todas as negociações, inovação contínua, foco total no cliente,
            segurança de dados e responsabilidade com nossos parceiros.
          </p>
        </div>
      </div>
    </div>
  );
}
