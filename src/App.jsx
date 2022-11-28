import Footer from './Components/Footer';
import Header from './Components/Header';
import Result from './Components/Result';
import Search from './Components/Search';
import './css/style.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <Result />
      </main>
      <Footer />
    </>
  );
}

export default App; 
