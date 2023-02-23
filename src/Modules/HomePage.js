import Header from '../Header'; 
import Footer from '../Footer';
import ProductList from '../ProductList';

function HomePage() {
  return (
    <div className="App">
      <Header></Header>
      <ProductList></ProductList><br/>         
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
