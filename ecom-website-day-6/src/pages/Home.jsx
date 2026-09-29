import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products?limit=4");
  return (
    <>
      <section className="hero">
        <div>
          <h1>Shop in pieces.<br />Build a set that fits you.</h1>
          <p>Clothing, jewellery and electronics, picked one tile at a time. Free returns on everything.</p>
          <Link to="/products" className="btn">Start shopping</Link>
        </div>
        <div className="mosaic" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i /><i />
        </div>
      </section>
      <section>
        <h2>Fresh tiles</h2>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {data && <ProductGrid products={data} />}
      </section>
    </>
  );
}
