export default function Loader({ text = "Loading…" }) {
  return <p className="state" role="status">{text}</p>;
}
