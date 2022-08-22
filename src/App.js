import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ArticleSelection from "./components/ArticleSelection";
import DownloadApp from "./components/DownloadApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  let itemNumber = 0;
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Header />
      <ArticleSelection />
      <DownloadApp />
      <Newsletter />
      <Footer />
      <ShoppingCart itemNumber={itemNumber} />
    </div>
  );
}

export default App;
