import MadPropsCarnival from "./MadPropsCarnival";

export const metadata = {
  title:
    "Custom Scenic & Experiential Fabrication Dallas | Mad Props Event Co",
  description:
    "Custom props, scenic elements, and branded installations for experiential agencies, brand activations, and trade shows. Based in Dallas–Fort Worth.",
  keywords: [
    "custom fabrication Dallas",
    "scenic fabrication Dallas",
    "experiential fabrication Dallas",
    "brand activation fabrication Dallas",
    "trade show fabrication Dallas",
    "custom exhibit elements Dallas",
    "custom props Dallas",
    "branded installations DFW",
  ],
  alternates: {
    canonical: "https://www.madpropsevent.co/",
  },
  openGraph: {
    title:
      "Mad Props Event Co | Custom Fabrication for Brand Experiences",
    description:
      "Custom props, scenic elements, and branded installations for experiential agencies, brand activations, and trade shows in Dallas–Fort Worth.",
    url: "https://www.madpropsevent.co/",
    siteName: "Mad Props Event Co",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.madpropsevent.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mad Props Event Co custom props and scenic fabrication in Dallas",
      },
    ],
  },
};

export default function Page() {
  return <MadPropsCarnival />;
}

