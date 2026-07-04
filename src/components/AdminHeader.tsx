import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulando logout
    navigate("/");
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="lg:hidden p-1 hover:bg-blue-700 rounded transition-colors">
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/dashboard" className="text-2xl font-bold tracking-tight">
            Unybay
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <Link to="/dashboard" className="hover:text-gray-200 transition-colors">Home</Link>
          <Link to="/sobre" className="hover:text-gray-200 transition-colors">Quem Somos</Link>
          <button onClick={handleLogout} className="hover:text-gray-200 transition-colors font-medium">
            Sair
          </button>
          <Link to="/meus-anuncios" className="bg-white hover:bg-gray-100 text-primary px-8 py-2.5 rounded font-bold transition-colors shadow-sm inline-block">
            Anunciar
          </Link>
        </nav>
      </div>
    </header>
  );
}
