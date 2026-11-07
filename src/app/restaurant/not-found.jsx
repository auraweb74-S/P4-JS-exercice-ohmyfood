import Link from "next/link";

export default function RestaurantNotFound() {
  return (
    <main className="notFound">
      <p className="notFoundCode">404</p>

      <h1>Restaurant introuvable</h1>

      <p>
        Le restaurant demandé n’existe pas ou n’est plus disponible.
      </p>

      <Link href="/" className="notFoundLink">
        Retourner à l’accueil
      </Link>
    </main>
  );
}