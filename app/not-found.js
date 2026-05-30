import Link from "next/link";
import Header from "../src/components/home/Header";
import Footer from "../src/components/home/Footer";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pl-page">
        <div className="container pl-notfound" style={{ padding: "120px 0", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            The page you are looking for doesn’t exist or has moved.
          </p>
          <Link href="/products" className="pl-btn pl-btn-primary">
            Browse products
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
