"use client";
import React from "react";
import Link from "next/link";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { products, productPageMap } from "../../data/productCatalog";

const ProductLogo = ({ product }) => (
  <img
    src={product.logo}
    alt={`${product.name} logo`}
    className="pl-logo-img"
    loading="lazy"
    onError={(e) => {
      e.currentTarget.style.display = "none";
      const fallback = e.currentTarget.nextSibling;
      if (fallback) fallback.style.display = "flex";
    }}
  />
);

const ProductLanding = ({ slug: slugProp }) => {
  const slug = slugProp || "";
  const page = productPageMap[slug];

  if (!page) {
    return (
      <>
        <Header />
        <main className="pl-page">
          <div className="container pl-notfound">
            <h1>Page not found</h1>
            <p>The page you are looking for doesn’t exist.</p>
            <Link href="/products" className="pl-btn pl-btn-primary">Browse products</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const product = products[page.product];
  const style = { "--pl-accent": product.accent, "--pl-accent2": product.accent2 };
  const siblings = Object.values(productPageMap).filter(
    (p) => p.product === product.key && p.slug !== page.slug
  );

  return (
    <>
      <Header />
      <main className="pl-page" style={style}>
        {/* Breadcrumb */}
        <nav className="pl-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/products/${product.key}`}>{product.name}</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="pl-hero">
          <div className="pl-hero-glow" aria-hidden="true"></div>
          <div className="container pl-hero-inner">
            <div className="pl-hero-brand">
              <ProductLogo product={product} />
              <span className="pl-logo-fallback" aria-hidden="true">{product.name.charAt(0)}</span>
              <div className="pl-hero-brandtext">
                <span className="pl-product-name">{product.name}</span>
                <span className="pl-product-cat">{product.category}</span>
              </div>
            </div>
            {page.eyebrow && <span className="pl-eyebrow">{page.eyebrow}</span>}
            <h1 className="pl-h1">{page.hero.h1}</h1>
            <p className="pl-sub">{page.hero.sub}</p>
            <div className="pl-hero-actions">
              <a className="pl-btn pl-btn-primary" href={product.site} target="_blank" rel="noopener noreferrer">
                Visit {product.name}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </a>
              <Link className="pl-btn pl-btn-outline" href="/contact">Talk to us</Link>
            </div>
            <p className="pl-parentnote">
              A flagship open-source product from the <Link href="/">Qik</Link> family.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pl-section">
          <div className="container pl-narrow">
            {page.intro.map((para, i) => (
              <p key={i} className="pl-lead">{para}</p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="pl-section pl-section-alt">
          <div className="container">
            <h2 className="pl-h2 pl-center">Key capabilities</h2>
            <div className="pl-features">
              {page.features.map((feat, i) => (
                <div className="pl-feature" key={i}>
                  <span className="pl-feature-icon" aria-hidden="true">{feat.icon}</span>
                  <h3 className="pl-feature-title">{feat.title}</h3>
                  <p className="pl-feature-text">{feat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content sections */}
        {page.sections && page.sections.length > 0 && (
          <section className="pl-section">
            <div className="container pl-narrow">
              {page.sections.map((sec, i) => (
                <div className="pl-content-block" key={i}>
                  <h2 className="pl-h2">{sec.h2}</h2>
                  {sec.body.map((para, j) => (
                    <p key={j} className="pl-body">{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Comparison table */}
        {page.comparison && (
          <section className="pl-section pl-section-alt">
            <div className="container pl-narrow">
              <h2 className="pl-h2 pl-center">{page.comparison.title}</h2>
              <div className="pl-table-wrap">
                <table className="pl-table">
                  <thead>
                    <tr>
                      {page.comparison.columns.map((col, i) => (
                        <th key={i} className={i === 1 ? "pl-table-highlight" : ""}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparison.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          j === 0
                            ? <th scope="row" key={j}>{cell}</th>
                            : <td key={j} className={j === 1 ? "pl-table-highlight" : ""}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {page.faqs && page.faqs.length > 0 && (
          <section className="pl-section">
            <div className="container pl-narrow">
              <h2 className="pl-h2 pl-center">Frequently asked questions</h2>
              <div className="pl-faqs">
                {page.faqs.map((faq, i) => (
                  <details className="pl-faq" key={i}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="pl-cta-section">
          <div className="container">
            <div className="pl-cta">
              <h2>{page.cta.heading}</h2>
              <p>{page.cta.text}</p>
              <a className="pl-btn pl-btn-light" href={product.site} target="_blank" rel="noopener noreferrer">
                {page.cta.button}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Internal links to sibling pages */}
        {siblings.length > 0 && (
          <section className="pl-section">
            <div className="container">
              <h2 className="pl-h2 pl-center">Explore more about {product.name}</h2>
              <div className="pl-related">
                {siblings.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="pl-related-card">
                    <span className="pl-related-eyebrow">{s.eyebrow}</span>
                    <span className="pl-related-title">{s.hero.h1}</span>
                    <span className="pl-related-arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductLanding;
