"use client";
import React from "react";
import Link from "next/link";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { products, productPages } from "../../data/productCatalog";

const ProductsIndex = () => {
  const hubs = productPages.filter((p) => p.isHub);

  return (
    <>
      <Header />
      <main className="pl-page pl-index">
        <section className="pl-index-hero">
          <div className="pl-hero-glow" aria-hidden="true"></div>
          <div className="container">
            <span className="pl-eyebrow">The Qik Family of Products</span>
            <h1 className="pl-h1">Open-source software that powers modern businesses</h1>
            <p className="pl-sub">
              Qik builds and backs a growing family of free, open-source products. Each one is a
              best-in-class tool in its category — and yours to self-host, extend and own.
            </p>
          </div>
        </section>

        <section className="pl-section">
          <div className="container">
            <div className="pl-index-grid">
              {hubs.map((hub) => {
                const product = products[hub.product];
                const style = { "--pl-accent": product.accent, "--pl-accent2": product.accent2 };
                const clusters = productPages.filter(
                  (p) => p.product === product.key && !p.isHub
                );
                return (
                  <article className="pl-index-card" key={product.key} style={style}>
                    <div className="pl-index-card-head">
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="pl-index-logo"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                      />
                      <div>
                        <h2 className="pl-index-name">{product.name}</h2>
                        <span className="pl-index-cat">{product.category}</span>
                      </div>
                    </div>
                    <p className="pl-index-tagline">{product.tagline}</p>
                    <ul className="pl-index-links">
                      {clusters.map((c) => (
                        <li key={c.slug}>
                          <Link href={`/${c.slug}`}>{c.eyebrow}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="pl-index-actions">
                      <Link href={`/products/${product.key}`} className="pl-btn pl-btn-primary">
                        Learn more
                      </Link>
                      <a href={product.site} target="_blank" rel="noopener noreferrer" className="pl-btn pl-btn-outline">
                        Visit site
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsIndex;
