import ProductsIndex from "../../src/components/products/ProductsIndex";
import JsonLd from "../jsonld";
import { buildProductsCollectionJsonLd } from "../../src/data/productCatalog";

export const metadata = {
  title: { absolute: "Products | Qik — Open-Source Business Software" },
  description:
    "Explore Qik's family of open-source products: OpenSign e-signatures, DocTrack document analytics, OpenCLM contract management and OpenBuzz social media automation.",
  keywords:
    "qik products, open source business software, opensign, doctrack, openclm, openbuzz, esignature, contract management, social media automation",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Qik — Open-Source Business Software",
    description:
      "OpenSign, DocTrack, OpenCLM and OpenBuzz — best-in-class open-source tools you can self-host, extend and own.",
    url: "/products",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildProductsCollectionJsonLd()} />
      <ProductsIndex />
    </>
  );
}
