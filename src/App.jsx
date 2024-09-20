import React, { useEffect, useState } from "react";
import { NavbarComponent } from "./components/layout/Navbar";
import { Footercomponent } from "./components/layout/Footer";
import ProductCard from "./components/card/ProductCard";
import { getAllProducts } from "./service/product/productAction";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [products, setProducts] = useState([]); 
  console.log("products", products);

  useEffect(() => {
    async function fetchAllProducts() {
      let product = await getAllProducts();
      setProducts(product);
    }
    fetchAllProducts();
  }, []);

  return (
    <>
      {/* <NavbarComponent /> */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              image={product.images[0]} // Ensure each ProductCard has a unique key
              title={product.title}
              description={product.description}
            />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default App;
