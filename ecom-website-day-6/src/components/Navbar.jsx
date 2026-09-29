import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { count } = useCart();
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="Cartora home">
          <span className="logo-tiles"><i /><i /><i /><i /></span>
          Cartora
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart <span className="badge">{count}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
