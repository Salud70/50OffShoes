import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "600" }}>Notas recientes</h2>
      <div style={{ background: "white", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "1rem", marginBottom: "2rem" }}>
        <img src="/img/foto3.jpg" alt="Vendedor y comprador con un solo zapato" style={{ width: "100%", borderRadius: "0.5rem" }} />
        <h3 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>50% Off Shoes: el e-commerce que te permite comprar 1 zapato</h3>
        <p style={{ color: "#6b7280" }}>Una plataforma que apuesta por la inclusión y el consumo responsable.</p>
        <Link to="/articulo/3" style={{ display: "inline-block", marginTop: "0.5rem", color: "#2563eb" }}>Leer artículo completo →</Link>
      </div>
      <div style={{ background: "white", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "1rem" }}>
        <img src="/img/nota3.jpg" alt="Persona mostrando zapato único" style={{ width: "100%", borderRadius: "0.5rem" }} />
        <h3 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>Testimonio: “Ahora puedo comprar solo el zapato que necesito”</h3>
        <p style={{ color: "#6b7280" }}>Historias reales de usuarios que encontraron en 50% Off Shoes una solución adaptada a sus vidas.</p>
        <Link to="/articulo/4" style={{ display: "inline-block", marginTop: "0.5rem", color: "#2563eb" }}>Leer artículo completo →</Link>
      </div>
    </main>
  );
}
