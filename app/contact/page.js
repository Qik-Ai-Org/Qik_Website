import Contact from "../../src/components/Contact";

export const metadata = {
  title: "Contact Qik — Talk to Our Team",
  description:
    "Get in touch with Qik. Ask about our open-source products — OpenSign, DocTrack, OpenCLM and OpenBuzz — request a demo or talk to our team. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Qik — Talk to Our Team",
    description: "Request a demo or talk to the Qik team about our open-source business software.",
    url: "/contact",
  },
};

export default function Page() {
  return <Contact />;
}
