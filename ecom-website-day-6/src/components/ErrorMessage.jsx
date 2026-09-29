export default function ErrorMessage({ message }) {
  return <p className="state error" role="alert">Couldn't load the store: {message}. Check your connection and refresh.</p>;
}
