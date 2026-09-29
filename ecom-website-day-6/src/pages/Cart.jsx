import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, changeQty, removeItem, total } = useCart();

  if (!items.length)
    return (
      <section className="state">
        <h1>Your cart is empty</h1>
        <p>Add a few pieces and they'll show up here.</p>
        <Link to="/products" className="btn">Browse products</Link>
      </section>
    );

  return (
    <section>
      <h1>Your cart</h1>
      <div className="cart-list">
        {items.map((i) => (
          <div className="cart-row" key={i.id}>
            <img src={i.image} alt={i.title} />
            <div className="cart-info">
              <Link to={`/products/${i.id}`}>{i.title}</Link>
              <span>${i.price.toFixed(2)}</span>
            </div>
            <div className="qty">
              <button onClick={() => changeQty(i.id, -1)} aria-label="Decrease quantity">−</button>
              <span>{i.qty}</span>
              <button onClick={() => changeQty(i.id, 1)} aria-label="Increase quantity">+</button>
            </div>
            <strong>${(i.price * i.qty).toFixed(2)}</strong>
            <button className="link-btn" onClick={() => removeItem(i.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: <strong>${total.toFixed(2)}</strong></p>
        <Link to="/checkout" className="btn">Go to checkout</Link>
      </div>
    </section>
  );
}
