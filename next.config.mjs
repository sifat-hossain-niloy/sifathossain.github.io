/** @type {import('next').NextConfig} */
// Set GITHUB_PAGES=true and NEXT_PUBLIC_BASE_PATH=/repo-name when deploying to
// https://<user>.github.io/<repo-name>. For a username repo (sifathossain.github.io)
// or a custom domain like sifathossain.com, leave NEXT_PUBLIC_BASE_PATH empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
