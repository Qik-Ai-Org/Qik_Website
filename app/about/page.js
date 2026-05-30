import About from "../../src/components/home/About";

export const metadata = {
  title: "About Qik — Open-Source Business Software",
  description:
    "Qik Cloud Stack, powered by Qik Innovations Private Limited, builds 50+ integrated, AI-first, open-source business applications trusted by businesses worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Qik — Open-Source Business Software",
    description:
      "Qik Innovations builds AI-first, open-source business applications for compliance, HR, legal, documents and more.",
    url: "/about",
  },
};

export default function Page() {
  return <About />;
}
