import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components/AdminHeader";
import { Footer } from "../components/Footer";

export function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
      <AdminHeader />
      <main className="flex-grow pb-8 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
