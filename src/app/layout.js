import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Spartan Fitness",
  description: "Premium fitness centers in Dhaka. Stronger Every Day. Healthier for Life.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="antialiased"
      style={{ scrollPaddingTop: "80px" }}
    >
      <body className="bg-[#0A0A0A] text-white font-body selection:bg-primary selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
