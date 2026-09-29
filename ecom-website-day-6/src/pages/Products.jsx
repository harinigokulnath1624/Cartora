import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import ProductGrid from "../components/ProductGrid";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Products() {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const query = useDebounce(search);

  const categories = useMemo(() => (data ? ["all", ...new Set(data.map((p) => p.category))] : ["all"]), [data]);

  const visible = useMemo(() => {
    if (!data) return [];
    let list = data.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        p.title.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [data, category, query, sort]);

  return (
    <section>
      <h1>All products</h1>
      <div className="filters">
        <input type="search" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search products" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category">
          {categories.map((c) => <option key={c} value={c}>{c === "all" ? "All categories" : c}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
          <option value="default">Sort: featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {data && <ProductGrid products={visible} />}
    </section>
  );
}
