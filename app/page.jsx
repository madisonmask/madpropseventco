import HomePageClient from "./HomePageClient";

export const metadata = {
  title: "Custom Event Props, Photo Backdrops & Scenic Fabrication in Dallas | Mad Props Event Co",
  description:
    "Mad Props Event Co designs and builds custom event props, photo backdrops, scenic fabrication, and branded installations in Dallas-Fort Worth for corporate events, festivals, private parties, and community activations.",
  keywords: [
    "event props Dallas",
    "custom event props Dallas",
    "photo backdrop Dallas",
    "event photo backdrop Dallas",
    "photo op installation Dallas",
    "scenic fabrication Dallas",
    "event installation Dallas",
    "festival props Dallas",
    "custom backdrop Dallas",
    "experiential fabrication Dallas",
    "brand activation fabrication Dallas",
    "DFW event props",
  ],
  alternates: {
    canonical: "https://www.madpropsevent.co/",
  },
  openGraph: {
    title: "Mad Props Event Co | Custom Event Props & Scenic Fabrication in Dallas",
    description:
      "Custom props, scenic fabrication, photo backdrops, and bold event installs for brands, festivals, HOAs, and private events in Dallas-Fort Worth.",
    url: "https://www.madpropsevent.co/",
    siteName: "Mad Props Event Co",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.madpropsevent.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mad Props Event Co custom event props and scenic fabrication in Dallas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mad Props Event Co | Custom Event Props & Scenic Fabrication in Dallas",
    description:
      "Custom event props, scenic fabrication, photo backdrops, and temporary installations in Dallas-Fort Worth.",
    images: ["https://www.madpropsevent.co/og-image.jpg"],
  },
};

export default function Page() {
  return <HomePageClient />;
}
