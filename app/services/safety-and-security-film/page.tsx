import SecurityFilmPage from "@/components/SecurityFilmPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />
      <SecurityFilmPage />
      <Footer />
    </div>
  );
}