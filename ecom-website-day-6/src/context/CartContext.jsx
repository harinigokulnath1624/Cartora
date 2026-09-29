import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage("cartora-cart", []);

  const addToCart = (product) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: product.id, title: product.title, price: product.price, image: product.image, qty: 1 }];
    });

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
    );

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, changeQty, removeItem, clearCart, count, total }}>
      {children}
    </CartContext.Provider>
  );
}
