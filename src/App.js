import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactPage from "./components/contact/ContactPage";
import FaqPage from "./components/faq/FaqPage";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import PartnerPage from "./components/partner/PartnerPage";
import Navigation from "./components/nav/Navigation";

const links = [
  {
    name: "파트너",
    href: "/partner",
    type: "default",
  },
  {
    name: "자주 묻는 질문",
    href: "/faq",
    type: "default",
  },
  {
    name: "견적문의하기",
    href: "/contact",
    type: "primary",
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation logoSrc="/assets/images/logo.png" links={links} />
        <Route exact path="/" component={HomePage} />
        <Route path="/partner" component={PartnerPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/contact" component={ContactPage} />
        <Footer logoSrc="/assets/images/footer-logo.png" />
      </Router>
    </div>
  );
}

export default App;
