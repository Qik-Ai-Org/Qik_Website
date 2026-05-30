import Home from "../src/components/Home";

export const metadata = {
  title: { absolute: "Qik Cloud Stack | 50+ Integrated Business Applications" },
  description:
    "Qik Cloud Stack — a family of free, open-source business applications. Discover OpenSign e-signatures, DocTrack document analytics, OpenCLM contract management and OpenBuzz social media automation.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
