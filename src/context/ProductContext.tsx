import { createContext, Context, useState, useContext, useEffect } from "react";
import { axiosService } from "../config/axios";

interface ProductContext {
  products: Product[];
  getProducts(): Promise<void>;
}

const ProductContext = createContext<ProductContext | null>(null) as Context<
  ProductContext
>;

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const producs = await axiosService.get<Product[]>("/api/product");
    setProducts(producs.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct, ProductContext };
