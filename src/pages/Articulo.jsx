import { useParams } from "react-router-dom";

export default function Articulo() {
  const { id } = useParams();

  const articulos = {
    3: {
      titulo: "50% Off Shoes: el e-commerce que te permite comprar 1 zapato",
      contenido:
        "50% Off Shoes es un e-commerce pensado para personas amputadas. Permite comprar un solo zapato (izquierdo o derecho), reduciendo el desperdicio y mejorando la accesibilidad. Con un enfoque inclusivo y práctico, esta plataforma demuestra cómo una idea simple puede tener un impacto profundo.",
      imagen: "/img/image2.jpg"
    },
    4: {
      titulo: "Testimonio: “Ahora puedo comprar solo el zapato que necesito”",
      contenido:
        "Para muchas personas con amputación, pagar por un par de zapatos que nunca usarán completamente es frustrante. Esta historia muestra cómo una plataforma pensada para realidades diversas mejora la vida diaria.",
      imagen: "/img/nota3.jpg"
    }
  };

  const articulo = articulos[id];

  if (!articulo) return <p style={{ padding: "2rem" }}>Artículo no encontrado.</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <img src={articulo.imagen} alt={articulo.titulo} style={{ width: "100%", borderRadius: "0.5rem", marginBottom: "1rem" }} />
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "600" }}>{articulo.titulo}</h2>
      <p style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>{articulo.contenido}</p>
    </main>
  );
}
