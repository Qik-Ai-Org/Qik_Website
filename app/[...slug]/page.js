import ProductLanding from "../../src/components/products/ProductLanding";
import JsonLd from "../jsonld";
import {
  productPages,
  productPageMap,
  products,
  buildProductPageJsonLd,
} from "../../src/data/productCatalog";

// Pre-render every SEO landing page (and product hub) at build time.
export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug.split("/") }));
}

export function generateMetadata({ params }) {
  const slug = (params.slug || []).join("/");
  const page = productPageMap[slug];
  if (!page) {
    return { title: "Page not found", robots: { index: false, follow: false } };
  }
  const product = products[page.product];
  return {
    title: { absolute: page.seo.title },
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: `/${slug}`,
      images: [{ url: product.logo, alt: `${product.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: [product.logo],
    },
  };
}

export default function Page({ params }) {
  const slug = (params.slug || []).join("/");
  return (
    <>
      <JsonLd data={buildProductPageJsonLd(slug)} />
      <ProductLanding slug={slug} />
    </>
  );
}
