import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
      <Header />
      <main className="flex-grow pb-8 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
