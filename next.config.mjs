/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site (HTML/CSS/JS) suitable for GitHub Pages.
  output: "export",
  // Custom domain (www.qik.ai) serves from the root — no basePath needed.
  // Emit each route as a folder with its own index.html so deep links work
  // directly on GitHub Pages without any SPA redirect hack.
  trailingSlash: true,
  // GitHub Pages can't run the Next.js image optimizer.
  images: {
    unoptimized: true,
  },
  // Silence cross-origin warnings during local dev and keep builds reproducible.
  reactStrictMode: true,
};

export default nextConfig;
