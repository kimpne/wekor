/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',  // ✅ Vercel 최적화 필수
};

export default nextConfig;
