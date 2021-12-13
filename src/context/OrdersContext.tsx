import { createContext, Context, useState, useContext, useEffect } from "react";
import { axiosService } from "../config/axios";

interface OrderContext {
  orders: Order[];
  getOrders(): Promise<void>;
}

const OrderContext = createContext<OrderContext | null>(null) as Context<
  OrderContext
>;

const OrderProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    console.log("Orders");
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        getOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
const useOrder = () => useContext(OrderContext);

export { OrderProvider, useOrder, OrderContext };
