import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useCart } from "../context/CartContext";

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your full name";
  if (!v.email) e.email = "Enter your email";
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email like name@example.com";
  if (!/^\d{10}$/.test(v.phone)) e.phone = "Phone number must be 10 digits";
  if (v.address.trim().length < 10) e.address = "Enter your full address (at least 10 characters)";
  if (!/^\d{6}$/.test(v.pincode)) e.pincode = "Pincode must be 6 digits";
  return e;
};

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", address: "", pincode: "" },
    validate,
    onSubmit: (values, { resetForm }) => {
      setOrderId("CRT-" + Date.now().toString().slice(-6));
      clearCart();
      resetForm();
    },
  });

  if (orderId)
    return (
      <section className="state">
        <h1>Order placed</h1>
        <p>Your order number is <strong>{orderId}</strong>. A confirmation is on its way.</p>
        <Link to="/products" className="btn">Keep shopping</Link>
      </section>
    );

  if (!items.length)
    return (
      <section className="state">
        <h1>Nothing to check out</h1>
        <Link to="/products" className="btn">Browse products</Link>
      </section>
    );

  const field = (name, label, type = "text") => (
    <label className="field">
      {label}
      <input type={type} {...formik.getFieldProps(name)} />
      {formik.touched[name] && formik.errors[name] && <small className="err">{formik.errors[name]}</small>}
    </label>
  );

  return (
    <section className="checkout">
      <form onSubmit={formik.handleSubmit} noValidate>
        <h1>Delivery details</h1>
        {field("name", "Full name")}
        {field("email", "Email", "email")}
        {field("phone", "Phone number", "tel")}
        <label className="field">
          Address
          <textarea rows="3" {...formik.getFieldProps("address")} />
          {formik.touched.address && formik.errors.address && <small className="err">{formik.errors.address}</small>}
        </label>
        {field("pincode", "Pincode")}
        <button type="submit" className="btn" disabled={formik.isSubmitting}>Place order</button>
      </form>
      <aside className="summary">
        <h2>Order summary</h2>
        {items.map((i) => (
          <p key={i.id}><span>{i.qty} × {i.title.slice(0, 28)}…</span><span>${(i.qty * i.price).toFixed(2)}</span></p>
        ))}
        <p className="sum-total"><span>Total</span><strong>${total.toFixed(2)}</strong></p>
      </aside>
    </section>
  );
}
