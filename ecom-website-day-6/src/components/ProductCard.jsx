import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="card">
      <Link to={`/products/${product.id}`} className="card-img">
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div className="card-body">
        <span className="chip">{product.category}</span>
        <h3 title={product.title}>{product.title}</h3>
        <div className="card-foot">
          <strong>${product.price.toFixed(2)}</strong>
          <button className="btn small" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}
