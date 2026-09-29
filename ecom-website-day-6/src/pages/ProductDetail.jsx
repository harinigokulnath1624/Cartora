import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: p, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { addToCart } = useCart();

  if (loading) return <Loader />;
  if (error || !p) return <ErrorMessage message={error || "Product not found"} />;

  return (
    <section className="detail">
      <div className="detail-img"><img src={p.image} alt={p.title} /></div>
      <div>
        <Link to="/products" className="back">Back to shop</Link>
        <span className="chip">{p.category}</span>
        <h1>{p.title}</h1>
        <p className="rating">Rated {p.rating?.rate} / 5 by {p.rating?.count} buyers</p>
        <p>{p.description}</p>
        <p className="price">${p.price.toFixed(2)}</p>
        <button className="btn" onClick={() => addToCart(p)}>Add to cart</button>
      </div>
    </section>
  );
}
