import Navbar from "../components/Navbar";

export default function Saved() {
  return (
    <>
      <Navbar />
      <h1 className="page-title">⏳ Saved For Later</h1>
      <p style={{ textAlign: "center" }}>
        Your saved trips will appear here.
      </p>
    </>
  );
}
