import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CROWN COCO®",
    short_name: "CROWN COCO",
    description:
      "Premium Frozen Grated Coconut, Dry Fish, Dry Prawns and Fresh Cut Vegetables.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5EE",
    theme_color: "#0B5A3D",
    orientation: "portrait",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}