import data from "../data.json";

export async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured); // filtra os produtos destacados

  return Response.json(featuredProducts); // retorna os produtos destacados como resposta JSON
}
