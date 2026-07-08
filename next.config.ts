import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://player.vimeo.com https://f.vimeocdn.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://vumbnail.com https://i.vimeocdn.com https://*.vimeocdn.com",
      "media-src 'self' https://player.vimeo.com https://*.vimeocdn.com",
      "frame-src https://player.vimeo.com https://www.google.com https://www.google.com/maps",
      "connect-src 'self' https://player.vimeo.com https://f.vimeocdn.com",
      "font-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vumbnail.com" },
      { protocol: "https", hostname: "i.vimeocdn.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
