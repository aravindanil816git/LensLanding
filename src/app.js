import Contest from "./contest/contest";
import Features from "./features/features";
import Footer from "./footer/footer";
import Help from "./help/help";
import Hero from "./hero/hero";
import "./styles.css";
import TermsNCondition from "./terms-condition/terms-condition";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Contest />
      <TermsNCondition />
      <Help/>
      <Footer />
    </div>
  );
}
