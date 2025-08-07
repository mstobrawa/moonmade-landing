import Header from "./components/Header";
import logo from "./assets/logo.webp";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import Invitation from "./components/Invitation";
import Button from "./components/Button";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header title="MOONMADE" image={logo} />
      <Hero
        withLove="Z MIŁOŚCI DO KAMIENI"
        catchPhrase="Unikatowa biżuteria z kamieni naturalnych"
      />
      <ProductCarousel />
      <Invitation info="JUŻ WKRÓTCE OTWARCIE NOWEJ ODSŁONY SKLEPU" />
      <Button
        url="https://www.instagram.com/moonmade.pl/"
        label="Zaobserwuj nas na Instagranie!"
      />
      <Footer />
      {/* tutaj będziemy dalej tworzyć stronę */}
    </div>
  );
}

export default App;
