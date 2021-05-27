import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import Navigation from "./components/nav/Navigation";

const links = [
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
        <Navigation logoSrc="/logo-tmp.png" links={links} />
        <Route exact path="/" component={HomePage} />
        <Route path="/faq" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
