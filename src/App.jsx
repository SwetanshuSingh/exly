import Bonus from "./components/Bonus";
import BusinessPlan from "./components/BusinessPlan";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LimitedOffer from "./components/LimitedOffer";
import MarketingPrograms from "./components/MarketingPrograms";
import MoneyBack from "./components/MoneyBack";
import Reviews from "./components/Reviews";

const App = () => {
  return(
    <div>
        <Hero />
        <BusinessPlan />
        <Reviews />
        <MarketingPrograms />
        <Bonus />
        <MoneyBack />
        <Faq />
        <Footer />
        <LimitedOffer />
    </div>
  );
};

export default App;