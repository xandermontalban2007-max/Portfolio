import Navbar from "../components/navigation/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
}